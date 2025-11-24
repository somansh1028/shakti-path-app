import React from 'react';
import { useI18n } from '../../contexts/I18nContext';
import { UserAvatarIcon } from '../icons/UserAvatarIcon';
import { useUserProgress } from '../../contexts/UserProgressContext';
import { learningPaths } from '../../data/learningData';

const ProgressPage: React.FC = () => {
  const { t } = useI18n();
  const { points, completedLessonIds, completedCourseIds, earnedBadges } = useUserProgress();

  // Calculate paths mastered dynamically
  const pathsMasteredCount = learningPaths.filter(path => {
      // A path is mastered if it has courses and all courses are completed
      return path.courses.length > 0 && path.courses.every(course => completedCourseIds.has(course.id));
  }).length;

  const statCards = [
    { labelKey: 'progress_points', value: points },
    { labelKey: 'progress_lessons', value: completedLessonIds.size },
    { labelKey: 'progress_paths', value: pathsMasteredCount },
  ];

  return (
    <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">{t('progress_title')}</h1>

      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-5 flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center">
          <UserAvatarIcon className="w-12 h-12 text-primary-600 dark:text-primary-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white">{t('progress_greeting')}</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('progress_message')}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {statCards.map(card => (
          <div key={card.labelKey} className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-4 text-center">
            <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">{card.value}</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{t(card.labelKey)}</p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{t('progress_badges_title')}</h3>
          {earnedBadges.length > 0 && (
            <button className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">
              {t('progress_view_all')}
            </button>
          )}
        </div>
        {earnedBadges.length === 0 ? (
          <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center py-4">{t('progress_badges_empty')}</p>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {earnedBadges.map((badge) => (
              <div key={badge.id} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center text-3xl mb-2">
                    {badge.icon}
                </div>
                <p className="text-xs font-medium text-neutral-600 dark:text-neutral-300 leading-tight">{t(badge.nameKey)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressPage;