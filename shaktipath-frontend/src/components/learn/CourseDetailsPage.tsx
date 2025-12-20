
import React from 'react';
import type { Course, Lesson } from '../../types';
import { useI18n } from '../../contexts/I18nContext';
import { useUserProgress } from '../../contexts/UserProgressContext';

interface CourseDetailsPageProps {
  course: Course;
  onBack: () => void;
  onSelectLesson: (lesson: Lesson) => void;
  onStartAssignment: () => void;
}

const CourseDetailsPage: React.FC<CourseDetailsPageProps> = ({ course, onBack, onSelectLesson, onStartAssignment }) => {
  const { t } = useI18n();
  const { isLessonCompleted, isCourseCompleted, assignmentScores } = useUserProgress();
  
  const getText = (text?: string, key?: string) => text || (key ? t(key) : '');

  const completedLessonsCount = course.lessons.filter(lesson => isLessonCompleted(lesson.id)).length;
  const totalLessons = course.lessons.length;
  const progressPercentage = totalLessons > 0 ? (completedLessonsCount / totalLessons) * 100 : 0;
  
  const isCompleted = isCourseCompleted(course.id);
  const lastScore = assignmentScores ? assignmentScores[course.id] : undefined;

  return (
    <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
      <header className="relative flex items-center mb-6">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700" aria-label="Go back">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-neutral-900 dark:text-white text-center flex-1">{getText(course.title, course.titleKey)}</h1>
      </header>

      {/* --- HERO SECTION --- */}
      {course.metadata ? (
        <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-sm overflow-hidden mb-8 border border-neutral-100 dark:border-neutral-700">
            <div className="p-6 bg-gradient-to-r from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-neutral-800">
                <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-white dark:bg-neutral-700 rounded-2xl flex items-center justify-center text-4xl shadow-sm">
                        {course.icon}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{getText(course.title, course.titleKey)}</h2>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="bg-white dark:bg-neutral-700 px-2 py-0.5 rounded text-xs font-bold text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-neutral-600">
                                {course.lessons.length} {t('lessons')}
                            </span>
                            {isCompleted && (
                                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold dark:bg-green-900/30 dark:text-green-400">
                                    Completed
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-4">
                    {getText(course.description, course.descriptionKey)}
                </p>
                
                {/* Metadata Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {course.metadata.audience && (
                        <div className="bg-white/60 dark:bg-neutral-700/30 p-4 rounded-xl backdrop-blur-sm">
                            <h3 className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2 flex items-center">
                                <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                {t(course.metadata.audience.titleKey)}
                            </h3>
                            <p className="text-sm text-neutral-700 dark:text-neutral-300">{t(course.metadata.audience.textKey)}</p>
                        </div>
                    )}
                    
                    {course.metadata.format && (
                        <div className="bg-white/60 dark:bg-neutral-700/30 p-4 rounded-xl backdrop-blur-sm">
                            <h3 className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2 flex items-center">
                                <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                {t(course.metadata.format.titleKey)}
                            </h3>
                            <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
                                {course.metadata.format.itemsKeys.map(key => (
                                    <li key={key} className="flex items-center">
                                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                                        {t(key)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                 {course.metadata.outcomes && (
                    <div className="mt-4 bg-white/60 dark:bg-neutral-700/30 p-4 rounded-xl backdrop-blur-sm">
                        <h3 className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3 flex items-center">
                            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {t(course.metadata.outcomes.titleKey)}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                             {course.metadata.outcomes.itemsKeys.map(key => (
                                <div key={key} className="flex items-start text-sm text-neutral-700 dark:text-neutral-300">
                                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>{t(key)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Progress & Action Bar */}
            <div className="p-4 border-t border-neutral-100 dark:border-neutral-700 bg-white dark:bg-neutral-800">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">{t('progress')}</span>
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400">{Math.round(progressPercentage)}%</span>
                </div>
                <div className="w-full bg-neutral-100 dark:bg-neutral-700 rounded-full h-2 mb-4">
                    <div className="bg-primary-500 h-2 rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
                </div>

                <div className="flex gap-3">
                    <button 
                        onClick={() => onSelectLesson(course.lessons[0])} 
                        className={`flex-1 font-bold py-3.5 px-4 rounded-xl transition-all transform active:scale-95 shadow-lg ${
                            isCompleted 
                            ? 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800' 
                            : 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900'
                        }`}
                    >
                        {isCompleted ? t('course_review_button') : (progressPercentage > 0 ? 'Continue Learning' : t('start_course'))}
                    </button>
                </div>
            </div>
        </div>
      ) : (
          /* Fallback for courses without metadata */
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{getText(course.title, course.titleKey)}</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{getText(course.description, course.descriptionKey)}</p>
            
            <div className="mt-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{t('progress')}</span>
                <span className="text-sm font-bold text-primary-600 dark:text-primary-400">{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </div>

            <div className="flex items-stretch gap-3 mt-6">
                <button 
                    onClick={() => onSelectLesson(course.lessons[0])} 
                    className={`flex-1 font-bold py-3 px-4 rounded-xl transition-colors ${
                        isCompleted 
                        ? 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-accent-500 text-white hover:bg-accent-600'
                    }`}
                >
                    {isCompleted ? t('course_review_button') : t('start_course')}
                </button>
            </div>
          </div>
      )}
      
      <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4 px-1">{t('lessons')}</h2>
      <div className="space-y-3">
        {course.lessons.map((lesson, idx) => (
          <button
            key={lesson.id}
            onClick={() => onSelectLesson(lesson)}
            className="w-full flex items-center space-x-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-4 text-left transition-transform transform hover:scale-[1.01] active:scale-95 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                isLessonCompleted(lesson.id) 
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                : 'bg-neutral-100 text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400'
            }`}>
                {isLessonCompleted(lesson.id) ? '✓' : idx + 1}
            </div>
            <div className="flex-1">
              <h3 className={`font-medium text-sm ${isLessonCompleted(lesson.id) ? 'text-neutral-500 dark:text-neutral-500' : 'text-neutral-900 dark:text-white'}`}>{getText(lesson.title, lesson.titleKey)}</h3>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">{lesson.duration} min</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-300 dark:text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>
      
      {course.assignment && (
        <div className="mt-8 mb-24">
            <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4 px-1">{t('final_assignment')}</h2>
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700">
                <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-300">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-neutral-900 dark:text-white">{getText(course.assignment.title, course.assignment.titleKey)}</h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{getText(course.assignment.description, course.assignment.descriptionKey)}</p>
                    </div>
                </div>

                {lastScore !== undefined && (
                    <div className={`mb-6 p-3 rounded-xl flex justify-between items-center ${lastScore >= 70 ? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300' : 'bg-orange-50 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300'}`}>
                       <span className="text-xs font-bold uppercase tracking-wide">Previous Score</span>
                       <span className="font-bold">{lastScore}/100</span>
                    </div>
                )}

                <button 
                    onClick={onStartAssignment} 
                    className="w-full bg-white border-2 border-neutral-200 text-neutral-700 font-bold py-3 px-4 rounded-xl hover:bg-neutral-50 hover:border-neutral-300 transition-colors dark:bg-neutral-700 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-600">
                    {isCompleted || lastScore !== undefined ? t('submit_assignment_again') : t('submit_assignment')}
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsPage;
