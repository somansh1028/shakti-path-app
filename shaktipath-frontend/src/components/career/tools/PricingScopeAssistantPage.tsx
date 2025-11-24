import React from 'react';
import { useI18n } from '../../../contexts/I18nContext';

interface PricingScopeAssistantPageProps {
  onBack: () => void;
}

const PricingScopeAssistantPage: React.FC<PricingScopeAssistantPageProps> = ({ onBack }) => {
  const { t } = useI18n();

  return (
    <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-900/50 min-h-full">
      <header className="relative flex items-center mb-6">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Go back">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white text-center flex-1">{t('career_tool_pricing_assistant_title')}</h1>
      </header>
      <div className="flex items-center justify-center h-full mt-16">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{t('coming_soon')}</h2>
        </div>
      </div>
    </div>
  );
};

export default PricingScopeAssistantPage;