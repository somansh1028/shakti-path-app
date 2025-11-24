
import React, { useState, useEffect } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import { UserCircleIcon } from '../icons/UserCircleIcon';
import { LanguageIcon } from '../icons/LanguageIcon';
import { BellIcon } from '../icons/BellIcon';
import { TeacherConnectIcon } from '../icons/TeacherConnectIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { userData } from '../../data/userData';
import { useToast } from '../../contexts/ToastContext';

interface SettingsPageProps {
  onGoToLanguageSelection: () => void;
  onLogout: () => void;
}

type SettingsView = 'main' | 'profile' | 'reminders' | 'teacher';

// --- Sub-Component: Profile View ---
const ProfileView: React.FC<{ onBack: () => void; onLogout: () => void }> = ({ onBack, onLogout }) => {
    const { t } = useI18n();
    const userEmail = localStorage.getItem('userEmail') || 'user@example.com';

    return (
        <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
            <header className="relative flex items-center mb-6">
                <button onClick={onBack} className="absolute left-0 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-xl font-bold text-neutral-900 dark:text-white text-center flex-1">{t('settings_profile')}</h1>
            </header>
            
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-6 flex flex-col items-center">
                <div className="w-24 h-24 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4">
                     <UserCircleIcon className="w-16 h-16 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{userData.profile.name}</h2>
                <p className="text-neutral-500 dark:text-neutral-400">{userEmail}</p>
                <div className="mt-2 px-3 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-300">
                    {userData.profile.city}
                </div>
            </div>

            <div className="mt-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-6">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Account Details</h3>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span className="text-neutral-600 dark:text-neutral-400">Member Since</span>
                        <span className="font-medium text-neutral-900 dark:text-white">Nov 2024</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-neutral-600 dark:text-neutral-400">Plan</span>
                        <span className="font-medium text-primary-600 dark:text-primary-400">Free Tier</span>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <button 
                    onClick={onLogout}
                    className="w-full py-3 text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 font-bold rounded-xl hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                >
                    Log Out
                </button>
            </div>
        </div>
    );
};

// --- Sub-Component: Reminders View ---
const RemindersView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const { t } = useI18n();
    const [toggles, setToggles] = useState({ study: true, community: false, offers: true });

    const toggle = (key: keyof typeof toggles) => setToggles(prev => ({ ...prev, [key]: !prev[key] }));

    return (
        <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
            <header className="relative flex items-center mb-6">
                <button onClick={onBack} className="absolute left-0 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-xl font-bold text-neutral-900 dark:text-white text-center flex-1">{t('settings_reminders')}</h1>
            </header>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-2">
                {[
                    { id: 'study', label: 'Daily Study Reminder', sub: 'Get a nudge at 10:00 AM' },
                    { id: 'community', label: 'Community Alerts', sub: 'When someone likes your post' },
                    { id: 'offers', label: 'New Gig Alerts', sub: 'When jobs match your skills' }
                ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border-b border-neutral-100 dark:border-neutral-700 last:border-0">
                        <div>
                            <p className="font-semibold text-neutral-900 dark:text-white">{item.label}</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.sub}</p>
                        </div>
                        <button 
                            onClick={() => toggle(item.id as keyof typeof toggles)}
                            className={`w-12 h-6 rounded-full transition-colors duration-300 relative ${toggles[item.id as keyof typeof toggles] ? 'bg-primary-600' : 'bg-neutral-300 dark:bg-neutral-600'}`}
                        >
                            <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 shadow-sm ${toggles[item.id as keyof typeof toggles] ? 'left-6.5 translate-x-0.5' : 'left-0.5'}`}></div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Sub-Component: Teacher Connect View ---
const TeacherConnectView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const { t } = useI18n();
    const { showToast } = useToast();

    const handleRequest = () => {
        showToast("Request sent! A mentor will contact you soon.");
        onBack();
    }

    return (
        <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
            <header className="relative flex items-center mb-6">
                <button onClick={onBack} className="absolute left-0 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-xl font-bold text-neutral-900 dark:text-white text-center flex-1">{t('settings_teacher_connect')}</h1>
            </header>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-6 text-center">
                 <div className="w-20 h-20 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                     <TeacherConnectIcon className="w-10 h-10 text-accent-600 dark:text-accent-400" />
                 </div>
                 <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Find a Mentor</h2>
                 <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-sm">
                    Get 1-on-1 guidance from experienced professionals in your field.
                 </p>
                 
                 <div className="bg-neutral-50 dark:bg-neutral-700 p-4 rounded-xl mb-6 text-left">
                    <h3 className="font-semibold text-sm mb-2 dark:text-white">How it works:</h3>
                    <ul className="list-disc list-inside text-xs text-neutral-600 dark:text-neutral-300 space-y-1">
                        <li>Request a session based on your course</li>
                        <li>Get matched with a volunteer mentor</li>
                        <li>Chat or call via WhatsApp</li>
                    </ul>
                 </div>

                 <button 
                    onClick={handleRequest}
                    className="w-full py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors"
                 >
                    Request Mentor Connection
                 </button>
            </div>
        </div>
    );
};


// --- Main Page ---
const SettingsPage: React.FC<SettingsPageProps> = ({ onGoToLanguageSelection, onLogout }) => {
  const { t } = useI18n();
  const { showToast } = useToast();
  const [view, setView] = useState<SettingsView>('main');
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later.
        setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
      if (!installPrompt) return;
      installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      setInstallPrompt(null);
  };

  const handleShareClick = async () => {
      if (navigator.share) {
          try {
              await navigator.share({
                  title: 'Shaktipath',
                  text: 'Check out Shaktipath! Empowering careers through localized learning.',
                  url: window.location.href,
              });
          } catch (error) {
              console.log('Error sharing:', error);
          }
      } else {
          // Fallback for browsers that don't support Web Share API
          navigator.clipboard.writeText(window.location.href);
          showToast('Link copied to clipboard!');
      }
  };

  const settingsItems = [
    { id: 'profile', labelKey: 'settings_profile', icon: UserCircleIcon, action: () => setView('profile') },
    { id: 'language', labelKey: 'settings_language', icon: LanguageIcon, action: onGoToLanguageSelection },
    { id: 'reminders', labelKey: 'settings_reminders', icon: BellIcon, action: () => setView('reminders') },
    { id: 'teacher', labelKey: 'settings_teacher_connect', icon: TeacherConnectIcon, action: () => setView('teacher') },
    { id: 'share', labelKey: 'Share App', icon: ShareIcon, action: handleShareClick },
  ];

  if (view === 'profile') return <ProfileView onBack={() => setView('main')} onLogout={onLogout} />;
  if (view === 'reminders') return <RemindersView onBack={() => setView('main')} />;
  if (view === 'teacher') return <TeacherConnectView onBack={() => setView('main')} />;

  return (
    <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">{t('settings_title')}</h1>

      {installPrompt && (
          <div className="mb-6 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-5 shadow-lg text-white">
              <div className="flex items-start justify-between">
                  <div>
                      <h3 className="font-bold text-lg">Install Shaktipath</h3>
                      <p className="text-sm text-primary-50 mt-1">Add to your home screen for the best experience.</p>
                  </div>
                  <button 
                    onClick={handleInstallClick}
                    className="bg-white text-primary-700 px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-50 transition-colors"
                  >
                      Install
                  </button>
              </div>
          </div>
      )}

      <div className="space-y-3">
        {settingsItems.map(item => (
          <button
            key={item.id}
            onClick={item.action}
            className="w-full flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 text-left hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors"
          >
            <div className="p-2 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
                <item.icon className="h-6 w-6 text-neutral-600 dark:text-neutral-300" />
            </div>
            <div className="flex-1">
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">{item.labelKey === 'Share App' ? 'Share App' : t(item.labelKey)}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-400 dark:text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-xs text-neutral-400">Shaktipath v1.0.0</p>
      </div>
    </div>
  );
};

export default SettingsPage;
