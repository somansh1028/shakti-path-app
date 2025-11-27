
import React, { useState, useEffect } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import { activeChallenge, communityCircles } from '../../data/communityData';
import { ChallengeIcon } from '../icons/ChallengeIcon';
import { API_BASE_URL, getHeaders } from '../../config';
import { useToast } from '../../contexts/ToastContext';
import type { CommunityCircle } from '../../types';
import Feed from './Feed';

type CommunityTab = 'feed' | 'challenges' | 'circles';

// Define locally to match Feed's expectation
interface APICommunityPost {
    _id: string;
    authorName: string;
    authorRole: string;
    content: string;
    likes: number;
    createdAt: string;
    circleId?: string;
    isLiked?: boolean;
    isMine?: boolean;
    comments?: Array<{ authorName: string; content: string; }>;
    image?: string;
}

const CommunityPage: React.FC = () => {
  const { t } = useI18n();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<CommunityTab>('feed');
  const [posts, setPosts] = useState<APICommunityPost[]>([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  
  const [joinedCircles, setJoinedCircles] = useState<Set<string>>(new Set());
  const [viewingCircle, setViewingCircle] = useState<CommunityCircle | null>(null);
  
  // Challenge State
  const [viewingChallenge, setViewingChallenge] = useState(false);
  const [challengeFile, setChallengeFile] = useState<File | null>(null);
  const [isSubmittingChallenge, setIsSubmittingChallenge] = useState(false);

  // --- 1. INITIALIZATION ---
  useEffect(() => {
      const fetchUserCircles = async () => {
          const token = localStorage.getItem('authToken');
          if (!token) return;
          try {
              const res = await fetch(`${API_BASE_URL}/api/community/user-circles`, { headers: getHeaders(token) });
              if (res.ok) {
                  const data = await res.json();
                  if (data && Array.isArray(data.joinedCircles)) {
                      setJoinedCircles(new Set(data.joinedCircles));
                  }
              }
          } catch (e) { console.error("Failed to fetch circles", e); }
      };
      fetchUserCircles();
  }, []);

  // --- 2. FEED LOGIC ---
  useEffect(() => {
      if (activeTab === 'feed' || (activeTab === 'circles' && viewingCircle)) {
          fetchPosts();
      }
  }, [activeTab, viewingCircle]);

  const fetchPosts = async () => {
      setIsLoading(true);
      setFetchError(false);
      const token = localStorage.getItem('authToken'); 
      try {
          const endpoint = viewingCircle 
            ? `${API_BASE_URL}/api/community/posts?circleId=${viewingCircle.id}`
            : `${API_BASE_URL}/api/community/posts`;
          
          const headers = token ? getHeaders(token) : {};
          const res = await fetch(endpoint, { headers });
          if (res.ok) {
              const data = await res.json();
              if (Array.isArray(data)) {
                  setPosts(data);
              } else {
                  console.warn("API returned invalid posts data:", data);
                  setPosts([]);
              }
          } else {
              console.error("Error fetching posts, status:", res.status);
              setFetchError(true);
              setPosts([]);
          }
      } catch (error) {
          console.error("Failed to fetch posts", error);
          setFetchError(true);
          setPosts([]);
      } finally {
          setIsLoading(false);
      }
  };

  // --- 3. POST ACTIONS ---
  const handleCreatePost = async () => {
      if (!newPostContent.trim()) return;
      const token = localStorage.getItem('authToken');
      if (!token) { showToast("Please login to post."); return; }

      setIsPosting(true);
      try {
          const payload: any = { content: newPostContent };
          if (viewingCircle) payload.circleId = viewingCircle.id;

          const res = await fetch(`${API_BASE_URL}/api/community/posts`, {
              method: 'POST',
              headers: getHeaders(token),
              body: JSON.stringify(payload)
          });

          if (res.ok) {
              setNewPostContent('');
              fetchPosts();
              showToast("Post published!");
          } else { showToast("Failed to post."); }
      } catch (error) { showToast("Error connecting to server."); } finally { setIsPosting(false); }
  };

  const handleLike = async (postId: string) => {
      const token = localStorage.getItem('authToken');
      if (!token) { showToast("Login to like posts."); return; }

      setPosts(current => current.map(p => {
          if (p._id === postId) {
              const isLikedNow = !p.isLiked;
              return { ...p, isLiked: isLikedNow, likes: isLikedNow ? p.likes + 1 : Math.max(0, p.likes - 1) };
          }
          return p;
      }));

      try {
          const res = await fetch(`${API_BASE_URL}/api/community/posts/${postId}/like`, { method: 'POST', headers: getHeaders(token) });
          if (res.ok) {
              const data = await res.json();
              setPosts(current => current.map(p => p._id === postId ? { ...p, likes: data.likes, isLiked: data.isLiked } : p));
          }
      } catch (error) { console.error("Like failed", error); }
  };

  const handleEditPost = async (postId: string, newContent: string) => {
      const token = localStorage.getItem('authToken');
      if (!token) return;

      try {
          const res = await fetch(`${API_BASE_URL}/api/community/posts/${postId}`, {
              method: 'PUT',
              headers: getHeaders(token),
              body: JSON.stringify({ content: newContent })
          });
          if (res.ok) {
              showToast("Post updated");
              fetchPosts();
          } else {
              const err = await res.json();
              showToast(err.error || "Update failed");
          }
      } catch(e) { showToast("Connection error"); }
  };

  const handleCommentPost = async (postId: string, content: string) => {
      const token = localStorage.getItem('authToken');
      if (!token) return;
      
      try {
          const res = await fetch(`${API_BASE_URL}/api/community/posts/${postId}/comments`, {
              method: 'POST',
              headers: getHeaders(token),
              body: JSON.stringify({ content })
          });
          if (res.ok) {
              showToast("Comment added");
              const updatedComments = await res.json();
              setPosts(current => current.map(p => 
                 p._id === postId ? { ...p, comments: updatedComments } : p
              ));
          } else {
              const err = await res.json();
              showToast(err.error || "Failed to comment");
          }
      } catch(e) { showToast("Connection error"); }
  }

  const toggleJoinCircle = async (e: React.MouseEvent, circleId: string) => {
    e.stopPropagation();
    const token = localStorage.getItem('authToken');
    if (!token) { showToast("Please login to join circles."); return; }

    const isJoining = !joinedCircles.has(circleId);
    setJoinedCircles(prev => {
        const newSet = new Set(prev);
        isJoining ? newSet.add(circleId) : newSet.delete(circleId);
        return newSet;
    });
    showToast(isJoining ? "Joined circle!" : "Left circle.");

    try {
        await fetch(`${API_BASE_URL}/api/community/circles/${circleId}/join`, { method: 'POST', headers: getHeaders(token) });
    } catch (e) {
        setJoinedCircles(prev => {
             const newSet = new Set(prev);
             isJoining ? newSet.delete(circleId) : newSet.add(circleId);
             return newSet;
        });
    }
  };

  // --- 4. CHALLENGE ACTIONS ---
  const handleChallengeSubmit = () => {
      if (!challengeFile) {
          showToast("Please select a file first.");
          return;
      }
      setIsSubmittingChallenge(true);
      
      // Simulate API call
      setTimeout(() => {
          setIsSubmittingChallenge(false);
          setChallengeFile(null);
          setViewingChallenge(false);
          showToast("Entry submitted successfully! Good luck!");
      }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
          setChallengeFile(e.target.files[0]);
      }
  };

  // --- RENDERERS ---
  const renderChallenges = () => {
      if (viewingChallenge) {
          return (
              <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-soft p-6 animate-fade-in">
                  <button onClick={() => setViewingChallenge(false)} className="mb-4 text-sm text-primary-600 font-bold flex items-center hover:underline">
                      <span className="mr-1">←</span> Back to List
                  </button>
                  
                  <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                      {t(activeChallenge.categoryKey)}
                  </span>
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{t(activeChallenge.titleKey)}</h2>
                  
                  <div className="bg-neutral-50 dark:bg-neutral-700/50 rounded-xl p-4 mb-6 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      <p className="font-semibold mb-1">Overview:</p>
                      <p className="mb-4">{t(activeChallenge.fullDescriptionKey)}</p>
                      
                      <p className="font-semibold mb-1">Rules:</p>
                      <p className="mb-4 whitespace-pre-line">{t(activeChallenge.rulesKey)}</p>
                      
                      <p className="font-semibold mb-1">Prize:</p>
                      <p className="text-primary-600 font-bold">{t(activeChallenge.prizeKey)}</p>
                  </div>

                  <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                      <h3 className="font-bold text-lg mb-4 dark:text-white">Submit Your Entry</h3>
                      
                      <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-xl p-6 text-center hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors cursor-pointer relative">
                          <input 
                            type="file" 
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                            accept="image/*,.pdf"
                          />
                          <div className="flex flex-col items-center pointer-events-none">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neutral-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                              </svg>
                              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                                  {challengeFile ? challengeFile.name : "Click to upload your design"}
                              </p>
                              <p className="text-xs text-neutral-400 mt-1">PNG, JPG, PDF (Max 5MB)</p>
                          </div>
                      </div>

                      <button 
                        onClick={handleChallengeSubmit} 
                        disabled={!challengeFile || isSubmittingChallenge}
                        className="w-full mt-4 bg-primary-600 text-white font-bold py-3 rounded-xl hover:bg-primary-700 disabled:bg-neutral-300 dark:disabled:bg-neutral-600 disabled:cursor-not-allowed transition-colors"
                      >
                          {isSubmittingChallenge ? 'Uploading...' : 'Submit Entry'}
                      </button>
                  </div>
              </div>
          );
      }
      return (
        <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-soft p-6 border-2 border-primary-100 dark:border-primary-800 relative overflow-hidden">
            <div className="flex items-start space-x-4 relative z-10">
                <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-2xl text-primary-600 dark:text-primary-400"><ChallengeIcon className="w-8 h-8" /></div>
                <div className="flex-1">
                    <span className="inline-block px-2 py-1 bg-accent-100 text-accent-700 text-[10px] font-bold rounded-full mb-2 uppercase tracking-wider">{t(activeChallenge.categoryKey)}</span>
                    <h2 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight">{t(activeChallenge.titleKey)}</h2>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 mb-4 leading-relaxed">{t(activeChallenge.descriptionKey)}</p>
                    
                    <div className="flex items-center justify-between text-xs font-medium text-neutral-500 mb-2">
                        <span>{activeChallenge.participants} {t('community_challenge_participants')}</span>
                        <span className="text-primary-600 dark:text-primary-400">{activeChallenge.daysLeft} {t('community_challenge_days_left')}</span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-neutral-700 rounded-full h-2 mb-5">
                        <div className="bg-primary-500 h-2 rounded-full w-3/4 shadow-glow"></div>
                    </div>

                    <button onClick={() => setViewingChallenge(true)} className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold py-3 px-4 rounded-full shadow-lg shadow-primary-500/30 hover:scale-[1.02] transition-transform">{t('community_challenge_button')}</button>
                </div>
            </div>
        </div>
      );
  };

  const renderCirclesList = () => (
      <div className="space-y-4">
          <h2 className="text-lg font-bold text-neutral-900 dark:text-white px-1">{t('community_circles_title')}</h2>
          {communityCircles.map(circle => {
              const isJoined = joinedCircles.has(circle.id);
              return (
                  <div key={circle.id} onClick={() => { setViewingCircle(circle); setActiveTab('circles'); }} className="bg-white dark:bg-neutral-800 rounded-3xl p-4 shadow-soft flex items-center justify-between transition-transform hover:scale-[1.01] cursor-pointer">
                      <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 rounded-2xl bg-neutral-50 dark:bg-neutral-700 flex items-center justify-center text-3xl shadow-inner">{circle.icon}</div>
                          <div>
                              <h3 className="font-bold text-neutral-900 dark:text-white">{t(circle.nameKey)}</h3>
                              <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-[180px] truncate">{t(circle.descriptionKey)}</p>
                              <p className="text-[10px] font-medium text-primary-600 dark:text-primary-400 mt-1 bg-primary-50 dark:bg-primary-900/30 inline-block px-2 py-0.5 rounded-full">{circle.membersCount} {t('community_circles_member_count')}</p>
                          </div>
                      </div>
                      <button onClick={(e) => toggleJoinCircle(e, circle.id)} className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${isJoined ? 'bg-neutral-100 text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400' : 'bg-primary-600 text-white shadow-md hover:bg-primary-700'}`}>{isJoined ? t('community_circles_joined') : t('community_circles_join')}</button>
                  </div>
              );
          })}
      </div>
  );

  const renderCircleDetails = () => {
      if (!viewingCircle) return null;
      const isJoined = joinedCircles.has(viewingCircle.id);
      return (
          <div>
              <div className="mb-6 flex items-center justify-between">
                  <button onClick={() => setViewingCircle(null)} className="text-sm text-primary-600 font-bold flex items-center hover:underline"><span className="mr-1">←</span> All Circles</button>
              </div>
              <div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 shadow-soft mb-6 text-center">
                  <div className="w-20 h-20 bg-neutral-50 dark:bg-neutral-700 rounded-3xl flex items-center justify-center text-5xl mx-auto mb-4 shadow-inner">{viewingCircle.icon}</div>
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{t(viewingCircle.nameKey)}</h2>
                  <p className="text-neutral-500 dark:text-neutral-400 mt-2 max-w-xs mx-auto">{t(viewingCircle.descriptionKey)}</p>
                  <div className="mt-4 flex justify-center">
                      <button onClick={(e) => toggleJoinCircle(e, viewingCircle.id)} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${isJoined ? 'bg-neutral-100 text-neutral-500' : 'bg-primary-600 text-white shadow-lg'}`}>{isJoined ? 'Joined' : 'Join Group'}</button>
                  </div>
              </div>
              <h3 className="font-bold text-lg mb-4 px-2">Group Posts</h3>
              {isJoined ? (
                  fetchError ? (
                      <div className="text-center py-8 bg-red-50 dark:bg-red-900/20 rounded-3xl">
                          <p className="text-red-500 mb-2">Could not load posts.</p>
                          <button onClick={fetchPosts} className="text-xs font-bold text-white bg-red-500 px-3 py-1 rounded-full hover:bg-red-600">Retry</button>
                      </div>
                  ) : (
                    <Feed 
                        posts={posts} isLoading={isLoading} isPosting={isPosting} viewingCircle={viewingCircle}
                        newPostContent={newPostContent} onPostContentChange={setNewPostContent}
                        onCreatePost={handleCreatePost} onLikePost={handleLike}
                        onEditPost={handleEditPost} onCommentPost={handleCommentPost}
                        onRefreshNeeded={fetchPosts}
                    />
                  )
              ) : (
                  <div className="text-center py-10 bg-neutral-50 dark:bg-neutral-900/30 rounded-3xl border-2 border-dashed border-neutral-200 dark:border-neutral-700"><p className="text-neutral-500">Join this circle to see and post content.</p></div>
              )}
          </div>
      );
  };

  return (
    <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
      <header className="mb-6">
        <h1 className="text-3xl font-display font-bold text-neutral-900 dark:text-white">{t('community_title')}</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{t('community_subtitle')}</p>
      </header>

      {!viewingCircle && (
          <div className="flex p-1 bg-white dark:bg-neutral-800 rounded-full mb-6 shadow-sm">
              {(['feed', 'challenges', 'circles'] as CommunityTab[]).map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === tab ? 'bg-primary-600 text-white shadow-md' : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400'}`}>{t(`community_tab_${tab}`)}</button>
              ))}
          </div>
      )}

      <div className="animate-fade-in">
          {activeTab === 'feed' && (
              fetchError ? (
                  <div className="text-center py-10 bg-white dark:bg-neutral-800 rounded-3xl shadow-soft">
                      <p className="text-red-500 font-medium mb-3">Unable to connect to the community feed.</p>
                      <button onClick={fetchPosts} className="px-4 py-2 bg-primary-600 text-white rounded-lg shadow-md hover:bg-primary-700 transition-colors">
                          Retry Connection
                      </button>
                  </div>
              ) : (
                <Feed 
                    posts={posts} isLoading={isLoading} isPosting={isPosting} viewingCircle={null}
                    newPostContent={newPostContent} onPostContentChange={setNewPostContent}
                    onCreatePost={handleCreatePost} onLikePost={handleLike}
                    onEditPost={handleEditPost} onCommentPost={handleCommentPost}
                    onRefreshNeeded={fetchPosts}
                />
              )
          )}
          {activeTab === 'challenges' && renderChallenges()}
          {activeTab === 'circles' && !viewingCircle && renderCirclesList()}
          {activeTab === 'circles' && viewingCircle && renderCircleDetails()}
      </div>
    </div>
  );
};

export default CommunityPage;
