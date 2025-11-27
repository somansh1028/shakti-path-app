
// This service calls the local backend, which then calls the Gemini API.
import type { Part } from '@google/genai';
import { API_BASE_URL, getHeaders } from '../config';

const MAX_RETRIES = 3;

// Helper function to introduce a delay
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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
                        throw new Error(parsed.error);
                    }
                } catch (e) {
                    console.error("Error parsing stream data:", jsonStr, e);
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

export const generateGeminiResponse = async (
  contents: Part[], 
  token: string,
  responseSchema?: object,
  retries = MAX_RETRIES
): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/gemini/structured-generate`, {
      method: 'POST',
      headers: getHeaders(token),
      body: JSON.stringify({ contents: [{ parts: contents }], responseSchema }), 
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
        return generateGeminiResponse(contents, token, responseSchema, retries - 1);
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
    
    if (responseSchema && typeof data.response === 'string') {
        try {
            return JSON.parse(data.response);
        } catch (e) {
             console.error("Failed to parse Gemini JSON response:", data.response, e);
             throw new Error("The AI returned an invalid data format.");
        }
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
