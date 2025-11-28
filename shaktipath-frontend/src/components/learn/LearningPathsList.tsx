import React from 'react';
import type { LearningPath } from '../../types';
import { useI18n } from '../../contexts/I18nContext';

interface LearningPathsListProps {
  paths: LearningPath[];
  onSelectPath: (path: LearningPath) => void;
}

const LearningPathsList: React.FC<LearningPathsListProps> = ({ paths, onSelectPath }) => {
  const { t } = useI18n();

  // Helper to get text
  const getText = (text?: string, key?: string) => text || (key ? t(key) : '');

  // Helper to get pastel styles based on path ID (similar to Career Hub)
  const getPathStyles = (id: string) => {
    switch (id) {
      case 'lp_found': // Foundational
        return {
          card: 'bg-green-50 border-green-100 hover:border-green-200 dark:bg-green-900/20 dark:border-green-800',
          iconBg: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400',
          title: 'text-green-900 dark:text-green-100',
          courseBadge: 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200'
        };
      case 'lp_digital_marketing': // Digital Marketing
        return {
          card: 'bg-purple-50 border-purple-100 hover:border-purple-200 dark:bg-purple-900/20 dark:border-purple-800',
          iconBg: 'bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400',
          title: 'text-purple-900 dark:text-purple-100',
          courseBadge: 'bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200'
        };
      case 'lp_va': // Virtual Assistant
        return {
          card: 'bg-blue-50 border-blue-100 hover:border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
          iconBg: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400',
          title: 'text-blue-900 dark:text-blue-100',
          courseBadge: 'bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200'
        };
      case 'lp_ai': // AI Skills
        return {
          card: 'bg-rose-50 border-rose-100 hover:border-rose-200 dark:bg-rose-900/20 dark:border-rose-800',
          iconBg: 'bg-rose-100 text-rose-600 dark:bg-rose-900/50 dark:text-rose-400',
          title: 'text-rose-900 dark:text-rose-100',
          courseBadge: 'bg-rose-200 text-rose-800 dark:bg-rose-800 dark:text-rose-200'
        };
      case 'lp_local_biz': // Local Business
        return {
          card: 'bg-amber-50 border-amber-100 hover:border-amber-200 dark:bg-amber-900/20 dark:border-amber-800',
          iconBg: 'bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400',
          title: 'text-amber-900 dark:text-amber-100',
          courseBadge: 'bg-amber-200 text-amber-800 dark:bg-amber-800 dark:text-amber-200'
        };
      default:
        return {
          card: 'bg-white border-neutral-100 hover:border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700',
          iconBg: 'bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400',
          title: 'text-neutral-900 dark:text-white',
          courseBadge: 'bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200'
        };
    }
  };

  return (
    <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-neutral-900 dark:text-white">{t('learning_paths_title')}</h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{t('learning_paths_subtitle')}</p>
        </div>
        {/* Removed "View all courses" button to reduce clutter, or keep it if needed */}
      </header>
      
      <div className="space-y-4">
        {paths.map((path) => {
          const styles = getPathStyles(path.id);
          return (
            <article
              key={path.id}
              onClick={() => onSelectPath(path)}
              className={`rounded-3xl p-5 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md border ${styles.card}`}
            >
              <div className="flex flex-col">
                <div className="flex items-start space-x-4">
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm ${styles.iconBg}`}>
                      {path.icon}
                   </div>
                   <div className="flex-1">
                      <h2 className={`text-lg font-bold leading-tight mb-1 ${styles.title}`}>{getText(path.title, path.titleKey)}</h2>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{getText(path.description, path.descriptionKey)}</p>
                   </div>
                </div>
                
                <div className="flex items-center justify-between mt-5 pl-1">
                   <div className="flex -space-x-2 overflow-hidden">
                      {path.courses.slice(0, 4).map(course => (
                           <div key={course.id} title={getText(course.title, course.titleKey)} className={`inline-flex h-7 w-7 rounded-full text-[10px] flex items-center justify-center ring-2 ring-white dark:ring-neutral-900 shadow-sm ${styles.courseBadge}`}>
                             {course.icon}
                           </div>
                      ))}
                      {path.courses.length > 4 && (
                        <div className={`inline-flex h-7 w-7 rounded-full text-[9px] font-bold flex items-center justify-center ring-2 ring-white dark:ring-neutral-900 ${styles.courseBadge}`}>
                          +{path.courses.length - 4}
                        </div>
                      )}
                   </div>
                   <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider flex items-center">
                     {path.courses.length} {t('courses')}
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                     </svg>
                   </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default LearningPathsList;