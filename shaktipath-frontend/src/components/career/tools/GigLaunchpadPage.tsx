
import React, { useState } from 'react';
import { useI18n } from '../../../contexts/I18nContext';
import { generateGeminiResponse } from '../../../services/geminiService';
import { SparkleIcon } from '../../icons/SparkleIcon';
import { Type } from '@google/genai';

interface GigLaunchpadPageProps {
  onBack: () => void;
}

const GigLaunchpadPage: React.FC<GigLaunchpadPageProps> = ({ onBack }) => {
  const { t, language } = useI18n();
  const [skill, setSkill] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleGenerate = async () => {
      if (!skill) return;
      setIsLoading(true);
      const token = localStorage.getItem('authToken');
      if (!token) return;

      const prompt = `Create a Fiverr profile setup for a freelancer offering: "${skill}".
      1. A Catchy Profile Headline.
      2. A Professional Bio (under 100 words).
      3. Three Gig Packages (Basic, Standard, Premium) with title and price (in USD).
      Respond in ${language}.`;

      const schema = {
          type: Type.OBJECT,
          properties: {
              headline: { type: Type.STRING },
              bio: { type: Type.STRING },
              packages: {
                  type: Type.ARRAY,
                  items: {
                      type: Type.OBJECT,
                      properties: {
                          name: { type: Type.STRING },
                          title: { type: Type.STRING },
                          price: { type: Type.STRING },
                          details: { type: Type.STRING }
                      }
                  }
              }
          }
      };

      try {
          const data = await generateGeminiResponse([{ text: prompt }], token, schema);
          setResult(data);
      } catch (e) {
          console.error(e);
      } finally {
          setIsLoading(false);
      }
  };

  return (
    <div className="p-4 md:p-6 bg-orange-50 dark:bg-orange-950/30 min-h-full">
      <header className="relative flex items-center mb-6">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-white/50 hover:bg-white dark:bg-black/20 dark:hover:bg-black/40 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-800 dark:text-orange-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-orange-900 dark:text-orange-100 text-center flex-1">{t('career_tool_gig_launchpad_title')}</h1>
      </header>

      <div className="bg-white dark:bg-neutral-800 p-6 rounded-3xl shadow-sm mb-6">
          <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">What is your main skill?</label>
          <div className="flex gap-2">
              <input 
                placeholder="e.g. Data Entry, Hindi Voiceover" 
                className="flex-1 p-3 rounded-xl border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white"
                value={skill}
                onChange={e => setSkill(e.target.value)}
              />
              <button 
                onClick={handleGenerate}
                disabled={isLoading || !skill}
                className="bg-orange-600 text-white p-3 rounded-xl font-bold disabled:opacity-50"
              >
                  {isLoading ? <SparkleIcon className="w-6 h-6 animate-spin" /> : 'Go'}
              </button>
          </div>
      </div>

      {result && (
          <div className="space-y-6 animate-fade-in">
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-3xl shadow-sm">
                  <h3 className="text-xs font-bold text-neutral-400 uppercase mb-2">Profile Headline</h3>
                  <p className="text-xl font-bold text-neutral-900 dark:text-white">{result.headline}</p>
                  
                  <h3 className="text-xs font-bold text-neutral-400 uppercase mt-6 mb-2">About Me</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">{result.bio}</p>
              </div>

              <h3 className="font-bold text-orange-800 dark:text-orange-200 px-2">Suggested Gig Packages</h3>
              <div className="grid gap-4">
                  {result.packages?.map((pkg: any, i: number) => (
                      <div key={i} className="bg-white dark:bg-neutral-800 p-5 rounded-2xl border-l-8 border-orange-500 shadow-sm">
                          <div className="flex justify-between items-start">
                              <span className="text-xs font-bold text-orange-600 uppercase bg-orange-100 px-2 py-1 rounded">{pkg.name}</span>
                              <span className="text-lg font-bold text-neutral-900 dark:text-white">{pkg.price}</span>
                          </div>
                          <h4 className="font-bold mt-2 mb-1 text-neutral-800 dark:text-neutral-200">{pkg.title}</h4>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">{pkg.details}</p>
                      </div>
                  ))}
              </div>
          </div>
      )}
    </div>
  );
};

export default GigLaunchpadPage;
