import React, { createContext, useState, useEffect, useContext, ReactNode, useCallback } from 'react';

interface I18nContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string, replacements?: Record<string, string>) => string;
  isLoaded: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<string>(() => localStorage.getItem('appLanguage') || 'en');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchTranslations = async () => {
      setIsLoaded(false);
      try {
        const response = await fetch(`/locales/${language}.json`);
        if (!response.ok) {
          throw new Error(`Could not load translations for ${language}`);
        }
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Failed to fetch translation file:', error);
        // Attempt to fall back to English if the chosen language fails
        try {
            const fallbackResponse = await fetch(`/locales/en.json`);
            const fallbackData = await fallbackResponse.json();
            setTranslations(fallbackData);
        } catch (fallbackError) {
            console.error('Failed to fetch fallback translation file:', fallbackError);
            setTranslations({}); // Clear translations if even fallback fails
        }
      } finally {
        setIsLoaded(true);
      }
    };

    fetchTranslations();
  }, [language]);

  const setLanguage = (lang: string) => {
    localStorage.setItem('appLanguage', lang);
    setLanguageState(lang);
  };

  const t = useCallback((key: string, replacements: Record<string, string> = {}) => {
    let translation = translations[key] || key;
    Object.keys(replacements).forEach(placeholder => {
      translation = translation.replace(`{${placeholder}}`, replacements[placeholder]);
    });
    return translation;
  }, [translations]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, isLoaded }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};