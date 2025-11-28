
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

  // Helper to safely get text from optional name or nameKey
  const getText = (text?: string, key?: string) => text || (key ? t(key) : '');

  // Different pastel styles for each stat card
  const statCards = [
    { 
        labelKey: 'progress_points', 
        value: points, 
        style: 'bg-amber-50 border-amber-100 text-amber-600 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400' 
    },
    { 
        labelKey: 'progress_lessons', 
        value: completedLessonIds.size, 
        style: 'bg-sky-50 border-sky-100 text-sky-600 dark:bg-sky-900/20 dark:border-sky-800 dark:text-sky-400' 
    },
    { 
        labelKey: 'progress_paths', 
        value: pathsMasteredCount, 
        style: 'bg-emerald-50 border-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400' 
    },
  ];

  return (
    <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">{t('progress_title')}</h1>

      <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-sm p-6 flex items-center space-x-5 mb-8 border border-neutral-100 dark:border-neutral-700">
        <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center border-4 border-white dark:border-neutral-700 shadow-sm">
          <UserAvatarIcon className="w-14 h-14 text-primary-600 dark:text-primary-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{t('progress_greeting')}</h2>
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mt-1">{t('progress_message')}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {statCards.map(card => (
          <div key={card.labelKey} className={`rounded-2xl p-4 text-center border-2 ${card.style} transition-transform hover:scale-105 shadow-sm`}>
            <p className="text-3xl font-bold mb-1">{card.value}</p>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-80">{t(card.labelKey)}</p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-sm p-6 border border-neutral-100 dark:border-neutral-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{t('progress_badges_title')}</h3>
          {earnedBadges.length > 0 && (
            <button className="text-xs font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors">
              {t('progress_view_all')}
            </button>
          )}
        </div>
        
        {earnedBadges.length === 0 ? (
          <div className="text-center py-8 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl border-2 border-dashed border-neutral-200 dark:border-neutral-700">
              <p className="text-3xl mb-2">🏆</p>
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{t('progress_badges_empty')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {earnedBadges.map((badge) => (
              <div key={badge.id} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full flex items-center justify-center text-4xl mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300 ring-4 ring-white dark:ring-neutral-800">
                    {badge.icon}
                </div>
                <p className="text-xs font-bold text-neutral-700 dark:text-neutral-300 leading-tight px-1">
                    {getText(badge.name, badge.nameKey)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressPage;
