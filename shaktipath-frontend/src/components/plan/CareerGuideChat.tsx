
import React, { useState, useEffect, useRef } from 'react';
import { getCareerGuidePrompt } from '../../data/prompts';
import { generateGeminiResponse } from '../../services/geminiService';
import type { ChatMessage, CareerPathRecommendation } from '../../types';
import { DidiIcon } from '../icons/DidiIcon';
import { UserAvatarIcon } from '../icons/UserAvatarIcon';
import { useI18n } from '../../contexts/I18nContext';

// Robust helper to parse JSON from markdown code blocks
const extractJson = (text: string): CareerPathRecommendation | null => {
  // 1. Try regex for code block
  const jsonBlockRegex = /```(?:json)?\s*([\s\S]*?)(?:```|$)/i;
  const match = text.match(jsonBlockRegex);

  if (match && match[1]) {
    try {
        // Basic cleanup of the match
        let content = match[1].trim();
        // Find the first { and last } to handle any leading/trailing whitespace or text inside block
        const start = content.indexOf('{');
        const end = content.lastIndexOf('}');
        if (start !== -1 && end !== -1) {
            content = content.substring(start, end + 1);
            return JSON.parse(content);
        }
    } catch (e) {
      console.error("Failed to parse JSON from code block", e);
    }
  }

  // 2. Fallback: Look for raw JSON structure in the text if no code block found
  try {
      const start = text.indexOf('{');
      const end = text.lastIndexOf('}');
      if (start !== -1 && end !== -1 && end > start) {
          const potentialJson = text.substring(start, end + 1);
          // Quick check if it looks like our specific JSON
          if (potentialJson.includes('"primary_path"')) {
              return JSON.parse(potentialJson);
          }
      }
  } catch (e) {
      console.error("Failed to parse raw JSON fallback", e);
  }

  return null;
};

// Helper to extract numbered options from text
const parseMessageContent = (text: string) => {
    const lines = text.split('\n');
    const options: string[] = [];
    const textLines: string[] = [];

    lines.forEach(line => {
      const match = line.match(/^\d+[\.)]\s*(.*)/);
      if (match) {
        options.push(match[1].trim());
      } else {
        textLines.push(line);
      }
    });

    return { textContent: textLines.join('\n').trim(), options };
};

interface CareerGuideChatProps {
  onRecommendationComplete: (data: CareerPathRecommendation) => void;
}

const CareerGuideChat: React.FC<CareerGuideChatProps> = ({ onRecommendationComplete }) => {
  const { t, language } = useI18n();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isChatComplete, setIsChatComplete] = useState(false);
  
  // New state to track if user has clicked "Start"
  const [hasStarted, setHasStarted] = useState(false);

  // Get the system prompt based on current language
  const systemPrompt = getCareerGuidePrompt(language);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, error]);

  // OPTIMIZATION: Use static greeting instead of API call to save quota
  useEffect(() => {
    // Reset state on language change
    setHasStarted(false);
    setIsChatComplete(false);
    
    let greetingText = "Namaste! I am your ShaktiPath Career Guide. Lets find what you like by answering few questions. Are you ready?";
    if (language === 'hi') {
        greetingText = "नमस्ते! मैं आपकी शक्तिपथ करियर गाइड हूं। आइए कुछ सवालों के जवाब देकर जानें कि आपको क्या पसंद है। क्या आप तैयार हैं?";
    } else if (language === 'mr') {
        greetingText = "नमस्ते! मी तुमची शक्तिपथ करिअर मार्गदर्शक आहे. काही प्रश्नांची उत्तरे देऊन तुम्हाला काय आवडते ते शोधूया. तुम्ही तयार आहात का?";
    }

    setMessages([{ role: 'model', text: greetingText }]);
  }, [language]);

  const handleStartChat = () => {
      setHasStarted(true);
      // We send a hidden message to the AI to trigger the first question
      handleSendMessage("I am ready to start. Ask me the first question.");
  };

  const handleSendMessage = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;
    
    // Only show user message if it's NOT the hidden start command
    if (!textToSend.includes("I am ready to start")) {
        const userMsg: ChatMessage = { role: 'user', text: textToSend };
        setMessages(prev => [...prev, userMsg]);
    }
    
    setInput('');
    setIsLoading(true);
    setError(null);

    const token = localStorage.getItem('authToken');
    if (!token) {
        setError("UNAUTHORIZED");
        setIsLoading(false);
        return;
    }

    try {
        const historyParts = [
            { text: systemPrompt },
            ...messages.map(m => ({ text: `${m.role === 'user' ? 'User' : 'Model'}: ${m.text}` })),
            { text: `User: ${textToSend}` }
        ];

        const responseText = await generateGeminiResponse(historyParts, token);
        
        const recommendation = extractJson(responseText);
        
        // Clean the text for display
        let cleanText = responseText.replace(/```(?:json)?[\s\S]*?(?:```|$)/i, '').trim();
        
        // Fallback cleaning
        const keyIndex = cleanText.indexOf('"primary_path"');
        if (keyIndex !== -1) {
            const openBrace = cleanText.lastIndexOf('{', keyIndex);
            if (openBrace !== -1) {
                cleanText = cleanText.substring(0, openBrace).trim();
            }
        }

        if (cleanText) {
            setMessages(prev => [...prev, { role: 'model', text: cleanText }]);
        }

        if (recommendation) {
            setIsChatComplete(true);
            setTimeout(() => {
                onRecommendationComplete(recommendation);
            }, 2000);
        }

    } catch (e) {
        console.error("Chat error", e);
        if (e instanceof Error) {
            if (e.message.includes("UNAUTHORIZED")) {
                setError("UNAUTHORIZED");
            } else if (e.message.includes("API Key") || e.message.includes("403")) {
                setError(e.message);
            } else if (e.message.includes("quota") || e.message.includes("429")) {
                setMessages(prev => [...prev, { role: 'model', text: "I'm receiving too many messages right now. Please wait a minute and try again." }]);
            } else {
                setMessages(prev => [...prev, { role: 'model', text: "Sorry, I didn't catch that. Could you say it again?" }]);
            }
        }
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSessionExpired = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userEmail');
      window.location.reload();
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] md:h-[650px] bg-neutral-50 dark:bg-neutral-900 rounded-[2rem] shadow-2xl overflow-hidden border border-white/20 relative">
      {/* Decorative Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-orange-100/60 to-transparent pointer-events-none dark:from-orange-900/20" />

      {/* Header */}
      <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md p-4 flex items-center border-b border-neutral-100 dark:border-neutral-700 z-10 sticky top-0">
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center shadow-lg mr-4 ring-4 ring-white dark:ring-neutral-700">
            <DidiIcon className="w-8 h-8 text-white animate-pulse-slow" />
        </div>
        <div>
            <h2 className="font-display font-bold text-xl text-neutral-900 dark:text-white leading-none">{t('plan_chat_title')}</h2>
            <p className="text-sm font-medium text-orange-600 dark:text-orange-400 flex items-center mt-1">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                {t('plan_chat_subtitle')}
            </p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 z-0">
        {messages.map((msg, index) => {
            const isLastMessage = index === messages.length - 1;
            const isModel = msg.role === 'model';
            
            const { textContent, options } = (isLastMessage && isModel && !isChatComplete) 
                ? parseMessageContent(msg.text) 
                : { textContent: msg.text, options: [] };

            return (
              <div key={index} className={`flex w-full ${isModel ? 'justify-start' : 'justify-end'} animate-fade-in-up`}>
                {isModel && (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900/30 dark:to-orange-900/30 flex-shrink-0 mr-3 mt-auto mb-2 shadow-sm flex items-center justify-center text-pink-600 dark:text-pink-300 border border-pink-200 dark:border-pink-800">
                        <DidiIcon className="w-6 h-6" />
                    </div>
                )}
                
                <div className="flex flex-col max-w-[85%]">
                    <div 
                        className={`px-5 py-4 text-[15px] leading-relaxed whitespace-pre-wrap shadow-sm ${
                            isModel
                            ? 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-2xl rounded-bl-none border border-neutral-100 dark:border-neutral-700' 
                            : 'bg-primary-600 text-white rounded-2xl rounded-br-none bg-gradient-to-r from-primary-600 to-primary-500'
                        }`}
                    >
                      {textContent}
                    </div>
                    
                    {/* Quick Reply Options (Cards) */}
                    {options.length > 0 && (
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                            {options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleSendMessage(opt)}
                                    className="group relative bg-white dark:bg-neutral-800 border-2 border-orange-100 dark:border-neutral-700 hover:border-orange-500 dark:hover:border-orange-500 p-3 rounded-xl text-left transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
                                >
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 rounded-full bg-orange-50 dark:bg-neutral-700 text-orange-600 dark:text-orange-400 font-bold text-xs flex items-center justify-center mr-3 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                            {i + 1}
                                        </div>
                                        <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 group-hover:text-orange-700 dark:group-hover:text-white">
                                            {opt}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {!isModel && (
                    <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 flex-shrink-0 ml-3 mt-auto mb-2 overflow-hidden shadow-md">
                        <UserAvatarIcon className="w-full h-full" />
                    </div>
                )}
              </div>
            );
        })}
        
        {isLoading && (
          <div className="flex justify-start animate-pulse">
             <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 mr-3 mt-auto mb-2"></div>
             <div className="bg-white dark:bg-neutral-800 px-5 py-4 rounded-2xl rounded-bl-none shadow-sm border border-neutral-100 dark:border-neutral-700 flex space-x-2 items-center h-12">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
             </div>
          </div>
        )}
        
        {(error === "UNAUTHORIZED" || (error && (error.includes("API Key") || error.includes("Configuration")))) && (
            <div className="flex justify-center my-4 animate-fade-in">
                <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 p-4 rounded-xl text-center">
                    <p className="text-sm text-red-600 dark:text-red-300 font-medium mb-3">
                        {error === "UNAUTHORIZED" ? "Session expired. Please log in again." : error}
                    </p>
                    {error === "UNAUTHORIZED" && (
                        <button 
                            onClick={handleSessionExpired}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors"
                        >
                            Log In Again
                        </button>
                    )}
                </div>
            </div>
        )}

        {/* Start Button - Only shows initially */}
        {!hasStarted && !isLoading && (
            <div className="flex justify-center mt-6 animate-fade-in-up">
                <button
                    onClick={handleStartChat}
                    className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-lg flex items-center"
                >
                    <span className="mr-2">✨</span>
                    {language === 'hi' ? 'हाँ, शुरू करें' : language === 'mr' ? 'हो, सुरू करूया' : 'Yes, Let\'s Start'}
                </button>
            </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area - Only shows AFTER start button is clicked */}
      {hasStarted && !isChatComplete && error !== "UNAUTHORIZED" && !error?.includes("API Key") && (
          <div className="p-4 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 z-10">
            <div className="flex space-x-3 items-end">
                <div className="flex-1 bg-neutral-100 dark:bg-neutral-700 rounded-2xl flex items-center px-4 border border-transparent focus-within:border-orange-300 focus-within:ring-2 focus-within:ring-orange-100 dark:focus-within:ring-neutral-600 transition-all">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your answer here..."
                        disabled={isLoading}
                        className="flex-1 bg-transparent border-none py-3 focus:ring-0 dark:text-white placeholder-neutral-400 text-sm"
                    />
                </div>
                <button
                    onClick={() => handleSendMessage()}
                    disabled={!input.trim() || isLoading}
                    className="bg-orange-500 text-white p-3 rounded-2xl hover:bg-orange-600 disabled:bg-neutral-300 dark:disabled:bg-neutral-600 transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105 active:scale-95"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </button>
            </div>
          </div>
      )}
    </div>
  );
};

export default CareerGuideChat;
