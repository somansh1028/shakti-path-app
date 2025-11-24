
import React, { useState, useCallback } from 'react';
import { useI18n } from '../../../contexts/I18nContext';
import { userData } from '../../../data/userData';
import { learningPaths } from '../../../data/learningData';
import { generateGeminiResponse } from '../../../services/geminiService';
import { Type } from '@google/genai';
import type { Gig } from '../../../types';
import { SparkleIcon } from '../../icons/SparkleIcon';

interface LocalGigFinderPageProps {
  onBack: () => void;
}

const LocalGigFinderPage: React.FC<LocalGigFinderPageProps> = ({ onBack }) => {
  const { t, language } = useI18n();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [gigs, setGigs] = useState<Gig[]>([]);

  const userSkills = userData.completedCourses.map(courseId => {
    for (const path of learningPaths) {
      const course = path.courses.find(c => c.id === courseId);
      if (course) return t(course.titleKey);
    }
    return 'Unknown Skill';
  });

  const userCity = userData.profile.city;
  
  const handleFindGigs = useCallback(async () => {
    if (!userCity || userSkills.length === 0) {
      return;
    }
    setIsLoading(true);
    setError(null);
    setGigs([]);

    const token = localStorage.getItem('authToken');
    if (!token) {
        setError("UNAUTHORIZED");
        setIsLoading(false);
        return;
    }
    
    const prompt = `I am a freelancer in ${userCity}, India, with skills in: ${userSkills.join(', ')}. Find 5 fictional but realistic potential local businesses that could hire me. For each business, suggest a specific "serviceToOffer" that is an actionable task. Provide a realistic "earningPotential" in INR. Invent plausible contact info (phone, email, or website). The response must be in ${language}.`;
    
    const responseSchema = {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            businessType: { type: Type.STRING },
            earningPotential: { type: Type.STRING },
            serviceToOffer: { type: Type.STRING },
            contact: { 
              type: Type.OBJECT,
              properties: {
                  phone: { type: Type.STRING },
                  email: { type: Type.STRING },
                  website: { type: Type.STRING }
              }
            },
          },
          required: ["name", "businessType", "earningPotential", "serviceToOffer"]
        }
    };

    try {
      const response = await generateGeminiResponse([{ text: prompt }], token, responseSchema);
      if (Array.isArray(response)) {
          setGigs(response.map((gig, index) => ({...gig, id: `gig-${index}`})));
      } else {
          throw new Error("Invalid response format from AI.");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      
      if (errorMessage.includes("UNAUTHORIZED")) {
          setError("UNAUTHORIZED");
      } else if (errorMessage.includes("quota")) {
        setError(t('gig_finder_error_ratelimit'));
      } else {
        setError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  }, [language, t, userCity, userSkills]);

  const handleSessionExpired = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userEmail');
      window.location.reload();
  };

  const hasPrerequisites = userCity && userSkills.length > 0;

  return (
    <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
      <header className="relative flex items-center mb-6">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700" aria-label="Go back">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-neutral-900 dark:text-white text-center flex-1">{t('career_tool_gig_finder_title')}</h1>
      </header>

      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-4 mb-6">
        <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">{t('gig_finder_finding_based_on')}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400"><strong>{t('gig_finder_location')}:</strong> {userCity || 'Not set'}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400"><strong>{t('gig_finder_my_skills')}:</strong> {userSkills.length > 0 ? userSkills.join(', ') : t('gig_finder_none_yet')}</p>
      </div>

      {!hasPrerequisites && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-6 text-center">
            <h2 className="text-lg font-bold text-red-700 dark:text-red-300">{t('gig_finder_error_title')}</h2>
            <p className="text-sm text-red-600 dark:text-red-400 mt-2">{t('gig_finder_error_message')}</p>
            <button className="mt-4 bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors">
                {t('gig_finder_update_profile_button')}
            </button>
        </div>
      )}

      {hasPrerequisites && !isLoading && gigs.length === 0 && !error && (
         <div className="text-center mt-4">
            <button 
                onClick={handleFindGigs}
                className="w-full bg-accent-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-accent-600 transition-colors"
            >
                {t('gig_finder_find_gigs_button')}
            </button>
        </div>
      )}
      
      {isLoading && (
        <div className="text-center py-10">
            <SparkleIcon className="w-10 h-10 text-primary-500 animate-spin mx-auto"/>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">{t('gig_finder_finding_gigs_message')}</p>
        </div>
      )}
      
      {error && !isLoading && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-6 text-center mt-4">
          <h2 className="text-lg font-bold text-red-700 dark:text-red-300">
              {error === "UNAUTHORIZED" ? "Session Expired" : t('gig_finder_error_title')}
          </h2>
          <p className="text-sm text-red-600 dark:text-red-400 mt-2">
              {error === "UNAUTHORIZED" ? "Please log in again to continue." : error}
          </p>
          {error === "UNAUTHORIZED" && (
              <button onClick={handleSessionExpired} className="mt-4 bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors">
                  Log In Again
              </button>
          )}
        </div>
      )}
      
      {gigs.length > 0 && !isLoading && (
         <div className="mt-6">
            <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">{t('gig_finder_potential_clients_in', { city: userCity })}</h2>
            <div className="space-y-4">
                {gigs.map(gig => (
                    <div key={gig.id} className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-4">
                        <h3 className="font-bold text-lg text-neutral-900 dark:text-white">{gig.name}</h3>
                        <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">{gig.businessType}</p>
                        
                        <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                             <p><strong>{t('gig_finder_earning_potential')}:</strong> {gig.earningPotential}</p>
                             <p><strong>💡 {t('gig_finder_service_to_offer')}:</strong> {gig.serviceToOffer}</p>
                             {gig.contact?.phone && <p>📞 {gig.contact.phone}</p>}
                             {gig.contact?.email && <p>📧 {gig.contact.email}</p>}
                             {gig.contact?.website && <p>🌐 {gig.contact.website}</p>}
                        </div>
                        
                        <div className="flex gap-3 mt-4">
                            <button className="flex-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold py-2 px-4 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-600 text-sm">
                                {t('gig_finder_add_to_prospects')}
                            </button>
                            <button className="flex-1 bg-accent-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-accent-600 text-sm">
                                {t('gig_finder_generate_pitch')}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      )}
    </div>
  );
};

export default LocalGigFinderPage;
