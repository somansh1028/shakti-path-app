
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { Course, Lesson, LessonContent } from '../../types';
import { useI18n } from '../../contexts/I18nContext';
import { useUserProgress } from '../../contexts/UserProgressContext';
import { useToast } from '../../contexts/ToastContext';
import Quiz from './Quiz';
import LessonChatWidget from './LessonChatWidget';

interface LessonPageProps {
  course: Course;
  lesson: Lesson;
  onBack: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

const LessonPage: React.FC<LessonPageProps> = ({ course, lesson, onBack, onNavigate }) => {
  const { t } = useI18n();
  const { completeLesson, isLessonCompleted } = useUserProgress();
  const { showToast } = useToast();
  const currentIndex = course.lessons.findIndex(l => l.id === lesson.id);
  const isFirstLesson = currentIndex === 0;
  const isLastLesson = currentIndex === course.lessons.length - 1;
  
  // Local state for checklists
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Reset checklist state when lesson changes
  useEffect(() => {
    setCheckedItems({});
  }, [lesson.id]);

  const toggleCheck = (key: string) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNext = () => {
      const wasCompleted = isLessonCompleted(lesson.id);
      completeLesson(lesson.id);
      if (!wasCompleted) {
          showToast("Lesson Completed! +10 Points");
      }
      onNavigate('next');
  };

  // Helper to get content string: Prefer direct text from data files, fallback to translation key
  // Wrapped in useCallback to prevent re-creation on every render, which upsets useMemo
  const getContent = useCallback((item: LessonContent) => {
      if (item.text) return item.text;
      if (item.contentKey) return t(item.contentKey);
      return '';
  }, [t]);
  
  // Helper for titles
  const getText = useCallback((text?: string, key?: string) => {
      return text || (key ? t(key) : '');
  }, [t]);

  // Extract full lesson text for the AI Context
  // Now dependencies [lesson, getContent, getText] are stable
  const lessonFullText = useMemo(() => {
      let fullText = `${getText(lesson.title, lesson.titleKey)}\n\n`;
      lesson.content?.forEach(item => {
          fullText += `${getContent(item)}\n`;
      });
      return fullText;
  }, [lesson, getContent, getText]);

  return (
    <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full pb-32">
      <header className="relative flex flex-col items-center mb-8 pt-4">
        <div className="w-full flex items-center justify-between mb-4">
             <button onClick={onBack} className="p-3 rounded-full bg-white dark:bg-neutral-800 shadow-soft hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all text-primary-600 dark:text-primary-400" aria-label="Go back">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="bg-primary-100 dark:bg-primary-900/40 px-3 py-1 rounded-full">
                <span className="text-xs font-bold text-primary-700 dark:text-primary-300 uppercase tracking-wider">{t('lesson')} {currentIndex + 1} / {course.lessons.length}</span>
            </div>
            <div className="w-10"></div>
        </div>
        
        <div className="text-center w-full px-4">
            <h1 className="text-2xl font-display font-bold text-neutral-800 dark:text-white leading-tight mb-2">{getText(lesson.title, lesson.titleKey)}</h1>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{getText(course.title, course.titleKey)}</p>
        </div>
      </header>

      <div className="space-y-6 max-w-lg mx-auto">
            {lesson.content?.map((item, index) => {
                const contentText = getContent(item);

                if (item.type === 'heading') {
                    return (
                        <div key={index} className="pt-4 pb-2">
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center">
                               <span className="w-2 h-8 bg-accent-400 rounded-full mr-3 shadow-sm"></span>
                               {contentText}
                            </h3>
                        </div>
                    );
                }
                if (item.type === 'video') {
                    const isPlaylist = contentText.startsWith('PL');
                    const videoSrc = isPlaylist 
                        ? `https://www.youtube.com/embed?listType=playlist&list=${contentText}`
                        : `https://www.youtube.com/embed/${contentText}`;

                    return (
                        <div key={index} className="space-y-2">
                            <div className="rounded-3xl overflow-hidden shadow-soft border-2 border-neutral-100 dark:border-neutral-700 bg-black aspect-video relative group">
                                <iframe
                                    className="w-full h-full"
                                    src={videoSrc}
                                    title="Video Lesson"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            {isPlaylist && (
                                <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-xl text-sm border border-blue-100 dark:border-blue-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                    </svg>
                                    <span>
                                        <strong>Playlist:</strong> Tap the icon (☰) in the video player to see more lessons.
                                    </span>
                                </div>
                            )}
                        </div>
                    );
                }
                if (item.type === 'list') {
                    const items = contentText.split('|').map(s => s.trim()).filter(s => s);
                    return (
                        <div key={index} className="bg-white dark:bg-neutral-800 p-6 rounded-3xl shadow-soft">
                            <ul className="space-y-4">
                                {items.map((li, i) => (
                                    <li key={i} className="flex items-start text-neutral-700 dark:text-neutral-300">
                                        <div className="w-6 h-6 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center text-accent-500 mr-3 mt-0.5 flex-shrink-0">
                                            <span className="text-xs font-bold">{i + 1}</span>
                                        </div>
                                        <span className="leading-relaxed font-medium">{li}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                }
                if (item.type === 'checklist') {
                    const items = contentText.split('|').map(s => s.trim()).filter(s => s);
                    return (
                        <div key={index} className="bg-primary-50 dark:bg-primary-900/10 p-6 rounded-3xl border-2 border-primary-100 dark:border-primary-800/50 shadow-soft">
                            <p className="text-xs font-bold text-primary-600 dark:text-primary-300 mb-4 uppercase tracking-wider flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {t('interactive_checklist_title')}
                            </p>
                            <ul className="space-y-3">
                                {items.map((li, i) => {
                                    const itemKey = `${lesson.id}_${index}_${i}`;
                                    const isChecked = checkedItems[itemKey];
                                    return (
                                        <li 
                                            key={i} 
                                            className={`flex items-center p-3 rounded-2xl transition-all cursor-pointer border-2 ${isChecked ? 'bg-primary-100 dark:bg-primary-900/40 border-primary-200 dark:border-primary-700' : 'bg-white dark:bg-neutral-800 border-transparent shadow-sm hover:border-primary-200'}`}
                                            onClick={() => toggleCheck(itemKey)}
                                        >
                                            <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mr-3 transition-colors duration-300 ${isChecked ? 'bg-primary-600 border-primary-600' : 'border-neutral-300 dark:border-neutral-500 bg-neutral-50 dark:bg-neutral-700'}`}>
                                                {isChecked && <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                                            </div>
                                            <span className={`leading-snug font-medium ${isChecked ? 'text-primary-700 dark:text-primary-300 line-through opacity-70' : 'text-neutral-800 dark:text-neutral-200'}`}>{li}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                }
                // Paragraph
                return (
                    <div key={index} className="bg-white dark:bg-neutral-800 p-6 rounded-3xl shadow-soft">
                        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg">{contentText}</p>
                    </div>
                );
            })}
      </div>
      
      {lesson.quiz && (
          <div className="mt-10 max-w-lg mx-auto">
              <Quiz key={lesson.id} quiz={lesson.quiz} lessonId={lesson.id} />
          </div>
      )}

      <div className="flex justify-between mt-12 pb-8 max-w-lg mx-auto">
        <button 
            onClick={() => onNavigate('prev')} 
            disabled={isFirstLesson} 
            className="flex items-center space-x-2 px-6 py-4 text-sm font-bold text-neutral-600 bg-white dark:bg-neutral-800 dark:text-neutral-300 rounded-2xl shadow-soft hover:bg-neutral-50 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            <span>{t('lesson_previous')}</span>
        </button>
        <button 
            onClick={handleNext} 
            className="flex items-center space-x-2 px-6 py-4 text-sm font-bold text-white bg-primary-600 rounded-2xl shadow-lg shadow-primary-600/30 hover:bg-primary-700 hover:shadow-primary-600/50 hover:scale-105 transition-all"
        >
            <span>{isLastLesson ? t('lesson_back_to_course') : t('lesson_next')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Guruji Lesson Chat Widget */}
      <LessonChatWidget 
        lessonTitle={getText(lesson.title, lesson.titleKey)} 
        lessonContent={lessonFullText} 
      />
    </div>
  );
};

export default LessonPage;
