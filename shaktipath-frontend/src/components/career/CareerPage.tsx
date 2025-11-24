import React, { useState } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import { careerHubTools } from '../../data/careerHubData';
import type { CareerToolId } from '../../types';
import LocalGigFinderPage from './tools/LocalGigFinderPage';
import GigPitchGeneratorPage from './tools/GigPitchGeneratorPage';
import PortfolioProjectWriterPage from './tools/PortfolioProjectWriterPage';
import PricingScopeAssistantPage from './tools/PricingScopeAssistantPage';
import ClientCallSimulatorPage from './tools/ClientCallSimulatorPage';
import MyProspectsPage from './tools/MyProspectsPage';
import GigLaunchpadPage from './tools/GigLaunchpadPage';
import ScholarshipsPage from './tools/ScholarshipsPage';
import AICoachPage from './tools/AICoachPage';

const CareerPage: React.FC = () => {
  const { t } = useI18n();
  const [activeTool, setActiveTool] = useState<CareerToolId | null>(null);

  const handleToolSelect = (toolId: CareerToolId) => {
    setActiveTool(toolId);
  };

  const handleBack = () => {
    setActiveTool(null);
  };

  const renderToolPage = () => {
    switch (activeTool) {
      case 'gig-finder':
        return <LocalGigFinderPage onBack={handleBack} />;
      case 'pitch-generator':
        return <GigPitchGeneratorPage onBack={handleBack} />;
      case 'portfolio-writer':
        return <PortfolioProjectWriterPage onBack={handleBack} />;
      case 'pricing-assistant':
        return <PricingScopeAssistantPage onBack={handleBack} />;
      case 'call-simulator':
        return <ClientCallSimulatorPage onBack={handleBack} />;
      case 'my-prospects':
        return <MyProspectsPage onBack={handleBack} />;
      case 'gig-launchpad':
        return <GigLaunchpadPage onBack={handleBack} />;
      case 'scholarships':
        return <ScholarshipsPage onBack={handleBack} />;
      case 'ai-coach':
        return <AICoachPage onBack={handleBack} />;
      default:
        return null;
    }
  };

  if (activeTool) {
    return renderToolPage();
  }

  return (
    <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-900/50 min-h-full">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('career_title')}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">{t('career_subtitle')}</p>
      </header>

      <div className="grid grid-cols-2 gap-4">
        {careerHubTools.map(tool => (
          <button 
            key={tool.id} 
            onClick={() => handleToolSelect(tool.id as CareerToolId)}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 flex flex-col items-start cursor-pointer transition-transform transform hover:scale-105 hover:shadow-md text-left"
          >
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-3">
              <tool.icon className="w-7 h-7 text-gray-700 dark:text-gray-300" />
            </div>
            <h2 className="text-md font-bold text-gray-900 dark:text-white">{t(tool.titleKey)}</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t(tool.descriptionKey)}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;