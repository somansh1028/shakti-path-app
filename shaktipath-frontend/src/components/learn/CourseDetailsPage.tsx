
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
             <button className="p-3 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300 rounded-xl hover:bg-primary-200 dark:hover:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            </button>
        </div>
      </div>
      
      <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">{t('lessons')}</h2>
      <div className="space-y-3">
        {course.lessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => onSelectLesson(lesson)}
            className="w-full flex items-center space-x-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-4 text-left transition-transform transform hover:scale-[1.02] hover:shadow-md active:scale-95"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${isLessonCompleted(lesson.id) ? 'bg-green-100 dark:bg-green-900' : 'bg-neutral-100 dark:bg-neutral-700'}`}>
                {isLessonCompleted(lesson.id) ? 
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                   :
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                }
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-neutral-900 dark:text-white">{getText(lesson.title, lesson.titleKey)}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{lesson.duration} min</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-400 dark:text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>
      
      {course.assignment && (
        <div className="mt-8 mb-10">
            <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">{t('final_assignment')}</h2>
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{getText(course.assignment.title, course.assignment.titleKey)}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">{getText(course.assignment.description, course.assignment.descriptionKey)}</p>
                <div className="mt-6">
                    <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">{t('review_criteria')}</h4>
                    <ul className="space-y-3 mb-6">
                        {course.assignment.reviewCriteria.map((criterion, i) => (
                            <li key={i}>
                                <p className="font-medium text-neutral-700 dark:text-neutral-300">{getText(criterion.name, criterion.nameKey)}</p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">{getText(criterion.description, criterion.descriptionKey)}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {lastScore !== undefined && (
                    <div className={`mb-4 p-4 rounded-xl border flex justify-between items-center ${lastScore >= 70 ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300' : 'bg-orange-50 border-orange-200 text-orange-800 dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-300'}`}>
                       <div>
                          <span className="font-bold block text-xs uppercase tracking-wide opacity-70">Last Attempt</span>
                          <span className="text-sm font-bold">{lastScore >= 70 ? 'Passed' : 'Needs Improvement'}</span>
                       </div>
                       <div className="text-3xl font-bold">
                          {lastScore}/100
                       </div>
                    </div>
                )}

                <button 
                    onClick={onStartAssignment} 
                    className="w-full bg-primary-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20">
                    {isCompleted || lastScore !== undefined ? t('submit_assignment_again') : t('submit_assignment')}
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsPage;
