
import React, { useState, useEffect, useRef } from 'react';
import { GurujiIcon } from '../icons/GurujiIcon';
import { useI18n } from '../../contexts/I18nContext';
import { streamGurujiChat } from '../../services/geminiService';
import { SparkleIcon } from '../icons/SparkleIcon';

interface LessonChatWidgetProps {
  lessonTitle: string;
  lessonContent: string;
}

interface Message {
    role: 'user' | 'model';
    text: string;
    isError?: boolean;
}

const LessonChatWidget: React.FC<LessonChatWidgetProps> = ({ lessonTitle, lessonContent }) => {
  const { t, language } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with a greeting when opened for the first time
  const hasInitialized = useRef(false);

  useEffect(() => {
      if (isOpen && !hasInitialized.current) {
          hasInitialized.current = true;
          // Localized greeting
          const greeting = t('lesson_chat_welcome');
          setMessages([{ role: 'model', text: greeting }]);
      }
  }, [isOpen, t]);

  useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async () => {
      if (!input.trim()) return;
      
      const userMsg: Message = { role: 'user', text: input };
      setMessages(prev => [...prev, userMsg]);
      setInput('');
      setIsLoading(true);

      const token = localStorage.getItem('authToken');
      if (!token) {
          setMessages(prev => [...prev, { role: 'model', text: "Please log in to ask Guruji.", isError: true }]);
          setIsLoading(false);
          return;
      }

      let currentResponse = "";
      
      // Add a placeholder message for streaming
      setMessages(prev => [...prev, { role: 'model', text: "" }]);

      await streamGurujiChat(
          messages, // Send history (excludes current user message/placeholder logic handles that locally for UI, but for API history we rely on state pre-update)
          userMsg.text,
          lessonContent,
          language,
          token,
          (chunk) => {
              currentResponse += chunk;
              setMessages(prev => {
                  const newHistory = [...prev];
                  // Update the last message (model placeholder)
                  if (newHistory.length > 0) {
                      newHistory[newHistory.length - 1] = { role: 'model', text: currentResponse };
                  }
                  return newHistory;
              });
          },
          (error) => {
              console.error(error);
              setMessages(prev => {
                  const newHistory = [...prev];
                  const errorMsg = error.message.includes('429') 
                    ? "Guruji is busy right now. Please try again in a minute." 
                    : "Sorry, I lost connection. Please check your internet or try again.";
                  
                  if (newHistory.length > 0 && newHistory[newHistory.length - 1].role === 'model' && newHistory[newHistory.length - 1].text === "") {
                      // If placeholder is empty, replace it with error
                      newHistory[newHistory.length - 1] = { role: 'model', text: errorMsg, isError: true };
                  } else {
                      // Append error
                      newHistory.push({ role: 'model', text: errorMsg, isError: true });
                  }
                  return newHistory;
              });
              setIsLoading(false);
          }
      );
      
      setIsLoading(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-4 z-40 p-0 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 group"
        aria-label="Ask Guruji"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center border-4 border-white dark:border-neutral-800">
            {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <GurujiIcon className="w-10 h-10 text-white animate-pulse-slow" />
            )}
        </div>
        {!isOpen && (
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white px-3 py-1.5 rounded-xl shadow-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {t('lesson_chat_title')}
            </span>
        )}
      </button>

      {/* Chat Sheet / Window */}
      {isOpen && (
          <div className="fixed bottom-0 right-0 w-full md:w-96 md:right-4 md:bottom-24 h-[60vh] md:h-[500px] bg-white dark:bg-neutral-900 rounded-t-3xl md:rounded-3xl shadow-2xl z-50 flex flex-col border border-neutral-200 dark:border-neutral-700 animate-fade-in-up">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-100 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/10 p-4 rounded-t-3xl flex justify-between items-center border-b border-orange-200 dark:border-orange-800">
                  <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
                          <GurujiIcon className="w-6 h-6" />
                      </div>
                      <div>
                          <h3 className="font-bold text-neutral-900 dark:text-white">{t('lesson_chat_title')}</h3>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">Helper for "{lessonTitle}"</p>
                      </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-black/5 rounded-full dark:hover:bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50 dark:bg-neutral-900/50">
                  {messages.map((m, i) => (
                      <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                              m.role === 'user' 
                              ? 'bg-primary-600 text-white rounded-tr-none' 
                              : m.isError 
                                ? 'bg-red-50 text-red-600 border border-red-200 rounded-tl-none'
                                : 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-tl-none shadow-sm'
                          }`}>
                              {m.text}
                          </div>
                      </div>
                  ))}
                  {isLoading && messages[messages.length-1]?.role === 'user' && (
                      <div className="flex justify-start">
                          <div className="bg-white dark:bg-neutral-800 p-3 rounded-2xl rounded-tl-none border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center space-x-2">
                              <SparkleIcon className="w-4 h-4 text-orange-500 animate-spin" />
                              <span className="text-xs text-neutral-400">Thinking...</span>
                          </div>
                      </div>
                  )}
                  <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 rounded-b-3xl">
                  <div className="flex space-x-2">
                      <input 
                        className="flex-1 bg-neutral-100 dark:bg-neutral-700 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-400 dark:text-white"
                        placeholder={t('lesson_chat_placeholder')}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        disabled={isLoading}
                      />
                      <button 
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        className="bg-orange-500 text-white p-3 rounded-xl hover:bg-orange-600 disabled:opacity-50 transition-colors shadow-lg shadow-orange-500/30"
                      >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                      </button>
                  </div>
              </div>
          </div>
      )}
    </>
  );
};

export default LessonChatWidget;
