
import React from 'react';
import { PlanIcon } from '../icons/PlanIcon';
import { LearnIcon } from '../icons/LearnIcon';
import { CommunityIcon } from '../icons/CommunityIcon';
import { ProgressIcon } from '../icons/ProgressIcon';
import { CareerIcon } from '../icons/CareerIcon';
import { SettingsIcon } from '../icons/SettingsIcon';
import { useI18n } from '../../contexts/I18nContext';

type ActiveTab = 'plan' | 'learn' | 'community' | 'progress' | 'career' | 'settings';

interface BottomNavBarProps {
  activeTab: ActiveTab;
  onTabClick: (tab: ActiveTab) => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onTabClick }) => {
  const { t } = useI18n();

  const navItems: { id: ActiveTab; labelKey: string; icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
    { id: 'plan', labelKey: 'nav_plan', icon: PlanIcon },         // Discover
    { id: 'learn', labelKey: 'nav_learn', icon: LearnIcon },       // Build Skill
    { id: 'progress', labelKey: 'nav_progress', icon: ProgressIcon }, // Track Progress
    { id: 'career', labelKey: 'nav_career', icon: CareerIcon },    // Career Hub
    { id: 'community', labelKey: 'nav_community', icon: CommunityIcon }, // Community
    { id: 'settings', labelKey: 'nav_settings', icon: SettingsIcon },    // Settings
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 shadow-lg z-50 safe-area-pb">
      <div className="flex justify-around max-w-screen-sm mx-auto px-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabClick(item.id)}
            className={`flex flex-col items-center justify-center w-full pt-3 pb-2 text-[10px] sm:text-xs transition-colors duration-200 ${
              activeTab === item.id
                ? 'text-primary-600 dark:text-primary-400'
                : 'text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400'
            }`}
            aria-current={activeTab === item.id ? 'page' : undefined}
          >
            <item.icon className={`w-6 h-6 mb-1 transition-transform duration-200 ${activeTab === item.id ? 'scale-110' : ''}`} />
            <span className="font-medium text-center leading-tight px-0.5">{t(item.labelKey)}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavBar;
