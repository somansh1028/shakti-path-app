import React, { useState } from 'react';
import { useI18n } from '../../../contexts/I18nContext';
import { useUserProgress } from '../../../contexts/UserProgressContext';
import { getLearningPaths } from '../../../data/learningData';
import { generateGeminiResponse } from '../../../services/geminiService';
import { SparkleIcon } from '../../icons/SparkleIcon';

interface GigPitchGeneratorPageProps {
  onBack: () => void;
}

const GigPitchGeneratorPage: React.FC<GigPitchGeneratorPageProps> = ({ onBack }) => {
  const { t, language } = useI18n();
  const { completedCourseIds } = useUserProgress();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pitch, setPitch] = useState('');
  
  const [selectedService, setSelectedService] = useState('');
  const [selectedClientType, setSelectedClientType] = useState('');
  
  const learningPaths = getLearningPaths(language);

  // Use real completed courses from context
  const userSkills = Array.from(completedCourseIds).map(courseId => {
    for (const path of learningPaths) {
      const course = path.courses.find(c => c.id === courseId);
      if (course) return { id: course.id, name: t(course.titleKey || '') };
    }
    return null;
  }).filter(Boolean) as { id: string, name: string }[];

  const clientTypes = [
    { id: 'restaurant', name: t('pitch_gen_client_type_restaurant') },
    { id: 'salon', name: t('pitch_gen_client_type_salon') },
    { id: 'boutique', name: t('pitch_gen_client_type_boutique') },
    { id: 'shop', name: t('pitch_gen_client_type_shop') },
  ];

  const handleGeneratePitch = async () => {
    if (!selectedService || !selectedClientType) {
        setError("Please select both a service and a client type.");
        return;
    }
    setIsLoading(true);
    setError(null);
    setPitch('');

    const token = localStorage.getItem('authToken');
    if (!token) {
        setError("UNAUTHORIZED");
        setIsLoading(false);
        return;
    }
    
    const serviceName = userSkills.find(s => s.id === selectedService)?.name || selectedService;
    const clientName = clientTypes.find(c => c.id === selectedClientType)?.name || selectedClientType;
    
    const prompt = `Write a short, professional, and friendly WhatsApp pitch message. My service: ${serviceName}. Client's business type: ${clientName}. The goal is to get them interested. Keep it under 3 short paragraphs. Respond in ${language}.`;

    try {
        const response = await generateGeminiResponse([{ text: prompt }], token);
        setPitch(response);
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
    navigator.clipboard.writeText(pitch);
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
        <h1 className="text-xl font-bold text-neutral-900 dark:text-white text-center flex-1">{t('career_tool_pitch_generator_title')}</h1>
      </header>
      
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-5 space-y-4">
        <div>
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{t('pitch_gen_select_service')}</label>
            <select value={selectedService} onChange={e => setSelectedService(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                <option value="">{t('pitch_gen_select_placeholder')}</option>
                {userSkills.map(skill => <option key={skill.id} value={skill.id}>{skill.name}</option>)}
            </select>
            {userSkills.length === 0 && (
                <p className="text-xs text-neutral-500 mt-1">Complete courses to unlock skills here.</p>
            )}
        </div>
         <div>
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{t('pitch_gen_select_client_type')}</label>
            <select value={selectedClientType} onChange={e => setSelectedClientType(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                <option value="">{t('pitch_gen_select_placeholder')}</option>
                {clientTypes.map(type => <option key={type.id} value={type.id}>{type.name}</option>)}
            </select>
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
            <button onClick={handleGeneratePitch} disabled={isLoading || !selectedService || !selectedClientType} className="w-full bg-primary-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-primary-700 transition-colors disabled:bg-primary-300 disabled:cursor-not-allowed">
                {isLoading ? t('pitch_gen_generating') : t('pitch_gen_generate_button')}
            </button>
        )}
      </div>

      {error && error !== "UNAUTHORIZED" && <p className="text-red-500 text-center mt-4">{error}</p>}
      
      {pitch && (
        <div className="mt-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-5">
            <pre className="text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap font-sans">{pitch}</pre>
            <button onClick={handleCopyToClipboard} className="mt-4 w-full bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold py-2 px-4 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-600 text-sm">
                {t('pitch_gen_copy_button')}
            </button>
        </div>
      )}

    </div>
  );
};

export default GigPitchGeneratorPage;