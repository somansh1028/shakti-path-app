
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

  return (
    <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
      <header className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">{t('learning_paths_title')}</h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('learning_paths_subtitle')}</p>
        </div>
        <button className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">
          {t('view_all_courses')}
        </button>
      </header>
      <div className="space-y-4">
        {paths.map((path) => (
          <article
            key={path.id}
            onClick={() => onSelectPath(path)}
            className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-5 cursor-pointer transition-transform transform hover:scale-[1.02] hover:shadow-md"
          >
            <div className="flex flex-col">
              <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center text-2xl">
                    {path.icon}
                 </div>
                 <div className="flex-1">
                    <h2 className="text-lg font-bold text-neutral-900 dark:text-white">{getText(path.title, path.titleKey)}</h2>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{getText(path.description, path.descriptionKey)}</p>
                 </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 pl-16">
                 <div className="flex -space-x-2 overflow-hidden">
                    {path.courses.map(course => (
                         <div key={course.id} title={getText(course.title, course.titleKey)} className="inline-block h-6 w-6 rounded-full bg-neutral-200 dark:bg-neutral-700 text-xs flex items-center justify-center ring-2 ring-white dark:ring-neutral-800">
                           {course.icon}
                         </div>
                    ))}
                 </div>
                 <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{path.courses.length} {t('courses')}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default LearningPathsList;
