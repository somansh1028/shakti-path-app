
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
      case 'gig-finder': return <LocalGigFinderPage onBack={handleBack} />;
      case 'pitch-generator': return <GigPitchGeneratorPage onBack={handleBack} />;
      case 'portfolio-writer': return <PortfolioProjectWriterPage onBack={handleBack} />;
      case 'pricing-assistant': return <PricingScopeAssistantPage onBack={handleBack} />;
      case 'call-simulator': return <ClientCallSimulatorPage onBack={handleBack} />;
      case 'my-prospects': return <MyProspectsPage onBack={handleBack} />;
      case 'gig-launchpad': return <GigLaunchpadPage onBack={handleBack} />;
      case 'ai-coach': return <AICoachPage onBack={handleBack} />;
      default: return null;
    }
  };

  // Define specific colors for each category
  const getCardStyles = (category: string) => {
    if (category === 'build') {
        return {
            card: 'bg-orange-50 border-orange-100 dark:bg-orange-900/20 dark:border-orange-800',
            icon: 'text-orange-600 dark:text-orange-400',
            iconBg: 'bg-orange-100 dark:bg-orange-900/50',
            title: 'text-orange-900 dark:text-orange-100'
        };
    } else if (category === 'earn') {
        return {
            card: 'bg-cyan-50 border-cyan-100 dark:bg-cyan-900/20 dark:border-cyan-800',
            icon: 'text-cyan-600 dark:text-cyan-400',
            iconBg: 'bg-cyan-100 dark:bg-cyan-900/50',
            title: 'text-cyan-900 dark:text-cyan-100'
        };
    }
    return {
        card: 'bg-white border-neutral-100 dark:bg-neutral-800 dark:border-neutral-700',
        icon: 'text-neutral-500 dark:text-neutral-400',
        iconBg: 'bg-neutral-100 dark:bg-neutral-700',
        title: 'text-neutral-900 dark:text-white'
    };
  }

  if (activeTool) {
    return renderToolPage();
  }

  const buildTools = careerHubTools.filter(t => t.category === 'build');
  const earnTools = careerHubTools.filter(t => t.category === 'earn');

  const ToolCard = ({ tool }: { tool: typeof careerHubTools[0] }) => {
      const styles = getCardStyles(tool.category);
      return (
        <button 
            onClick={() => handleToolSelect(tool.id as CareerToolId)}
            className={`
                group relative flex flex-col items-start text-left p-5 rounded-3xl 
                border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full
                ${styles.card}
            `}
        >
            <div className={`mb-4 p-3 rounded-2xl transition-colors duration-300 ${styles.iconBg}`}>
                <tool.icon className={`w-8 h-8 transition-colors duration-300 ${styles.icon}`} />
            </div>
            
            <h2 className={`text-base font-bold mb-1 transition-colors duration-300 leading-tight ${styles.title}`}>
                {t(tool.titleKey)}
            </h2>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2">
                {t(tool.descriptionKey)}
            </p>

            {/* Subtle arrow that appears on hover */}
            <div className={`absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${styles.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </button>
      );
  };

  return (
    <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
      <header className="mb-6">
        <h1 className="text-3xl font-display font-bold text-neutral-900 dark:text-white">{t('career_title')}</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{t('career_subtitle')}</p>
      </header>

      <div className="space-y-8">
          {/* Section 1: Build Profile */}
          <section>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-white mb-4 flex items-center">
                  <span className="bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 p-2 rounded-lg mr-3 text-xl shadow-sm">🛠️</span>
                  {t('career_section_build_title')}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                  {buildTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
              </div>
          </section>

          {/* Section 2: Earn */}
          <section>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-white mb-4 flex items-center">
                  <span className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 p-2 rounded-lg mr-3 text-xl shadow-sm">🚀</span>
                  {t('career_section_earn_title')}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                  {earnTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
              </div>
          </section>
      </div>
    </div>
  );
};

export default CareerPage;
