
import React, { useState } from 'react';
import { useI18n } from '../../../contexts/I18nContext';
import { generateGeminiResponse } from '../../../services/geminiService';
import { Type } from '@google/genai';
import { SparkleIcon } from '../../icons/SparkleIcon';

interface PricingScopeAssistantPageProps {
  onBack: () => void;
}

const PricingScopeAssistantPage: React.FC<PricingScopeAssistantPageProps> = ({ onBack }) => {
  const { t, language } = useI18n();
  const [projectType, setProjectType] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('Beginner');
  const [estimatedHours, setEstimatedHours] = useState('5');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!projectType) return;
    setIsLoading(true);
    setError(null);

    const token = localStorage.getItem('authToken');
    if (!token) {
        setError("UNAUTHORIZED");
        setIsLoading(false);
        return;
    }

    const prompt = `I am a freelancer in India with ${experienceLevel} experience. 
    I need to price a project: "${projectType}" which will take approximately ${estimatedHours} hours.
    
    Provide:
    1. Three pricing tiers (Basic, Standard, Premium) in INR.
    2. A clear "Scope of Work" checklist for the Standard tier.
    3. One "Upsell" idea to earn more.
    
    Respond in ${language}.`;

    const responseSchema = {
        type: Type.OBJECT,
        properties: {
            tiers: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        name: { type: Type.STRING },
                        price: { type: Type.STRING },
                        desc: { type: Type.STRING }
                    }
                }
            },
            scopeOfWork: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
            },
            upsellIdea: { type: Type.STRING }
        }
    };

    try {
        const data = await generateGeminiResponse([{ text: prompt }], token, responseSchema);
        setResult(data);
    } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to generate pricing.");
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6 bg-emerald-50 dark:bg-emerald-950/30 min-h-full">
      <header className="relative flex items-center mb-6">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-white/50 hover:bg-white dark:bg-black/20 dark:hover:bg-black/40 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-800 dark:text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 text-center flex-1">{t('career_tool_pricing_assistant_title')}</h1>
      </header>

      <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-3xl shadow-sm border border-emerald-100 dark:border-emerald-900">
              <div className="space-y-4">
                  <div>
                      <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Project Type</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Logo Design, 500 word Blog Post"
                        className="w-full p-3 rounded-xl border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                      />
                  </div>
                  
                  <div className="flex gap-4">
                      <div className="flex-1">
                          <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Experience</label>
                          <select 
                            className="w-full p-3 rounded-xl border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                            value={experienceLevel}
                            onChange={(e) => setExperienceLevel(e.target.value)}
                          >
                              <option>Beginner</option>
                              <option>Intermediate</option>
                              <option>Expert</option>
                          </select>
                      </div>
                      <div className="flex-1">
                          <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Est. Hours</label>
                          <input 
                            type="number" 
                            className="w-full p-3 rounded-xl border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                            value={estimatedHours}
                            onChange={(e) => setEstimatedHours(e.target.value)}
                          />
                      </div>
                  </div>

                  <button 
                    onClick={handleGenerate} 
                    disabled={isLoading || !projectType}
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                      {isLoading ? <SparkleIcon className="w-5 h-5 animate-spin mr-2" /> : "Calculate Price"}
                  </button>
              </div>
          </div>

          {result && (
              <div className="space-y-6 animate-fade-in">
                  {/* Tiers */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {result.tiers?.map((tier: any, i: number) => (
                          <div key={i} className={`p-5 rounded-2xl border-2 ${i === 1 ? 'bg-emerald-50 border-emerald-500 dark:bg-emerald-900/40' : 'bg-white border-transparent dark:bg-neutral-800'}`}>
                              <h3 className="text-sm font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">{tier.name}</h3>
                              <p className="text-2xl font-bold text-neutral-900 dark:text-white my-2">{tier.price}</p>
                              <p className="text-xs text-neutral-600 dark:text-neutral-300">{tier.desc}</p>
                          </div>
                      ))}
                  </div>

                  {/* Scope */}
                  <div className="bg-white dark:bg-neutral-800 p-6 rounded-3xl shadow-sm">
                      <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-4">Scope of Work</h3>
                      <ul className="space-y-2">
                          {result.scopeOfWork?.map((item: string, i: number) => (
                              <li key={i} className="flex items-start text-sm text-neutral-700 dark:text-neutral-300">
                                  <span className="text-emerald-500 mr-2">•</span> {item}
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* Upsell */}
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 rounded-3xl text-white shadow-lg">
                      <h3 className="font-bold text-emerald-100 text-sm uppercase mb-2">💡 Pro Tip: Upsell Idea</h3>
                      <p className="font-medium">{result.upsellIdea}</p>
                  </div>
              </div>
          )}
          
          {error && <div className="p-4 bg-red-100 text-red-700 rounded-xl text-center">{error}</div>}
      </div>
    </div>
  );
};

export default PricingScopeAssistantPage;
