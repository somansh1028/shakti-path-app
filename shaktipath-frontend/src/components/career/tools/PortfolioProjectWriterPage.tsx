import React, { useState } from 'react';
import { useI18n } from '../../../contexts/I18nContext';
import { useUserProgress } from '../../../contexts/UserProgressContext';
import { getLearningPaths } from '../../../data/learningData';
import { generateGeminiResponse } from '../../../services/geminiService';
import { SparkleIcon } from '../../icons/SparkleIcon';

interface PortfolioProjectWriterPageProps {
  onBack: () => void;
}

const PortfolioProjectWriterPage: React.FC<PortfolioProjectWriterPageProps> = ({ onBack }) => {
  const { t, language } = useI18n();
  const { completedCourseIds } = useUserProgress();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  
  const [selectedProject, setSelectedProject] = useState('');
  
  const learningPaths = getLearningPaths(language);

  // Use real completed courses from context
  const userProjects = Array.from(completedCourseIds).map(courseId => {
    for (const path of learningPaths) {
      const course = path.courses.find(c => c.id === courseId);
      if (course) return { id: course.id, name: t(course.titleKey || '') };
    }
    return null;
  }).filter(Boolean) as { id: string, name: string }[];

  const handleGenerate = async () => {
    if (!selectedProject) {
        setError("Please select a project.");
        return;
    }
    setIsLoading(true);
    setError(null);
    setDescription('');

    const token = localStorage.getItem('authToken');
    if (!token) {
        setError("UNAUTHORIZED");
        setIsLoading(false);
        return;
    }
    
    const projectName = userProjects.find(p => p.id === selectedProject)?.name || selectedProject;
    
    const prompt = `Write a compelling 2-paragraph portfolio description for a project based on the course "${projectName}". Paragraph 1: Describe the client's problem and the project's goal. Paragraph 2: Describe the solution, the skills used, and the positive outcome. The tone should be professional. Respond in ${language}.`;

    try {
        const response = await generateGeminiResponse([{ text: prompt }], token);
        setDescription(response);
    } catch (err) {
        if (err instanceof Error && err.message.includes("UNAUTHORIZED")) {
            setError("UNAUTHORIZED");
        } else {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        }
    } finally {
        setIsLoading(false);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(description);
  };

  const handleSessionExpired = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userEmail');
      window.location.reload();
  };

  return (
    <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
      <header className="relative flex items-center mb-6">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700" aria-label="Go back">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-neutral-900 dark:text-white text-center flex-1">{t('career_tool_portfolio_writer_title')}</h1>
      </header>
      
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-5 space-y-4">
        <div>
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{t('portfolio_writer_select_project')}</label>
            <select value={selectedProject} onChange={e => setSelectedProject(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                <option value="">{t('pitch_gen_select_placeholder')}</option>
                {userProjects.map(proj => <option key={proj.id} value={proj.id}>{proj.name}</option>)}
            </select>
             {userProjects.length === 0 && (
                <p className="text-xs text-neutral-500 mt-1">Complete courses to unlock projects here.</p>
            )}
        </div>
      </div>

      <div className="mt-4">
        {error === "UNAUTHORIZED" ? (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-center">
                <p className="text-sm text-red-600 dark:text-red-300 font-bold mb-2">Session Expired</p>
                <button onClick={handleSessionExpired} className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                    Log In Again
                </button>
            </div>
        ) : (
            <button onClick={handleGenerate} disabled={isLoading || !selectedProject} className="w-full bg-primary-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-primary-700 transition-colors disabled:bg-primary-300 disabled:cursor-not-allowed">
                {isLoading ? t('portfolio_writer_generating') : t('portfolio_writer_generate_button')}
            </button>
        )}
      </div>

      {error && error !== "UNAUTHORIZED" && <p className="text-red-500 text-center mt-4">{error}</p>}
      
      {description && (
        <div className="mt-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-5">
            <pre className="text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap font-sans">{description}</pre>
            <button onClick={handleCopyToClipboard} className="mt-4 w-full bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold py-2 px-4 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-600 text-sm">
                {t('pitch_gen_copy_button')}
            </button>
        </div>
      )}

    </div>
  );
};

export default PortfolioProjectWriterPage;