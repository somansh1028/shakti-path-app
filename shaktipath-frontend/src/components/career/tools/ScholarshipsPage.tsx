
import React, { useState } from 'react';
import { useI18n } from '../../../contexts/I18nContext';
import { generateGeminiResponse } from '../../../services/geminiService';
import { SparkleIcon } from '../../icons/SparkleIcon';
import { Type } from '@google/genai';

interface ScholarshipsPageProps {
  onBack: () => void;
}

const ScholarshipsPage: React.FC<ScholarshipsPageProps> = ({ onBack }) => {
  const { t, language } = useI18n();
  const [eduLevel, setEduLevel] = useState('College Student');
  const [field, setField] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [scholarships, setScholarships] = useState<any[]>([]);

  const handleSearch = async () => {
      if (!field) return;
      setIsLoading(true);
      const token = localStorage.getItem('authToken');
      if (!token) return;

      const prompt = `List 5 real scholarships available in India for ${eduLevel} students interested in ${field}.
      For each, provide: Name, Amount (approx), and One-line eligibility.
      Respond in ${language}.`;

      const schema = {
          type: Type.OBJECT,
          properties: {
              list: {
                  type: Type.ARRAY,
                  items: {
                      type: Type.OBJECT,
                      properties: {
                          name: { type: Type.STRING },
                          amount: { type: Type.STRING },
                          eligibility: { type: Type.STRING }
                      }
                  }
              }
          }
      };

      try {
          const data = await generateGeminiResponse([{ text: prompt }], token, schema);
          setScholarships(data.list || []);
      } catch (e) {
          console.error(e);
      } finally {
          setIsLoading(false);
      }
  };

  return (
    <div className="p-4 md:p-6 bg-rose-50 dark:bg-rose-950/30 min-h-full">
      <header className="relative flex items-center mb-6">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-white/50 hover:bg-white dark:bg-black/20 dark:hover:bg-black/40 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-800 dark:text-rose-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-rose-900 dark:text-rose-100 text-center flex-1">{t('career_tool_scholarships_title')}</h1>
      </header>

      <div className="bg-white dark:bg-neutral-800 p-6 rounded-3xl shadow-sm mb-6">
          <div className="space-y-4">
              <div>
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Education Level</label>
                  <select 
                    className="w-full p-3 rounded-xl border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-700"
                    value={eduLevel} onChange={e => setEduLevel(e.target.value)}
                  >
                      <option>School (Class 10-12)</option>
                      <option>College Student</option>
                      <option>Post Graduate</option>
                  </select>
              </div>
              <div>
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Field of Interest</label>
                  <input 
                    placeholder="e.g. Arts, Science, Tech" 
                    className="w-full p-3 rounded-xl border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-700"
                    value={field} onChange={e => setField(e.target.value)}
                  />
              </div>
              <button 
                onClick={handleSearch}
                disabled={isLoading || !field}
                className="w-full py-3 bg-rose-600 text-white font-bold rounded-xl shadow-lg shadow-rose-600/20 flex justify-center"
              >
                  {isLoading ? <SparkleIcon className="w-5 h-5 animate-spin" /> : 'Find Scholarships'}
              </button>
          </div>
      </div>

      <div className="space-y-4">
          {scholarships.map((s, i) => (
              <div key={i} className="bg-white dark:bg-neutral-800 p-5 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900">
                  <div className="flex justify-between items-start">
                      <h3 className="font-bold text-rose-900 dark:text-rose-100 text-lg leading-tight mb-1">{s.name}</h3>
                      <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap">{s.amount}</span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">🎓 {s.eligibility}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default ScholarshipsPage;
