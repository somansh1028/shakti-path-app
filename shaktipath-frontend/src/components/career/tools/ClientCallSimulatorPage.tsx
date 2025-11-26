
import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from '../../../contexts/I18nContext';
import { generateGeminiResponse } from '../../../services/geminiService';
import { SparkleIcon } from '../../icons/SparkleIcon';

interface ClientCallSimulatorPageProps {
  onBack: () => void;
}

interface Message {
    role: 'user' | 'model';
    text: string;
}

const ClientCallSimulatorPage: React.FC<ClientCallSimulatorPageProps> = ({ onBack }) => {
  const { t } = useI18n();
  const [scenario, setScenario] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scenarios = [
      { id: 'negotiation', label: '💰 Price Negotiation', prompt: 'Act as a client who thinks my price is too high. Be polite but firm. I am a freelancer.' },
      { id: 'scope_creep', label: '🚧 Scope Creep', prompt: 'Act as a client asking for "just one small extra thing" for free. I need to politely decline.' },
      { id: 'angry', label: '😡 Angry Client', prompt: 'Act as a client whose project is late. You are frustrated. I need to calm you down.' },
  ];

  useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const startScenario = async (selected: typeof scenarios[0]) => {
      setScenario(selected.id);
      setMessages([]);
      setFeedback(null);
      setIsLoading(true);

      const token = localStorage.getItem('authToken');
      if (!token) return;

      try {
          // Initial message from AI
          const res = await generateGeminiResponse([{ text: `${selected.prompt} Start the conversation with a short message.` }], token);
          setMessages([{ role: 'model', text: res }]);
      } catch (e) {
          console.error(e);
      } finally {
          setIsLoading(false);
      }
  };

  const handleSend = async () => {
      if (!input.trim()) return;
      const userMsg = input;
      setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
      setInput('');
      setIsLoading(true);

      const token = localStorage.getItem('authToken');
      if (!token) return;

      const currentScenario = scenarios.find(s => s.id === scenario);
      const history = messages.map(m => `${m.role === 'user' ? 'Me' : 'Client'}: ${m.text}`).join('\n');
      
      const prompt = `
      Context: ${currentScenario?.prompt}
      History:
      ${history}
      Me: ${userMsg}
      Client (You): [Respond naturally in 1-2 sentences]
      `;

      try {
          const res = await generateGeminiResponse([{ text: prompt }], token);
          setMessages(prev => [...prev, { role: 'model', text: res }]);
      } catch (e) {
          console.error(e);
      } finally {
          setIsLoading(false);
      }
  };

  const getFeedback = async () => {
      setIsLoading(true);
      const token = localStorage.getItem('authToken');
      if (!token) return;

      const history = messages.map(m => `${m.role === 'user' ? 'Freelancer' : 'Client'}: ${m.text}`).join('\n');
      const prompt = `Analyze this conversation. Did the freelancer handle the client well? Give a score out of 10 and 2 specific tips for improvement. Keep it brief.\n\n${history}`;

      try {
          const res = await generateGeminiResponse([{ text: prompt }], token);
          setFeedback(res);
      } catch (e) {
          console.error(e);
      } finally {
          setIsLoading(false);
      }
  };

  return (
    <div className="p-4 md:p-6 bg-violet-50 dark:bg-violet-950/30 min-h-full flex flex-col h-screen">
      <header className="relative flex items-center mb-4 flex-shrink-0">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-white/50 hover:bg-white dark:bg-black/20 dark:hover:bg-black/40 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-800 dark:text-violet-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-violet-900 dark:text-violet-100 text-center flex-1">{t('career_tool_call_simulator_title')}</h1>
      </header>

      {!scenario ? (
          <div className="flex-1 flex flex-col justify-center items-center space-y-4">
              <p className="text-center text-violet-800 dark:text-violet-200 mb-4">Choose a scenario to practice:</p>
              {scenarios.map(s => (
                  <button 
                    key={s.id} 
                    onClick={() => startScenario(s)}
                    className="w-full max-w-xs p-6 bg-white dark:bg-neutral-800 rounded-3xl shadow-sm border-2 border-transparent hover:border-violet-400 transition-all text-left"
                  >
                      <span className="text-lg font-bold text-neutral-900 dark:text-white block mb-1">{s.label}</span>
                  </button>
              ))}
          </div>
      ) : (
          <>
            <div className="flex-1 overflow-y-auto bg-white dark:bg-neutral-800 rounded-3xl shadow-sm p-4 space-y-4 mb-4 border border-violet-100 dark:border-violet-900">
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                            m.role === 'user' 
                            ? 'bg-violet-600 text-white rounded-tr-none' 
                            : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-tl-none'
                        }`}>
                            {m.text}
                        </div>
                    </div>
                ))}
                {isLoading && <div className="text-xs text-neutral-400 text-center"> typing...</div>}
                
                {feedback && (
                    <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800 animate-fade-in">
                        <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Coach Feedback</h3>
                        <p className="text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap">{feedback}</p>
                        <button onClick={() => setScenario(null)} className="mt-4 text-sm text-violet-600 font-bold underline">Try Another Scenario</button>
                    </div>
                )}
                <div ref={bottomRef} />
            </div>

            {!feedback && (
                <div className="flex-shrink-0 space-y-3">
                    <div className="flex gap-2">
                        <input 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type your reply..."
                            className="flex-1 p-3 rounded-xl border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 focus:ring-2 focus:ring-violet-500 outline-none"
                            disabled={isLoading}
                        />
                        <button 
                            onClick={handleSend}
                            disabled={!input.trim() || isLoading}
                            className="bg-violet-600 text-white p-3 rounded-xl hover:bg-violet-700 disabled:opacity-50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                    <button onClick={getFeedback} className="w-full py-2 text-xs font-bold text-neutral-500 hover:text-violet-600">
                        End Call & Get Feedback
                    </button>
                </div>
            )}
          </>
      )}
    </div>
  );
};

export default ClientCallSimulatorPage;
