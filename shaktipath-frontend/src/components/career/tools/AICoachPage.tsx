
import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../../../contexts/I18nContext';
import { generateGeminiResponse } from '../../../services/geminiService';
import { SparkleIcon } from '../../icons/SparkleIcon';

interface AICoachPageProps {
  onBack: () => void;
}

const AICoachPage: React.FC<AICoachPageProps> = ({ onBack }) => {
  const { t } = useI18n();
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
      { role: 'model', text: 'Namaste! I am your Career Coach. Ask me anything about interviews, resumes, or career paths.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
      if (!input.trim()) return;
      const userText = input;
      setMessages(prev => [...prev, { role: 'user', text: userText }]);
      setInput('');
      setIsLoading(true);

      const token = localStorage.getItem('authToken');
      if (!token) return;

      try {
          const history = messages.map(m => `${m.role === 'user' ? 'User' : 'Coach'}: ${m.text}`).join('\n');
          const prompt = `You are a wise, encouraging Indian Career Coach. Keep answers short and practical.\n\n${history}\nUser: ${userText}\nCoach:`;
          
          const res = await generateGeminiResponse([{ text: prompt }], token);
          setMessages(prev => [...prev, { role: 'model', text: res }]);
      } catch (e) {
          console.error(e);
      } finally {
          setIsLoading(false);
      }
  };

  return (
    <div className="p-4 md:p-6 bg-indigo-50 dark:bg-indigo-950/30 min-h-full flex flex-col h-screen">
      <header className="relative flex items-center mb-4 flex-shrink-0">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-white/50 hover:bg-white dark:bg-black/20 dark:hover:bg-black/40 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-800 dark:text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 text-center flex-1">{t('career_tool_ai_coach_title')}</h1>
      </header>

      <div className="flex-1 overflow-y-auto bg-white dark:bg-neutral-800 rounded-3xl shadow-sm p-4 space-y-4 mb-4 border border-indigo-100 dark:border-indigo-900">
          {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      m.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-tl-none'
                  }`}>
                      {m.text}
                  </div>
              </div>
          ))}
          {isLoading && (
              <div className="flex justify-start">
                  <div className="bg-neutral-100 dark:bg-neutral-700 p-3 rounded-2xl rounded-tl-none flex space-x-1">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
              </div>
          )}
          <div ref={endRef} />
      </div>

      <div className="flex-shrink-0 flex gap-2">
          <input 
            className="flex-1 p-3 rounded-xl border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Ask for career advice..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            disabled={isLoading}
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 disabled:opacity-50 shadow-lg"
          >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
          </button>
      </div>
    </div>
  );
};

export default AICoachPage;
