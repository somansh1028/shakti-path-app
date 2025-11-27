
import React, { useState, useCallback, useEffect } from 'react';
import { useI18n } from '../../../contexts/I18nContext';
import { generateGeminiResponse } from '../../../services/geminiService';
import { Type } from '@google/genai';
import type { Gig, UserProfile } from '../../../types';
import { SparkleIcon } from '../../icons/SparkleIcon';
import { useCareer } from '../../../contexts/CareerContext';
import { useToast } from '../../../contexts/ToastContext';
import { API_BASE_URL, getHeaders } from '../../../config';

interface LocalGigFinderPageProps {
  onBack: () => void;
}

const LocalGigFinderPage: React.FC<LocalGigFinderPageProps> = ({ onBack }) => {
  const { t, language } = useI18n();
  const { addProspectFromGig, isGigAdded } = useCareer();
  const { showToast } = useToast();
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [gigs, setGigs] = useState<Gig[]>([]);
  
  // Profile State
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isProfileLoading, setIsProfileLoading] = useState(true);

  useEffect(() => {
      const fetchProfile = async () => {
          const token = localStorage.getItem('authToken');
          if (!token) {
              setIsProfileLoading(false);
              return;
          }
          try {
              const res = await fetch(`${API_BASE_URL}/api/user/profile`, { headers: getHeaders(token) });
              if (res.ok) {
                  const data = await res.json();
                  setProfile(data);
              }
          } catch (e) {
              console.error("Failed to fetch profile for gig finder", e);
          } finally {
              setIsProfileLoading(false);
          }
      };
      fetchProfile();
  }, []);

  
  const handleFindGigs = useCallback(async () => {
    if (!profile || !profile.city || !profile.skills || profile.skills.length === 0) {
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
    
    const prompt = `I am a freelancer in ${profile.city}, India, with skills in: ${profile.skills.join(', ')}. Find 5 fictional but realistic potential local businesses that could hire me. For each business, suggest a specific "serviceToOffer" that is an actionable task based on my skills. Provide a realistic "earningPotential" in INR. Invent plausible contact info (phone, email, or website). The response must be in ${language}.`;
    
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
  }, [language, t, profile]);

  const handleSessionExpired = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userEmail');
      window.location.reload();
  };

  const handleAddProspect = (gig: Gig) => {
      addProspectFromGig(gig);
      showToast(`Added ${gig.name} to Prospects!`);
  };

  if (isProfileLoading) {
      return (
        <div className="flex flex-col items-center justify-center min-h-full h-64">
            <SparkleIcon className="w-8 h-8 text-blue-500 animate-spin mb-2" />
            <p className="text-sm text-neutral-500">Loading profile data...</p>
        </div>
      );
  }

  const hasPrerequisites = profile && profile.city && profile.skills && profile.skills.length > 0;

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

      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-4 mb-6">
        <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">{t('gig_finder_finding_based_on')}</p>
        <div className="space-y-1">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex justify-between">
                <span><strong>{t('gig_finder_location')}:</strong> {profile?.city || 'Not set'}</span>
                {!profile?.city && <span className="text-red-500 text-xs font-bold">Missing</span>}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex justify-between">
                <span><strong>{t('gig_finder_my_skills')}:</strong> {profile?.skills?.length ? profile.skills.join(', ') : t('gig_finder_none_yet')}</span>
                {(!profile?.skills || profile.skills.length === 0) && <span className="text-red-500 text-xs font-bold">Missing</span>}
            </p>
        </div>
      </div>

      {!hasPrerequisites && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-6 text-center">
            <h2 className="text-lg font-bold text-red-700 dark:text-red-300">{t('gig_finder_error_title')}</h2>
            <p className="text-sm text-red-600 dark:text-red-400 mt-2">To find gigs, you need to set your <strong>City</strong> and <strong>Skills</strong> in your profile.</p>
            <p className="text-xs text-red-500 mt-4">Go to <strong>Settings &gt; My Profile</strong> to update.</p>
        </div>
      )}

      {hasPrerequisites && !isLoading && gigs.length === 0 && !error && (
         <div className="text-center mt-4">
            <button 
                onClick={handleFindGigs}
                className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
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
         <div className="mt-6 animate-fade-in">
            <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">{t('gig_finder_potential_clients_in', { city: profile?.city })}</h2>
            <div className="space-y-4">
                {gigs.map(gig => {
                    const isAdded = isGigAdded(gig.name);
                    return (
                        <div key={gig.id} className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-4 border-l-4 border-blue-500">
                            <h3 className="font-bold text-lg text-neutral-900 dark:text-white">{gig.name}</h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">{gig.businessType}</p>
                            
                            <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                                <p><strong>{t('gig_finder_earning_potential')}:</strong> {gig.earningPotential}</p>
                                <p><strong>💡 {t('gig_finder_service_to_offer')}:</strong> {gig.serviceToOffer}</p>
                                {gig.contact?.phone && <p>📞 {gig.contact.phone}</p>}
                                {gig.contact?.email && <p>📧 {gig.contact.email}</p>}
                                {gig.contact?.website && <p>🌐 {gig.contact.website}</p>}
                            </div>
                            
                            <div className="flex gap-3">
                                <button 
                                    onClick={() => handleAddProspect(gig)}
                                    disabled={isAdded}
                                    className={`flex-1 font-bold py-2 px-4 rounded-lg text-sm transition-colors ${
                                        isAdded 
                                        ? 'bg-green-100 text-green-700 cursor-default' 
                                        : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-600'
                                    }`}
                                >
                                    {isAdded ? 'Added ✓' : t('gig_finder_add_to_prospects')}
                                </button>
                                <button className="flex-1 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 text-sm">
                                    {t('gig_finder_generate_pitch')}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
         </div>
      )}
    </div>
  );
};

export default LocalGigFinderPage;
