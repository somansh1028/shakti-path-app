
import React, { useState, useEffect } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import { UserCircleIcon } from '../icons/UserCircleIcon';
import { LanguageIcon } from '../icons/LanguageIcon';
import { BellIcon } from '../icons/BellIcon';
import { TeacherConnectIcon } from '../icons/TeacherConnectIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { useToast } from '../../contexts/ToastContext';
import { API_BASE_URL, getHeaders } from '../../config';
import type { UserProfile, UserPreferences } from '../../types';

interface SettingsPageProps {
  onGoToLanguageSelection: () => void;
  onLogout: () => void;
}

type SettingsView = 'main' | 'profile' | 'reminders' | 'teacher';

// --- Sub-Component: Profile View (Editable) ---
const ProfileView: React.FC<{ onBack: () => void; onLogout: () => void }> = ({ onBack, onLogout }) => {
    const { t } = useI18n();
    const { showToast } = useToast();
    const userEmail = localStorage.getItem('userEmail') || 'user@example.com';
    
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState<UserProfile>({
        name: '',
        city: '',
        bio: '',
        skills: [],
        interests: []
    });
    
    // Form States
    const [tempProfile, setTempProfile] = useState<UserProfile>(profile);
    const [skillInput, setSkillInput] = useState('');
    const [interestInput, setInterestInput] = useState('');

    // Fetch Profile
    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) return;
            try {
                const res = await fetch(`${API_BASE_URL}/api/user/profile`, { headers: getHeaders(token) });
                if (res.status === 401) {
                    window.dispatchEvent(new Event('auth-unauthorized'));
                    return;
                }
                if (res.ok) {
                    const data = await res.json();
                    const loadedProfile = {
                        name: data.name || '',
                        city: data.city || '',
                        bio: data.bio || '',
                        skills: data.skills || [],
                        interests: data.interests || []
                    };
                    setProfile(loadedProfile);
                    setTempProfile(loadedProfile);
                }
            } catch (e) {
                console.error("Failed to load profile", e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProfile();
    }, []);

    const handleSave = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) return;
        
        try {
            setIsLoading(true);
            const res = await fetch(`${API_BASE_URL}/api/user/profile`, {
                method: 'PUT',
                headers: getHeaders(token),
                body: JSON.stringify(tempProfile)
            });
            
            if (res.status === 401) {
                window.dispatchEvent(new Event('auth-unauthorized'));
                return;
            }

            if (res.ok) {
                setProfile(tempProfile);
                setIsEditing(false);
                showToast("Profile updated successfully!");
            } else {
                showToast("Failed to update profile.");
            }
        } catch (e) {
            showToast("Connection error.");
        } finally {
            setIsLoading(false);
        }
    };

    const addTag = (type: 'skills' | 'interests', value: string) => {
        if (!value.trim()) return;
        setTempProfile(prev => ({
            ...prev,
            [type]: [...prev[type], value.trim()]
        }));
    };

    const removeTag = (type: 'skills' | 'interests', index: number) => {
        setTempProfile(prev => ({
            ...prev,
            [type]: prev[type].filter((_, i) => i !== index)
        }));
    };

    const handleKeyDown = (e: React.KeyboardEvent, type: 'skills' | 'interests', value: string, setter: (s: string) => void) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag(type, value);
            setter('');
        }
    };

    if (isLoading && !profile.name) {
        return <div className="p-10 text-center text-neutral-500">Loading profile...</div>;
    }

    return (
        <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
            <header className="relative flex items-center mb-6">
                <button onClick={onBack} className="absolute left-0 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-xl font-bold text-neutral-900 dark:text-white text-center flex-1">{t('settings_profile')}</h1>
                <button 
                    onClick={() => {
                        if (isEditing) {
                            setTempProfile(profile); // Cancel logic
                            setIsEditing(false);
                        } else {
                            setIsEditing(true);
                        }
                    }}
                    className="absolute right-0 text-sm font-bold text-primary-600 dark:text-primary-400"
                >
                    {isEditing ? 'Cancel' : 'Edit'}
                </button>
            </header>
            
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-6 flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4 relative">
                     <UserCircleIcon className="w-16 h-16 text-primary-600 dark:text-primary-400" />
                </div>
                
                {isEditing ? (
                    <input 
                        className="text-2xl font-bold text-center text-neutral-900 dark:text-white bg-transparent border-b border-neutral-300 dark:border-neutral-600 focus:border-primary-500 outline-none w-full"
                        value={tempProfile.name}
                        onChange={(e) => setTempProfile({...tempProfile, name: e.target.value})}
                        placeholder="Your Name"
                    />
                ) : (
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{profile.name || 'Learner'}</h2>
                )}
                
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">{userEmail}</p>
                
                {isEditing ? (
                    <input 
                        className="mt-3 px-3 py-1 text-xs font-medium text-center bg-neutral-100 dark:bg-neutral-700 rounded-full border-none focus:ring-1 focus:ring-primary-500 w-40"
                        value={tempProfile.city}
                        onChange={(e) => setTempProfile({...tempProfile, city: e.target.value})}
                        placeholder="Your City"
                    />
                ) : (
                    <div className="mt-2 px-3 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-300">
                        {profile.city || 'City not set'}
                    </div>
                )}
            </div>

            <div className="space-y-6">
                {/* Bio Section */}
                <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-5">
                    <h3 className="text-sm font-bold text-neutral-400 uppercase mb-3">About Me</h3>
                    {isEditing ? (
                        <textarea 
                            className="w-full p-3 rounded-xl bg-neutral-50 dark:bg-neutral-700 border-none text-sm focus:ring-1 focus:ring-primary-500"
                            rows={3}
                            value={tempProfile.bio}
                            onChange={(e) => setTempProfile({...tempProfile, bio: e.target.value})}
                            placeholder="Write a short bio for your job pitch..."
                        />
                    ) : (
                        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            {profile.bio || 'No bio yet. Add one to help generate better pitches!'}
                        </p>
                    )}
                </div>

                {/* Skills Section */}
                <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-5">
                    <h3 className="text-sm font-bold text-neutral-400 uppercase mb-3">My Skills</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {(isEditing ? tempProfile.skills : profile.skills).map((skill, i) => (
                            <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                {skill}
                                {isEditing && (
                                    <button onClick={() => removeTag('skills', i)} className="ml-2 text-blue-500 hover:text-blue-900">×</button>
                                )}
                            </span>
                        ))}
                    </div>
                    {isEditing && (
                        <div className="flex gap-2">
                            <input 
                                className="flex-1 px-3 py-2 text-sm border rounded-lg dark:bg-neutral-700 dark:border-neutral-600"
                                placeholder="Add skill (e.g. Canva)"
                                value={skillInput}
                                onChange={(e) => setSkillInput(e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, 'skills', skillInput, setSkillInput)}
                            />
                            <button 
                                onClick={() => { addTag('skills', skillInput); setSkillInput(''); }}
                                className="px-3 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg text-sm font-bold"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>

                {/* Interests Section */}
                <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-5">
                    <h3 className="text-sm font-bold text-neutral-400 uppercase mb-3">Interests (Ikigai)</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {(isEditing ? tempProfile.interests : profile.interests).map((interest, i) => (
                            <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                                {interest}
                                {isEditing && (
                                    <button onClick={() => removeTag('interests', i)} className="ml-2 text-purple-500 hover:text-purple-900">×</button>
                                )}
                            </span>
                        ))}
                    </div>
                    {isEditing && (
                        <div className="flex gap-2">
                            <input 
                                className="flex-1 px-3 py-2 text-sm border rounded-lg dark:bg-neutral-700 dark:border-neutral-600"
                                placeholder="Add interest (e.g. Teaching)"
                                value={interestInput}
                                onChange={(e) => setInterestInput(e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, 'interests', interestInput, setInterestInput)}
                            />
                            <button 
                                onClick={() => { addTag('interests', interestInput); setInterestInput(''); }}
                                className="px-3 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg text-sm font-bold"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {isEditing && (
                <div className="mt-8 sticky bottom-6">
                    <button 
                        onClick={handleSave}
                        className="w-full py-3 bg-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-transform hover:scale-[1.02]"
                    >
                        Save Changes
                    </button>
                </div>
            )}

            <div className="mt-10">
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

// --- Sub-Component: Reminders View (SYNCED TO MONGODB) ---
const RemindersView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const { t } = useI18n();
    const { showToast } = useToast();
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    
    // State for Schedule
    const [dailyGoal, setDailyGoal] = useState(15); // Minutes
    const [studyTime, setStudyTime] = useState('18:00');
    const [selectedDays, setSelectedDays] = useState<string[]>(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
    const [permissionStatus, setPermissionStatus] = useState<NotificationPermission>('default');
    
    // State for Toggles
    const [toggles, setToggles] = useState({ 
        practice: true, 
        streaks: true, 
        community: false 
    });

    useEffect(() => {
        if ('Notification' in window) {
            setPermissionStatus(Notification.permission);
        }
        
        // FETCH PREFERENCES FROM DB
        const fetchPrefs = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) { setIsLoading(false); return; }
            
            try {
                const res = await fetch(`${API_BASE_URL}/api/user/preferences`, { headers: getHeaders(token) });
                
                if (res.status === 401) {
                    window.dispatchEvent(new Event('auth-unauthorized'));
                    return;
                }

                // Graceful handle if backend route missing (404)
                if (res.status === 404) {
                    setIsLoading(false);
                    return;
                }

                if (res.ok) {
                    const data: UserPreferences = await res.json();
                    if (data && data.dailyGoal) {
                        setDailyGoal(data.dailyGoal);
                        setStudyTime(data.studyTime);
                        setSelectedDays(data.reminderDays);
                        setToggles(data.notifications);
                    }
                }
            } catch (e) {
                console.error("Failed to load preferences", e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPrefs();
    }, []);

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const toggleDay = (day: string) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter(d => d !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

    const requestPermission = async () => {
        if (!('Notification' in window)) {
            showToast("This browser does not support notifications.");
            return false;
        }

        if (Notification.permission === 'granted') {
            return true;
        }

        if (Notification.permission !== 'denied') {
            const permission = await Notification.requestPermission();
            setPermissionStatus(permission);
            if (permission === 'granted') {
                showToast("Notifications enabled! 🎉");
                return true;
            }
        }

        if (Notification.permission === 'denied') {
            showToast("Notifications blocked. Please enable them in Browser Settings.");
            return false;
        }
        return false;
    };

    const handleSave = async () => {
        const granted = await requestPermission();
        if (granted) {
            // SAVE TO MONGODB
            const token = localStorage.getItem('authToken');
            if (!token) return;
            
            setIsSaving(true);
            try {
                const payload: UserPreferences = {
                    dailyGoal,
                    studyTime,
                    reminderDays: selectedDays,
                    notifications: toggles
                };
                
                const res = await fetch(`${API_BASE_URL}/api/user/preferences`, {
                    method: 'PUT',
                    headers: getHeaders(token),
                    body: JSON.stringify(payload)
                });
                
                if (res.status === 401) {
                    window.dispatchEvent(new Event('auth-unauthorized'));
                    return;
                }

                if (res.ok) {
                    showToast(`Schedule synced to cloud! Reminder set for ${studyTime}.`);
                } else {
                    showToast("Failed to save settings.");
                }
            } catch(e) {
                showToast("Connection error.");
            } finally {
                setIsSaving(false);
            }
        }
    };

    const handleTestNotification = async () => {
        const granted = await requestPermission();
        if (granted) {
            if ('serviceWorker' in navigator) {
                const registration = await navigator.serviceWorker.ready;
                registration.showNotification('Shaktipath Learning', {
                    body: `Time to reach your ${dailyGoal} min goal! 🚀`,
                    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
                    vibrate: [200, 100, 200]
                } as any);
            } else {
                new Notification('Shaktipath Learning', {
                    body: `Time to reach your ${dailyGoal} min goal! 🚀`,
                    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                });
            }
        }
    };

    if (isLoading) {
        return <div className="p-10 text-center text-neutral-500">Syncing settings...</div>;
    }

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

            {permissionStatus === 'denied' && (
                <div className="mb-6 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800 text-center">
                    <p className="text-red-600 dark:text-red-300 text-sm font-bold mb-1">Notifications are Blocked</p>
                    <p className="text-red-500 dark:text-red-400 text-xs">Please enable permissions in your browser settings to receive study reminders.</p>
                </div>
            )}

            {/* 1. Daily Goal Section */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-5 mb-5">
                <h2 className="text-sm font-bold text-neutral-400 uppercase mb-4 tracking-wider">Daily Goal</h2>
                <div className="grid grid-cols-3 gap-3">
                    {[5, 15, 30].map((min) => (
                        <button
                            key={min}
                            onClick={() => setDailyGoal(min)}
                            className={`py-3 px-2 rounded-xl border-2 transition-all flex flex-col items-center justify-center ${
                                dailyGoal === min 
                                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300' 
                                : 'border-neutral-100 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-500 hover:border-primary-200'
                            }`}
                        >
                            <span className="text-lg font-bold">{min} min</span>
                            <span className="text-[10px] font-medium uppercase opacity-70">
                                {min === 5 ? 'Casual' : min === 15 ? 'Regular' : 'Serious'}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* 2. Schedule Section */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-5 mb-5">
                <h2 className="text-sm font-bold text-neutral-400 uppercase mb-4 tracking-wider">Your Schedule</h2>
                
                <div className="flex items-center justify-between mb-6 bg-neutral-50 dark:bg-neutral-700/50 p-3 rounded-xl">
                    <span className="font-semibold text-neutral-700 dark:text-neutral-200 ml-2">Time of Day</span>
                    <input 
                        type="time" 
                        value={studyTime}
                        onChange={(e) => setStudyTime(e.target.value)}
                        className="bg-white dark:bg-neutral-600 border border-neutral-200 dark:border-neutral-500 rounded-lg px-3 py-1 text-neutral-800 dark:text-white font-bold outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>

                <div className="flex justify-between">
                    {days.map((day) => {
                        const isSelected = selectedDays.includes(day);
                        return (
                            <button
                                key={day}
                                onClick={() => toggleDay(day)}
                                className={`w-10 h-10 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                                    isSelected
                                    ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20 scale-110'
                                    : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200'
                                }`}
                            >
                                {day.charAt(0)}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* 3. Notification Preferences */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-2 mb-8">
                {[
                    { id: 'practice', label: 'Practice Reminders', sub: 'Get nudged at your set time', icon: '⏰' },
                    { id: 'streaks', label: 'Streak Protection', sub: 'Alerts if you\'re about to lose a streak', icon: '🔥' },
                    { id: 'community', label: 'Community Activity', sub: 'When someone replies to you', icon: '💬' }
                ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border-b border-neutral-100 dark:border-neutral-700 last:border-0">
                        <div className="flex items-center">
                            <span className="text-xl mr-3">{item.icon}</span>
                            <div>
                                <p className="font-semibold text-neutral-900 dark:text-white text-sm">{item.label}</p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.sub}</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setToggles(prev => ({ ...prev, [item.id]: !prev[item.id as keyof typeof toggles] }))}
                            className={`w-11 h-6 rounded-full transition-colors duration-300 relative ${toggles[item.id as keyof typeof toggles] ? 'bg-green-500' : 'bg-neutral-300 dark:bg-neutral-600'}`}
                        >
                            <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 shadow-sm ${toggles[item.id as keyof typeof toggles] ? 'left-5.5 translate-x-0' : 'left-0.5'}`}></div>
                        </button>
                    </div>
                ))}
            </div>

            <div className="space-y-4">
                <button 
                    onClick={handleSave}
                    disabled={isSaving}
                    className="w-full py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-xl shadow-lg hover:scale-[1.01] transition-transform disabled:opacity-70"
                >
                    {isSaving ? 'Saving...' : (permissionStatus === 'granted' ? 'Save Preferences' : 'Enable Notifications & Save')}
                </button>
                
                {permissionStatus === 'granted' && (
                    <button 
                        onClick={handleTestNotification}
                        className="w-full py-3 border-2 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 font-bold rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                        Test Notification (Buzz Me!)
                    </button>
                )}
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
        e.preventDefault();
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
        <p className="text-xs text-neutral-400">Shaktipath v1.2.0</p>
      </div>
    </div>
  );
};

export default SettingsPage;
