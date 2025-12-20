
import React, { useState } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import CareerGuideChat from './CareerGuideChat';
import type { CareerPathRecommendation, UserProfile } from '../../types';
import { getLearningPaths } from '../../data/learningData';
import { API_BASE_URL, getHeaders } from '../../config';
import { useToast } from '../../contexts/ToastContext';

interface PlanPageProps {
  onNavigateToPath?: (pathId: string) => void;
}

const PlanPage: React.FC<PlanPageProps> = ({ onNavigateToPath }) => {
  const { t, language } = useI18n();
  const { showToast } = useToast();
  const [recommendation, setRecommendation] = useState<CareerPathRecommendation | null>(null);
  
  const learningPaths = getLearningPaths(language);

  // Map the AI's ID to our actual App Path IDs from src/data/learningData.ts
  const getPathById = (aiPathId: string) => {
      const mapping: Record<string, string> = {
          // Digital Marketing -> Digital Marketing Path
          'path_digital_marketing_title': 'lp_digital_marketing',
          // Content Writing -> Digital Marketing Path (closest match for content creation)
          'path_content_writing_title': 'lp_digital_marketing',
          // Business Ops -> Foundational Path (closest match for basic skills/freelancing)
          'path_business_ops_title': 'lp_found', 
          
          // Legacy mappings just in case
          'digital_design_and_social_media': 'lp_digital_marketing',
          'business_support_and_digital_services': 'lp_found',
          'teaching_and_kids_support': 'lp_found' 
      };
      
      const appPathId = mapping[aiPathId] || 'lp_digital_marketing';
      return learningPaths.find(p => p.id === appPathId);
  };

  const handleRecommendationComplete = async (rec: CareerPathRecommendation) => {
      setRecommendation(rec);

      // --- SYNC TO PROFILE ---
      try {
          const token = localStorage.getItem('authToken');
          if (!token) return;

          const getRes = await fetch(`${API_BASE_URL}/api/user/profile`, { headers: getHeaders(token) });
          if (getRes.ok) {
              const currentProfile: UserProfile = await getRes.json();
              
              const newSkills = currentProfile.skills || [];
              if (!newSkills.includes(rec.good_at_summary)) {
                  newSkills.push(rec.good_at_summary);
              }

              const newInterests = currentProfile.interests || [];
              if (!newInterests.includes(rec.love_summary)) {
                  newInterests.push(rec.love_summary);
              }

              await fetch(`${API_BASE_URL}/api/user/profile`, {
                  method: 'PUT',
                  headers: getHeaders(token),
                  body: JSON.stringify({
                      skills: newSkills,
                      interests: newInterests
                  })
              });
              
              showToast("Profile updated with your new insights! ✨");
          }
      } catch (error) {
          console.error("Failed to sync plan to profile", error);
      }
  };

  if (recommendation) {
      const primaryPath = getPathById(recommendation.primary_path);
      
      return (
          <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full animate-fade-in">
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">{t('plan_page_title')}</h1>
              
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-6 text-white shadow-lg mb-6">
                  <h2 className="text-xl font-bold mb-2">{t('plan_ikigai_title')}</h2>
                  <div className="space-y-3 text-sm text-primary-50/90">
                      <p><strong>{t('plan_love_label')}</strong> {recommendation.love_summary}</p>
                      <p><strong>{t('plan_strength_label')}</strong> {recommendation.good_at_summary}</p>
                      <p><strong>{t('plan_need_label')}</strong> {recommendation.community_need_summary}</p>
                      <p><strong>{t('plan_money_label')}</strong> {recommendation.earning_goal_summary}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20 text-xs text-primary-200 flex items-center">
                      <span className="mr-2">✓</span> Saved to your Profile Settings
                  </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-4">{t('plan_recommendation_title')}</h3>
              
              {primaryPath && (
                  <div 
                    onClick={() => onNavigateToPath && onNavigateToPath(primaryPath.id)}
                    className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md p-5 border-l-4 border-accent-500 cursor-pointer transition-all hover:shadow-xl hover:scale-[1.01] group relative"
                  >
                      {/* Click indicator */}
                      <div className="absolute top-4 right-4 text-accent-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>

                      <div className="flex items-start justify-between mb-3">
                          <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center text-2xl">
                              {primaryPath.icon}
                          </div>
                          <span className="bg-accent-100 text-accent-800 text-xs font-bold px-3 py-1 rounded-full">{t('plan_best_match')}</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-accent-600 transition-colors">
                        {primaryPath.titleKey ? t(primaryPath.titleKey) : primaryPath.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                        {primaryPath.descriptionKey ? t(primaryPath.descriptionKey) : primaryPath.description}
                      </p>
                      
                      <div className="bg-neutral-50 dark:bg-neutral-700/50 rounded-xl p-4 mb-4">
                          <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase mb-2">{t('plan_first_step')}</p>
                          <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{recommendation.suggested_first_course}</p>
                      </div>

                      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-100 dark:border-green-900/30">
                          <p className="text-xs font-bold text-green-600 dark:text-green-400 uppercase mb-2">{t('plan_micro_challenge')}</p>
                          <p className="text-sm font-medium text-green-800 dark:text-green-300">{recommendation.suggested_micro_challenge}</p>
                      </div>
                  </div>
              )}

              <div className="mt-8 text-center">
                  <button 
                    onClick={() => setRecommendation(null)}
                    className="text-sm text-neutral-500 underline hover:text-primary-600"
                  >
                      {t('plan_retake')}
                  </button>
              </div>
          </div>
      );
  }

  return (
    <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
      <div className="max-w-lg mx-auto">
        <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">{t('plan_page_title')}</h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('plan_page_subtitle')}</p>
        </div>
        <CareerGuideChat onRecommendationComplete={handleRecommendationComplete} />
      </div>
    </div>
  );
};

export default PlanPage;
