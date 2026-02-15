
import React, { useState, useEffect, useCallback } from 'react';
import LoginPage from './components/LoginPage';
import ResetPasswordPage from './components/ResetPasswordPage';
import { SparkleIcon } from './components/icons/SparkleIcon';
import LanguageSelectionPage from './components/LanguageSelectionPage';
import { I18nProvider, useI18n } from './contexts/I18nContext';
import { UserProgressProvider, useUserProgress } from './contexts/UserProgressContext';
import { CareerProvider } from './contexts/CareerContext';
import BottomNavBar from './components/navigation/BottomNavBar';
import LearnPage from './components/learn/LearnPage';
import CommunityPage from './components/community/CommunityPage';
import ProgressPage from './components/progress/ProgressPage';
import CareerPage from './components/career/CareerPage';
import SettingsPage from './components/settings/SettingsPage';
import PlanPage from './components/plan/PlanPage'; // Import PlanPage
import { ToastProvider } from './contexts/ToastContext';
import Toast from './components/common/Toast';
import { API_BASE_URL } from './config';


type AppStatus = 'healthy' | 'db-error' | 'server-error' | 'offline-demo';
type AppView = 'languageSelection' | 'mainApp';
type ActiveTab = 'plan' | 'learn' | 'community' | 'progress' | 'career' | 'settings';

interface UserSession {
  email: string;
  token: string;
  isDemo?: boolean;
}

const App: React.FC = () => {
  return (
    <I18nProvider>
      <UserProgressProvider>
        {/* CareerProvider wraps the main app logic to expose context to all career tools */}
        <CareerProvider>
          <ToastProvider>
            <AppContainer />
            <Toast />
          </ToastProvider>
        </CareerProvider>
      </UserProgressProvider>
    </I18nProvider>
  );
};

const AppContainer: React.FC = () => {
  const [view, setView] = useState<AppView>(() => 
    localStorage.getItem('appLanguage') ? 'mainApp' : 'languageSelection'
  );
  const { setLanguage, isLoaded } = useI18n();

  const handleLanguageSelect = (lang: string) => {
    setLanguage(lang);
    setView('mainApp');
  };
  
  const handleGoToLanguageSelection = () => {
    setView('languageSelection');
  }

  if (view === 'languageSelection') {
    const isReturning = !!localStorage.getItem('appLanguage');
    return <LanguageSelectionPage onSelectLanguage={handleLanguageSelect} showBackButton={isReturning} onBack={() => setView('mainApp')} />;
  }

  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 dark:bg-neutral-900">
        <SparkleIcon className="w-12 h-12 text-primary-500 animate-spin" />
        <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">Loading...</p>
      </div>
    );
  }
  
  return <MainApp onGoToLanguageSelection={handleGoToLanguageSelection} />;
};


interface MainAppProps {
  onGoToLanguageSelection: () => void;
}

const MainApp: React.FC<MainAppProps> = ({ onGoToLanguageSelection }) => {
  const { t } = useI18n();
  const { refreshProgress } = useUserProgress();
  const [appStatus, setAppStatus] = useState<AppStatus | null>(null);
  const [dbErrorDetails, setDbErrorDetails] = useState<string | null>(null);
  const [user, setUser] = useState<UserSession | null>(() => {
    const token = localStorage.getItem('authToken');
    const email = localStorage.getItem('userEmail');
    return token && email ? { token, email } : null;
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);
  const [resetTokenForPage, setResetTokenForPage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>('learn');
  const [showLongWaitMessage, setShowLongWaitMessage] = useState(false);
  
  // State to handle deep linking to specific learning paths
  const [targetPathId, setTargetPathId] = useState<string | undefined>(undefined);

  const checkSystemHealth = useCallback(async () => {
    setAppStatus(null); 
    setDbErrorDetails(null);
    setShowLongWaitMessage(false);

    // Set a timer to show a "please wait" message if it takes longer than 3 seconds
    const msgTimeout = setTimeout(() => setShowLongWaitMessage(true), 3000);

    try {
           console.log(`🔄 [Health Check] Pinging ${API_BASE_URL}/api/health...`);
      // Render Free Tier sleeps after inactivity. We increase timeout to 60s to allow it to wake up.
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000); 

      const response = await fetch(`${API_BASE_URL}/api/health`, { signal: controller.signal });
      clearTimeout(timeoutId);
      clearTimeout(msgTimeout);

      if (!response.ok) throw new Error(`Server returned ${response.status}`);
      
      const data = await response.json();
      console.log("✅ [Health Check] Success:", data);

      if (data.dbConnection === 'connected') {
          setAppStatus('healthy');
          setDbErrorDetails(null);
      } else {
          setAppStatus('db-error');
          setDbErrorDetails(data.dbError || 'Unknown connection error');
          console.error("❌ [Health Check] DB Error:", data.dbError);
      }
    } catch (error) {
      clearTimeout(msgTimeout);
      console.error(`❌ [Health Check Failed] Could not connect to ${API_BASE_URL}`);
      console.error('Error details:', error);
      setAppStatus('server-error');
    }
  }, []);

  useEffect(() => {
    checkSystemHealth();
  }, [checkSystemHealth]);

  const handleLogout = useCallback(async () => {
    const token = localStorage.getItem('authToken');
    try {
      if (token) {
        // Attempt server-side logout, but don't block
          fetch(`${API_BASE_URL}/api/auth/logout`, { 
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` }
        }).catch(err => console.warn('Logout fetch failed, clearing local state anyway', err));
                 }
    } finally {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userEmail');
      setUser(null);
      // Force reload to clear any in-memory states/contexts
      window.location.reload();
    }
  }, []);

  // Global Event Listener for 401 Unauthorized
  useEffect(() => {
    const handleUnauthorized = () => {
      console.log("Session expired or unauthorized. Logging out.");
      handleLogout();
    };
    window.addEventListener('auth-unauthorized', handleUnauthorized);
    return () => window.removeEventListener('auth-unauthorized', handleUnauthorized);
  }, [handleLogout]);

  const handleLoginAttempt = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    setAuthError(null);
    setAuthSuccess(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok && data.token && data.user.email) {
        const userSession: UserSession = { token: data.token, email: data.user.email };
        localStorage.setItem('authToken', userSession.token);
        localStorage.setItem('userEmail', userSession.email);
        setUser(userSession);
        
        await refreshProgress(); 
      } else {
        setAuthError(data.error || 'Invalid email or password.');
      }
    } catch (err) {
      setAuthError('Could not connect to the server. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterAttempt = async (email: string, password: string): Promise<{success: boolean}> => {
    setIsLoading(true);
    setAuthError(null);
    setAuthSuccess(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setAuthSuccess('Registration successful! Please log in.');
        return { success: true };
      } else {
        setAuthError(data.error || 'Registration failed.');
        return { success: false };
      }
    } catch (err) {
      setAuthError('Could not connect to the server. Please try again later.');
       return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPasswordAttempt = async (email: string): Promise<void> => {
    setIsLoading(true);
    setAuthError(null);
    setAuthSuccess(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setAuthSuccess(data.message);
      } else {
        setAuthError(data.error || 'An error occurred.');
      }
    } catch (err) {
      setAuthError('Could not connect to the server.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoToResetPage = (token: string) => {
    if (token) {
      setResetTokenForPage(token);
    }
  };

  const handlePasswordResetSuccess = () => {
    setResetTokenForPage(null);
    setAuthSuccess("Password has been reset successfully! Please log in.");
  };

  const handleBackToLogin = () => {
    setResetTokenForPage(null);
    setAuthError(null);
    setAuthSuccess(null);
  };
  
  const handleTabClick = (tab: ActiveTab) => {
      setActiveTab(tab);
      // Clear target path when manually switching tabs to prevent getting stuck
      setTargetPathId(undefined);
  };

  const handleNavigateToPath = (pathId: string) => {
      setTargetPathId(pathId);
      setActiveTab('learn');
  };
  
  const renderStatusPage = (titleKey: string, p1Key: string, p2Key: string, listItems: string[] = []) => (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100 dark:bg-neutral-900">
      <div className="w-full max-w-lg p-8 space-y-4 bg-white rounded-2xl shadow-xl dark:bg-neutral-800 text-center">
        <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">{t(titleKey)}</h1>
        <p className="text-neutral-700 dark:text-neutral-300">{t(p1Key)}</p>
        <p className="text-neutral-700 dark:text-neutral-300">{t(p2Key)}</p>
        {listItems.length > 0 && (
          <ul className="list-disc list-inside space-y-2 pl-4 text-neutral-700 dark:text-neutral-300 text-left">
            {listItems.map(itemKey => <li key={itemKey}>{t(itemKey)}</li>)}
          </ul>
        )}
         {titleKey === 'status_db_error_title' && <p className="text-neutral-700 dark:text-neutral-300">{t('status_db_error_p3')}</p>}
         {dbErrorDetails && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded text-xs font-mono text-red-700 text-left overflow-auto max-h-32 shadow-inner">
                <strong>Debug Info:</strong> {dbErrorDetails}
            </div>
         )}
         
         {titleKey === 'status_server_error_title' && (
             <div className="mt-4 p-3 bg-gray-100 border border-gray-300 rounded text-xs text-left">
                 <p className="font-bold text-gray-700">Troubleshooting:</p>
                 <ul className="list-disc list-inside mt-1 text-gray-600">
                     <li>Is the backend deployed on Render?</li>
                     <li>Did you add <code>VITE_API_URL</code> to Vercel Env Vars?</li>
                     <li>Current API URL: <code className="bg-gray-200 px-1 rounded">{API_BASE_URL}</code></li>
                 </ul>
             </div>
         )}

         <div className="flex flex-col gap-3 mt-6">
             <button 
                onClick={checkSystemHealth} 
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold shadow-md"
             >
                Retry Connection
             </button>
             {/* New Button to clear stale sessions */}
             <button 
                onClick={handleLogout} 
                className="px-6 py-3 bg-neutral-200 text-neutral-800 rounded-lg hover:bg-neutral-300 transition-colors font-semibold text-sm"
             >
                Logout / Clear Session
             </button>
         </div>
      </div>
    </div>
  );

  if (appStatus === 'server-error') {
    return renderStatusPage('status_server_error_title', 'status_server_error_p1', 'status_server_error_p2');
  }

  if (appStatus === 'db-error') {
    return renderStatusPage('status_db_error_title', 'status_db_error_p1', 'status_db_error_p2', ['status_db_error_li1', 'status_db_error_li2']);
  }

  if (appStatus === null) {
     return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 dark:bg-neutral-900 px-4 text-center">
        <SparkleIcon className="w-12 h-12 text-primary-500 animate-spin" />
        <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 font-medium">{t('status_initializing')}</p>
        {showLongWaitMessage && (
            <div className="mt-4 animate-fade-in">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Waking up the secure server...<br/>
                    This can take up to 60 seconds on the free plan.
                </p>
                <p className="text-xs text-neutral-400 mt-2">Please don't refresh.</p>
            </div>
        )}
      </div>
    );
  }

  if (resetTokenForPage) {
    return <ResetPasswordPage token={resetTokenForPage} onPasswordResetSuccess={handlePasswordResetSuccess} onBackToLogin={handleBackToLogin} />;
  }

  if (!user) {
    return (
      <LoginPage 
        onLoginAttempt={handleLoginAttempt} 
        onRegisterAttempt={handleRegisterAttempt} 
        onForgotPasswordAttempt={handleForgotPasswordAttempt}
        onGoToResetPage={handleGoToResetPage}
        isLoading={isLoading} 
        error={authError} 
        success={authSuccess}
        onToggleForm={() => { setAuthError(null); setAuthSuccess(null); }}
      />
    );
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'plan':
        return <PlanPage onNavigateToPath={handleNavigateToPath} />;
      case 'learn':
        return <LearnPage initialPathId={targetPathId} />;
      case 'community':
        return <CommunityPage />;
      case 'progress':
        return <ProgressPage />;
      case 'career':
        return <CareerPage />;
      case 'settings':
        return <SettingsPage onGoToLanguageSelection={onGoToLanguageSelection} onLogout={handleLogout} />;
      default:
        return <LearnPage />;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-neutral-50 dark:bg-neutral-900/50">
      <main className="flex-1 overflow-y-auto pb-20">
        {renderActiveTab()}
      </main>
      <BottomNavBar activeTab={activeTab} onTabClick={handleTabClick} />
    </div>
  );
};

export default App;
