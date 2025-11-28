import React from 'react';
import type { LearningPath, Course } from '../../types';
import { useI18n } from '../../contexts/I18nContext';

interface PathDetailsPageProps {
  path: LearningPath;
  onSelectCourse: (course: Course) => void;
  onBack: () => void;
}

const PathDetailsPage: React.FC<PathDetailsPageProps> = ({ path, onSelectCourse, onBack }) => {
  const { t } = useI18n();
  const getText = (text?: string, key?: string) => text || (key ? t(key) : '');

  return (
    <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-900/50 min-h-full">
      <header className="relative flex items-center mb-6">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Go back">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white text-center flex-1">{getText(path.title, path.titleKey)}</h1>
      </header>

      <div className="text-center mb-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
         <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg flex items-center justify-center text-4xl mx-auto mb-3">
            {path.icon}
         </div>
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">{t('path_details')}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-md mx-auto">{getText(path.description, path.descriptionKey)}</p>
      </div>

      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">{t('courses_in_this_path')}</h2>
      <div className="space-y-3">
        {path.courses.map((course, index) => (
          <article
            key={course.id}
            onClick={() => onSelectCourse(course)}
            className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 cursor-pointer transition-transform transform hover:scale-[1.02] hover:shadow-md"
          >
            <div className="text-lg font-bold text-blue-500 dark:text-blue-400 w-6 text-center">{index + 1}</div>
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-2xl">{course.icon}</div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 dark:text-white">{getText(course.title, course.titleKey)}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{getText(course.description, course.descriptionKey)}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PathDetailsPage;