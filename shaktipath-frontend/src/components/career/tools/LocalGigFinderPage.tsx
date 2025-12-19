
import React, { useState } from 'react';
import { useI18n } from '../../../contexts/I18nContext';
import { generateGeminiResponse } from '../../../services/geminiService';
import { SparkleIcon } from '../../icons/SparkleIcon';
import { useCareer } from '../../../contexts/CareerContext';
import { useToast } from '../../../contexts/ToastContext';

interface LocalGigFinderPageProps {
  onBack: () => void;
}

interface StrategyResult {
    needs: string[];
    earningEstimate: string;
    pitch: string;
}

const LocalGigFinderPage: React.FC<LocalGigFinderPageProps> = ({ onBack }) => {
  const { t, language } = useI18n();
  const { addManualProspect } = useCareer();
  const { showToast } = useToast();
  
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('');
  const [businessType, setBusinessType] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<StrategyResult | null>(null);

  const categories = [
      { id: 'restaurants', labelKey: 'gig_finder_category_restaurants', icon: '🍔' },
      { id: 'gyms', labelKey: 'gig_finder_category_gyms', icon: '💪' },
      { id: 'salons', labelKey: 'gig_finder_category_salons', icon: '💇‍♀️' },
      { id: 'boutiques', labelKey: 'gig_finder_category_boutiques', icon: '👗' },
      { id: 'clinics', labelKey: 'gig_finder_category_clinics', icon: '🏥' },
  ];

  const handleOpenMaps = (category: string) => {
      const query = encodeURIComponent(`${category} near me`);
      window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  };

  const handleAnalyze = async () => {
      if (!businessName || !city) {
          showToast("Please enter Business Name and City.");
          return;
      }
      setIsLoading(true);
      setResult(null);

      const token = localStorage.getItem('authToken');
      if (!token) return;

      const prompt = `I want to pitch freelance digital services to a business called "${businessName}" located in "${city}" (${businessType}).
      Act as a business consultant.
      1. Identify 3 specific digital services this type of business likely needs (e.g. Google Maps SEO, Instagram Reels, Menu Design).
      2. Estimate a realistic monthly earning potential for a freelancer helping them (in INR).
      3. Write a short, polite, professional cold pitch message (for WhatsApp) that I can send to the owner.

      Respond in ${language} language.`;

      // Use literal strings for Type enum to ensure cross-env compatibility
      const schema = {
          type: "OBJECT",
          properties: {
              needs: {
                  type: "ARRAY",
                  items: { type: "STRING" }
              },
              earningEstimate: { type: "STRING" },
              pitch: { type: "STRING" }
          },
          required: ["needs", "earningEstimate", "pitch"]
      };

      try {
          const data = await generateGeminiResponse([{ text: prompt }], token, schema);
          setResult(data);
      } catch (e) {
          console.error("Analysis Error:", e);
          showToast(e instanceof Error ? e.message : "Analysis failed. Please try again.");
      } finally {
          setIsLoading(false);
      }
  };

  const handleSaveLead = () => {
      if (!businessName) return;
      addManualProspect(businessName, businessType || 'Local Business');
      showToast("Lead saved to My Prospects!");
  };

  const handleCopyPitch = () => {
      if (result?.pitch) {
          navigator.clipboard.writeText(result.pitch);
          showToast("Pitch copied!");
      }
  };

  return (
    <div className="p-4 md:p-6 bg-blue-50 dark:bg-blue-950/30 min-h-full">
      <header className="relative flex items-center mb-6">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-white/50 hover:bg-white dark:bg-black/20 dark:hover:bg-black/40 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800 dark:text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-blue-900 dark:text-blue-100 text-center flex-1">{t('career_tool_gig_finder_title')}</h1>
      </header>

      {/* Step 1: Find on Maps */}
      <div className="mb-8">
          <h2 className="text-sm font-bold text-blue-800 dark:text-blue-200 uppercase tracking-wide mb-3 flex items-center">
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-600">1</span>
              {t('gig_finder_search_maps')}
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {categories.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => handleOpenMaps(t(cat.labelKey))}
                    className="flex flex-col items-center justify-center bg-white dark:bg-neutral-800 p-3 rounded-2xl shadow-sm border border-transparent hover:border-blue-300 transition-all active:scale-95"
                  >
                      <span className="text-2xl mb-1">{cat.icon}</span>
                      <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-300 text-center leading-tight">{t(cat.labelKey)}</span>
                  </button>
              ))}
          </div>
          <p className="text-[10px] text-neutral-500 mt-2 text-center">
              *Opens Google Maps app. Look for businesses with few reviews or no photos.
          </p>
      </div>

      {/* Step 2: Analyze */}
      <div>
          <h2 className="text-sm font-bold text-blue-800 dark:text-blue-200 uppercase tracking-wide mb-3 flex items-center">
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-600">2</span>
              {t('gig_finder_analyze')}
          </h2>
          
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-3xl shadow-sm">
              <div className="space-y-3">
                  <input 
                    placeholder={t('gig_finder_input_name')}
                    className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-700 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    value={businessName}
                    onChange={e => setBusinessName(e.target.value)}
                  />
                  <div className="flex gap-3">
                      <input 
                        placeholder={t('gig_finder_input_city')}
                        className="flex-1 p-3 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-700 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                      />
                      <input 
                        placeholder={t('gig_finder_input_type')}
                        className="flex-1 p-3 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-700 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        value={businessType}
                        onChange={e => setBusinessType(e.target.value)}
                      />
                  </div>
              </div>

              <button 
                onClick={handleAnalyze}
                disabled={isLoading || !businessName || !city}
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center disabled:opacity-70 disabled:shadow-none hover:scale-[1.02] transition-transform"
              >
                  {isLoading ? (
                      <>
                        <SparkleIcon className="w-5 h-5 mr-2 animate-spin" />
                        {t('gig_finder_analyzing')}
                      </>
                  ) : t('gig_finder_btn_analyze')}
              </button>
          </div>
      </div>

      {/* Result Card */}
      {result && (
          <div className="mt-8 animate-fade-in-up">
              <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-xl overflow-hidden border border-blue-100 dark:border-blue-900">
                  <div className="bg-blue-600 p-4 text-white">
                      <h3 className="font-bold text-lg">{businessName}</h3>
                      <p className="text-xs text-blue-100 opacity-90">Strategy Card</p>
                  </div>
                  
                  <div className="p-5 space-y-5">
                      {/* Needs */}
                      <div>
                          <h4 className="text-xs font-bold text-neutral-400 uppercase mb-2">{t('gig_finder_result_needs')}</h4>
                          <div className="flex flex-wrap gap-2">
                              {result.needs?.map((need: string, i: number) => (
                                  <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800">
                                      {need}
                                  </span>
                              ))}
                          </div>
                      </div>

                      {/* Earning */}
                      <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800">
                          <span className="text-2xl mr-3">💰</span>
                          <div>
                              <p className="text-[10px] font-bold text-green-800 dark:text-green-300 uppercase">{t('gig_finder_result_price')}</p>
                              <p className="font-bold text-green-700 dark:text-green-400">{result.earningEstimate}</p>
                          </div>
                      </div>

                      {/* Pitch */}
                      <div>
                          <h4 className="text-xs font-bold text-neutral-400 uppercase mb-2">{t('gig_finder_result_pitch')}</h4>
                          <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed border border-neutral-100 dark:border-neutral-700 italic">
                              "{result.pitch}"
                          </div>
                          <button onClick={handleCopyPitch} className="mt-2 text-xs text-blue-600 font-bold flex items-center hover:underline">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                              {t('gig_finder_action_copy')}
                          </button>
                      </div>
                  </div>

                  <div className="p-4 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-100 dark:border-neutral-800">
                      <button 
                        onClick={handleSaveLead}
                        className="w-full py-3 bg-white dark:bg-neutral-700 border-2 border-neutral-200 dark:border-neutral-600 text-neutral-700 dark:text-white font-bold rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors"
                      >
                          {t('gig_finder_action_save')}
                      </button>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default LocalGigFinderPage;
