
// This service calls the local backend, which then calls the Gemini API.
import { GoogleGenAI, LiveServerMessage, Modality, Blob } from '@google/genai';
import type { Part } from '@google/genai';
import { API_BASE_URL, getHeaders } from '../config';

const MAX_RETRIES = 3;

// Helper function to introduce a delay
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Generic stream function (used for basic chat if needed)
export const sendMessageToGeminiStream = async (
  message: string,
  token: string,
  onChunk: (chunk: string) => void,
  onError: (error: Error) => void
): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/gemini`, {
      method: 'POST',
      headers: getHeaders(token),
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
        if (response.status === 401) {
            window.dispatchEvent(new Event('auth-unauthorized'));
            throw new Error("UNAUTHORIZED");
        }
        let errorMsg = `HTTP error! status: ${response.status}`;
        try {
            const errorData = await response.json();
            errorMsg = errorData.error || errorMsg;
            if (errorData.details) {
                errorMsg += ` Details: ${errorData.details}`;
            }
        } catch(e) {
            // Ignore if response is not json
        }
        throw new Error(errorMsg);
    }
    
    const reader = response.body?.getReader();
    if (!reader) {
        throw new Error('Failed to get response reader.');
    }
    
    const decoder = new TextDecoder();

    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        
        const chunkText = decoder.decode(value, { stream: true });
        const lines = chunkText.split('\n\n').filter(line => line.trim() !== '');
        for (const line of lines) {
            if (line.startsWith('data:')) {
                const jsonStr = line.substring(5).trim();
                try {
                    const parsed = JSON.parse(jsonStr);
                    if (parsed.text) {
                        onChunk(parsed.text);
                    }
                     if (parsed.error) {
                        // Throwing here to break the loop and hit the catch block below
                        throw new Error(parsed.error);
                    }
                } catch (e) {
                    // Propagate the error to the caller
                    throw e; 
                }
            }
        }
    }

  } catch (error) {
    console.error("Error calling backend streaming API:", error);
    if (error instanceof Error) {
        onError(error);
    } else {
        onError(new Error('An unknown error occurred while communicating with the server.'));
    }
  }
};

// --- NEW FUNCTION FOR LESSON CHAT (TEXT) ---
export const streamGurujiChat = async (
    history: Array<{role: 'user' | 'model', text: string}>,
    message: string,
    context: string,
    userLanguage: string,
    token: string,
    onChunk: (chunk: string) => void,
    onError: (error: Error) => void
  ): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/learn/chat`, {
        method: 'POST',
        headers: getHeaders(token),
        body: JSON.stringify({ history, message, context, userLanguage }),
      });
  
      if (!response.ok) {
          if (response.status === 401) {
              window.dispatchEvent(new Event('auth-unauthorized'));
              throw new Error("UNAUTHORIZED");
          }
          let errorMsg = `HTTP error! status: ${response.status}`;
          try {
              const errorData = await response.json();
              errorMsg = errorData.error || errorMsg;
          } catch(e) { /* ignore */ }
          throw new Error(errorMsg);
      }
      
      const reader = response.body?.getReader();
      if (!reader) throw new Error('Failed to get reader');
      
      const decoder = new TextDecoder();
  
      while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunkText = decoder.decode(value, { stream: true });
          const lines = chunkText.split('\n\n').filter(line => line.trim() !== '');
          for (const line of lines) {
              if (line.startsWith('data:')) {
                  const jsonStr = line.substring(5).trim();
                  try {
                      const parsed = JSON.parse(jsonStr);
                      if (parsed.text) onChunk(parsed.text);
                      if (parsed.error) throw new Error(parsed.error);
                  } catch (e) {
                      // Important: Rethrow so the outer catch block handles it and calls onError
                      throw e;
                  }
              }
          }
      }
  
    } catch (error) {
      console.error("Guruji Chat Error:", error);
      if (error instanceof Error) onError(error);
      else onError(new Error('Unknown error connecting to Guruji.'));
    }
  };

export const generateGeminiResponse = async (
  contents: Part[], 
  token: string,
  responseSchema?: object,
  location?: { latitude: number; longitude: number } | null,
  retries = MAX_RETRIES
): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/gemini/structured-generate`, {
      method: 'POST',
      headers: getHeaders(token),
      body: JSON.stringify({ 
          contents: [{ parts: contents }], 
          responseSchema,
          location // Pass location if available for Maps Grounding
      }), 
    });

    if (!response.ok) {
      if (response.status === 401) {
        window.dispatchEvent(new Event('auth-unauthorized'));
        throw new Error("UNAUTHORIZED");
      }

      // Intelligent Retry Logic: Only retry for 503 (Service Unavailable)
      if (response.status === 503 && retries > 0) {
        const delay = (MAX_RETRIES - retries + 1) * 1000; // 1s, 2s, 3s
        console.warn(`AI model is busy (503). Retrying in ${delay / 1000}s... (${retries - 1} retries left)`);
        await sleep(delay);
        return generateGeminiResponse(contents, token, responseSchema, location, retries - 1);
      }

      // For all other errors (like 429), fail immediately.
      let errorMsg = `HTTP error! status: ${response.status}`;
      try {
        const errorData = await response.json();
        // Pass the specific error message from the backend
        errorMsg = errorData.error || errorMsg;
        if (errorData.details) {
            errorMsg += ` Details: ${errorData.details}`;
        }
      } catch (e) {
        // Ignore if response is not json
      }
      throw new Error(errorMsg);
    }

    const data = await response.json();
    
    // If structured JSON was requested via Schema, parse it
    if (responseSchema && typeof data.response === 'string') {
        try {
            return JSON.parse(data.response);
        } catch (e) {
             console.error("Failed to parse Gemini JSON response:", data.response, e);
             throw new Error("The AI returned an invalid data format.");
        }
    }

    // Return text response directly if no schema (e.g. Maps Tool used)
    // We also return groundingMetadata if it exists so the UI can show the Maps verification
    if (data.groundingMetadata) {
        return { text: data.response, groundingMetadata: data.groundingMetadata };
    }

    return data.response;

  } catch (error) {
    console.error("Error calling backend generation API:", error);
    if (error instanceof Error) {
        if (error.message.includes("UNAUTHORIZED")) {
            throw error; // Re-throw to be handled by UI
        }
        // If we've run out of retries for a 503, throw the specific "overloaded" message
        if (retries === 0 && error.message.includes("503")) {
            throw new Error("The AI model is currently overloaded. Please try again in a moment.");
        }
        if (error.message.includes("429")) {
            throw new Error("You've made too many requests. Please wait a minute before trying again.");
        }
        throw error; 
    }
    throw new Error('An unknown error occurred while communicating with the server.');
  }
};

// --- GEMINI LIVE API (VOICE) IMPLEMENTATION ---

// Ensure process is defined to avoid TS errors in browser
declare const process: any;

// Helper functions for audio processing
function createBlob(data: Float32Array): Blob {
  const l = data.length;
  const int16 = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    int16[i] = data[i] * 32768;
  }
  return {
    data: encode(new Uint8Array(int16.buffer)),
    mimeType: 'audio/pcm;rate=16000',
  };
}

function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

export const startGurujiLiveSession = async (
    lessonContext: string,
    onStatusChange: (status: 'connected' | 'disconnected' | 'listening' | 'speaking' | 'error') => void,
    onError: (error: Error) => void
): Promise<() => void> => {
    
    // Attempt to get API key from various sources
    let apiKey = '';
    
    // 1. Try Vite env vars (Standard for this project)
    try {
        apiKey = (import.meta as any).env.VITE_API_KEY || (import.meta as any).env.VITE_GEMINI_API_KEY;
    } catch (e) {}

    // 2. Try standard process.env (fallback/bundler)
    if (!apiKey) {
        try {
            if (typeof process !== 'undefined' && process.env) {
                apiKey = process.env.API_KEY || process.env.REACT_APP_API_KEY;
            }
        } catch (e) {}
    }

    // 3. Fallback: Fetch from backend if authenticated
    if (!apiKey) {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                const res = await fetch(`${API_BASE_URL}/api/config/voice-key`, {
                    headers: getHeaders(token)
                });
                if (res.ok) {
                    const data = await res.json();
                    apiKey = data.key;
                }
            } catch (e) {
                console.warn("Failed to fetch config key from backend", e);
            }
        }
    }
    
    if (!apiKey) {
        // Critical Error: Cannot proceed without key
        const error = new Error("Voice API Key not found. Please add VITE_API_KEY to your .env file or check server configuration.");
        console.error(error.message);
        onError(error);
        return () => {};
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    let nextStartTime = 0;
    const inputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 16000});
    const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});
    const outputNode = outputAudioContext.createGain();
    const sources = new Set<AudioBufferSourceNode>();
    
    let stream: MediaStream | null = null;
    let scriptProcessor: ScriptProcessorNode | null = null;
    let inputSource: MediaStreamAudioSourceNode | null = null;
    let isConnected = false; // Flag to prevent sending data after close

    try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        onStatusChange('connected');
    } catch (e) {
        onError(new Error("Microphone permission denied"));
        return () => {};
    }

    const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
            onopen: () => {
                isConnected = true;
                onStatusChange('listening');
                // Setup Input Stream (Mic -> Gemini)
                inputSource = inputAudioContext.createMediaStreamSource(stream!);
                scriptProcessor = inputAudioContext.createScriptProcessor(4096, 1, 1);
                
                scriptProcessor.onaudioprocess = (audioProcessingEvent) => {
                    if (!isConnected) return; // Prevent sending if closed
                    
                    const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
                    const pcmBlob = createBlob(inputData);
                    sessionPromise.then((session) => {
                        if (isConnected) {
                            session.sendRealtimeInput({ media: pcmBlob });
                        }
                    }).catch(err => {
                        // Suppress errors during closing phase
                        if (isConnected) console.warn("Send failed", err);
                    });
                };
                
                inputSource.connect(scriptProcessor);
                scriptProcessor.connect(inputAudioContext.destination);
            },
            onmessage: async (message: LiveServerMessage) => {
                if (!isConnected) return;

                const base64EncodedAudioString = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
                
                if (base64EncodedAudioString) {
                    onStatusChange('speaking');
                    nextStartTime = Math.max(nextStartTime, outputAudioContext.currentTime);
                    
                    try {
                        const audioBuffer = await decodeAudioData(
                            decode(base64EncodedAudioString),
                            outputAudioContext,
                            24000,
                            1,
                        );
                        
                        const source = outputAudioContext.createBufferSource();
                        source.buffer = audioBuffer;
                        source.connect(outputNode);
                        outputNode.connect(outputAudioContext.destination);
                        
                        source.addEventListener('ended', () => {
                            sources.delete(source);
                            if (sources.size === 0 && isConnected) {
                                onStatusChange('listening');
                            }
                        });

                        source.start(nextStartTime);
                        nextStartTime = nextStartTime + audioBuffer.duration;
                        sources.add(source);
                    } catch (e) {
                        console.error("Audio decoding error", e);
                    }
                }

                // Handle Interruptions
                const interrupted = message.serverContent?.interrupted;
                if (interrupted) {
                    for (const source of sources.values()) {
                        source.stop();
                        sources.delete(source);
                    }
                    nextStartTime = 0;
                    if (isConnected) onStatusChange('listening');
                }
            },
            onerror: (e: any) => {
                console.error("Live API Error", e);
                isConnected = false;
                onStatusChange('error');
                onError(new Error("Connection error with Guruji"));
            },
            onclose: (e: CloseEvent) => {
                console.log("Live Session Closed", e);
                isConnected = false;
                onStatusChange('disconnected');
            },
        },
        config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
                voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Charon' } }, // Using Charon for a wise, calm voice
            },
            systemInstruction: `You are Guruji, a friendly, patient, and wise tutor.
            Current Context (Lesson or Assignment): 
            ${lessonContext.substring(0, 2000)}
            
            Instructions:
            - If it's an ASSIGNMENT: Help the student understand the task. Do NOT solve it for them.
            - If it's a LESSON: Explain concepts simply.
            - Speak slowly and clearly.`, 
        },
    });

    // Return a disconnect function to clean up everything
    return () => {
        isConnected = false; // Stop audio processing loop
        sessionPromise.then(session => session.close()).catch(() => {});
        
        if (inputSource) inputSource.disconnect();
        if (scriptProcessor) scriptProcessor.disconnect();
        if (stream) stream.getTracks().forEach(track => track.stop());
        
        outputNode.disconnect();
        inputAudioContext.close();
        outputAudioContext.close();
        
        sources.forEach(s => s.stop());
        sources.clear();
    };
};
