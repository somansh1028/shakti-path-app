
import React, { useState } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import CareerGuideChat from './CareerGuideChat';
import type { CareerPathRecommendation } from '../../types';
import { learningPaths } from '../../data/learningData';

const PlanPage: React.FC = () => {
  const { t } = useI18n();
  const [recommendation, setRecommendation] = useState<CareerPathRecommendation | null>(null);

  // Map the AI's ID to our actual App Path IDs
  const getPathById = (aiPathId: string) => {
      const mapping: Record<string, string> = {
          'digital_design_and_social_media': 'lp_digital_marketing',
          'business_support_and_digital_services': 'lp_local_biz',
          'teaching_and_kids_support': 'lp_found', // Mapping teaching to foundational for now
          'health_and_community_care': 'lp_va', // Mapping care to VA/Office admin for clinics
          'tech_and_ai_basics_explorer': 'lp_ai'
      };
      
      const appPathId = mapping[aiPathId] || 'lp_found';
      return learningPaths.find(p => p.id === appPathId);
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
              </div>

              <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-4">{t('plan_recommendation_title')}</h3>
              
              {primaryPath && (
                  <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md p-5 border-l-4 border-accent-500">
                      <div className="flex items-start justify-between mb-3">
                          <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center text-2xl">
                              {primaryPath.icon}
                          </div>
                          <span className="bg-accent-100 text-accent-800 text-xs font-bold px-3 py-1 rounded-full">{t('plan_best_match')}</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">{t(primaryPath.titleKey)}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{t(primaryPath.descriptionKey)}</p>
                      
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
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">{t('nav_plan')}</h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('plan_page_subtitle')}</p>
        </div>
        <CareerGuideChat onRecommendationComplete={setRecommendation} />
      </div>
    </div>
  );
};

export default PlanPage;
