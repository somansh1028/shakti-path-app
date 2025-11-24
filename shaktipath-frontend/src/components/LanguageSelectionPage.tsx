
import React from 'react';

interface LanguageSelectionPageProps {
  onSelectLanguage: (lang: string) => void;
  showBackButton?: boolean;
  onBack?: () => void;
}

const LanguageSelectionPage: React.FC<LanguageSelectionPageProps> = ({ onSelectLanguage, showBackButton = false, onBack }) => {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'mr', name: 'मराठी' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
      <div className="w-full max-w-sm p-8 space-y-8 text-center bg-white rounded-2xl shadow-xl dark:bg-neutral-800 relative">
        {showBackButton && (
          <button onClick={onBack} className="absolute top-4 left-4 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700" aria-label="Go back">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <h1 className="text-4xl font-bold font-display text-neutral-900 dark:text-white">Shaktipath</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">Choose Your Language</p>
        <div className="space-y-4 pt-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onSelectLanguage(lang.code)}
              className="w-full py-4 px-4 text-lg font-semibold rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-primary-500 transition-transform transform hover:scale-105"
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
       <footer className="absolute bottom-4 text-center text-neutral-500 dark:text-neutral-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Shaktipath. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LanguageSelectionPage;