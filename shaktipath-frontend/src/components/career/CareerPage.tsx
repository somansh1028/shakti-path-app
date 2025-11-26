
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

  const getToolStyle = (id: string) => {
    switch (id) {
        case 'gig-finder': return { 
            card: 'bg-blue-100/60 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30', 
            icon: 'text-blue-700 dark:text-blue-300',
            title: 'text-blue-900 dark:text-blue-100',
            desc: 'text-blue-700/80 dark:text-blue-300/70',
            iconBg: 'bg-blue-200/50 dark:bg-blue-800/50'
        };
        case 'pitch-generator': return { 
            card: 'bg-purple-100/60 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30', 
            icon: 'text-purple-700 dark:text-purple-300',
            title: 'text-purple-900 dark:text-purple-100',
            desc: 'text-purple-700/80 dark:text-purple-300/70',
            iconBg: 'bg-purple-200/50 dark:bg-purple-800/50'
        };
        case 'portfolio-writer': return { 
            card: 'bg-green-100/60 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30', 
            icon: 'text-green-700 dark:text-green-300',
            title: 'text-green-900 dark:text-green-100',
            desc: 'text-green-700/80 dark:text-green-300/70',
            iconBg: 'bg-green-200/50 dark:bg-green-800/50'
        };
        case 'pricing-assistant': return { 
            card: 'bg-amber-100/60 dark:bg-amber-900/20 hover:bg-amber-100 dark:hover:bg-amber-900/30', 
            icon: 'text-amber-700 dark:text-amber-300',
            title: 'text-amber-900 dark:text-amber-100',
            desc: 'text-amber-700/80 dark:text-amber-300/70',
            iconBg: 'bg-amber-200/50 dark:bg-amber-800/50'
        };
        case 'call-simulator': return { 
            card: 'bg-rose-100/60 dark:bg-rose-900/20 hover:bg-rose-100 dark:hover:bg-rose-900/30', 
            icon: 'text-rose-700 dark:text-rose-300',
            title: 'text-rose-900 dark:text-rose-100',
            desc: 'text-rose-700/80 dark:text-rose-300/70',
            iconBg: 'bg-rose-200/50 dark:bg-rose-800/50'
        };
        case 'my-prospects': return { 
            card: 'bg-cyan-100/60 dark:bg-cyan-900/20 hover:bg-cyan-100 dark:hover:bg-cyan-900/30', 
            icon: 'text-cyan-700 dark:text-cyan-300',
            title: 'text-cyan-900 dark:text-cyan-100',
            desc: 'text-cyan-700/80 dark:text-cyan-300/70',
            iconBg: 'bg-cyan-200/50 dark:bg-cyan-800/50'
        };
        case 'gig-launchpad': return { 
            card: 'bg-indigo-100/60 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30', 
            icon: 'text-indigo-700 dark:text-indigo-300',
            title: 'text-indigo-900 dark:text-indigo-100',
            desc: 'text-indigo-700/80 dark:text-indigo-300/70',
            iconBg: 'bg-indigo-200/50 dark:bg-indigo-800/50'
        };
        case 'scholarships': return { 
            card: 'bg-pink-100/60 dark:bg-pink-900/20 hover:bg-pink-100 dark:hover:bg-pink-900/30', 
            icon: 'text-pink-700 dark:text-pink-300',
            title: 'text-pink-900 dark:text-pink-100',
            desc: 'text-pink-700/80 dark:text-pink-300/70',
            iconBg: 'bg-pink-200/50 dark:bg-pink-800/50'
        };
        case 'ai-coach': return { 
            card: 'bg-violet-100/60 dark:bg-violet-900/20 hover:bg-violet-100 dark:hover:bg-violet-900/30', 
            icon: 'text-violet-700 dark:text-violet-300',
            title: 'text-violet-900 dark:text-violet-100',
            desc: 'text-violet-700/80 dark:text-violet-300/70',
            iconBg: 'bg-violet-200/50 dark:bg-violet-800/50'
        };
        default: return { 
            card: 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700', 
            icon: 'text-gray-700 dark:text-gray-300',
            title: 'text-gray-900 dark:text-white',
            desc: 'text-gray-500 dark:text-gray-400',
            iconBg: 'bg-gray-200 dark:bg-gray-700'
        };
    }
  }

  if (activeTool) {
    return renderToolPage();
  }

  return (
    <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">{t('career_title')}</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('career_subtitle')}</p>
      </header>

      <div className="grid grid-cols-2 gap-4">
        {careerHubTools.map(tool => {
            const style = getToolStyle(tool.id);
            return (
              <button 
                key={tool.id} 
                onClick={() => handleToolSelect(tool.id as CareerToolId)}
                className={`${style.card} rounded-3xl p-5 flex flex-col items-start cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-sm text-left relative group`}
              >
                {/* Action Icon (Top Right) */}
                <div className={`absolute top-4 right-4 p-2 rounded-full ${style.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${style.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </div>

                <div className="mb-3">
                  <tool.icon className={`w-8 h-8 ${style.icon}`} />
                </div>
                <h2 className={`text-lg font-bold ${style.title} mb-1 leading-tight`}>{t(tool.titleKey)}</h2>
                <p className={`text-xs font-medium ${style.desc}`}>{t(tool.descriptionKey)}</p>
              </button>
            );
        })}
      </div>
    </div>
  );
};

export default CareerPage;
