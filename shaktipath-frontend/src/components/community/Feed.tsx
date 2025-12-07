

import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import type { CommunityCircle } from '../../types';
import { communityCircles } from '../../data/communityData';
import { SparkleIcon } from '../icons/SparkleIcon';
import { API_BASE_URL, getHeaders } from '../../config';
import { useToast } from '../../contexts/ToastContext';

// Matches Backend Logic
interface APICommunityPost {
    _id: string;
    authorName: string;
    authorRole: string;
    content: string;
    likes: number;
    createdAt: string;
    circleId?: string;
    isLiked?: boolean;
    isMine?: boolean; // Ownership Flag
    comments?: Array<{
        authorName: string;
        content: string;
    }>;
    image?: string;
}

interface FeedProps {
    posts: APICommunityPost[];
    isLoading: boolean;
    isPosting: boolean;
    viewingCircle: CommunityCircle | null;
    newPostContent: string;
    onPostContentChange: (val: string) => void;
    onCreatePost: () => void;
    onLikePost: (postId: string) => void;
    onEditPost: (postId: string, newContent: string) => Promise<void>;
    onCommentPost: (postId: string, content: string) => Promise<void>;
    // New prop to allow Feed to trigger refresh after Guruji auto-post
    onRefreshNeeded?: () => void; 
}

const Feed: React.FC<FeedProps> = ({
    posts,
    isLoading,
    isPosting,
    viewingCircle,
    newPostContent,
    onPostContentChange,
    onCreatePost,
    onLikePost,
    onEditPost,
    onCommentPost,
    onRefreshNeeded
}) => {
    const { t } = useI18n();
    const { showToast } = useToast();

    // Local State for Edit/Comment Modes
    const [editingPostId, setEditingPostId] = useState<string | null>(null);
    const [editContent, setEditContent] = useState('');
    const [commentingPostId, setCommentingPostId] = useState<string | null>(null);
    const [commentContent, setCommentContent] = useState('');
    const [expandedComments, setExpandedComments] = useState<Set<string>>(new Set());
    
    const [isGurujiThinking, setIsGurujiThinking] = useState(false);
    const silenceCheckDoneRef = useRef(false);

    // --- OPTIMIZATION: DISABLE AUTO-GURUJI ---
    // The "Silence Breaker" feature is disabled to prevent background API calls (Option 3).
    // To re-enable, set ENABLE_AUTO_GURUJI to true.
    const ENABLE_AUTO_GURUJI = false; 

    // --- GURUJI PROACTIVE LOGIC (Silence Breaker) ---
    useEffect(() => {
        const checkSilence = async () => {
            // Only run if we are viewing a specific circle, have loaded posts, and haven't checked yet
            if (!viewingCircle || isLoading || silenceCheckDoneRef.current || !ENABLE_AUTO_GURUJI) return;
            
            // Mark checked so we don't loop
            silenceCheckDoneRef.current = true;

            const hasRecentPost = posts.length > 0 && (new Date().getTime() - new Date(posts[0].createdAt).getTime() < 48 * 60 * 60 * 1000);
            
            // If no posts at all, or last post is > 48 hours old
            if (posts.length === 0 || !hasRecentPost) {
                console.log("Circle is silent. Waking up Guruji...");
                const token = localStorage.getItem('authToken');
                if (!token) return;

                try {
                    // 1. Get Starter from AI
                    const res = await fetch(`${API_BASE_URL}/api/community/ask-guruji`, {
                        method: 'POST',
                        headers: getHeaders(token),
                        body: JSON.stringify({
                            mode: 'starter',
                            context: { 
                                circleName: t(viewingCircle.nameKey),
                                circleDesc: t(viewingCircle.descriptionKey)
                            }
                        })
                    });
                    
                    if (!res.ok) return;
                    const data = await res.json();
                    
                    // 2. Auto-Post it
                    await fetch(`${API_BASE_URL}/api/community/posts`, {
                        method: 'POST',
                        headers: getHeaders(token),
                        body: JSON.stringify({
                            content: data.response,
                            circleId: viewingCircle.id,
                            isGuruji: true // Backend flag to set special author info
                        })
                    });

                    // 3. Refresh Feed
                    if (onRefreshNeeded) onRefreshNeeded();

                } catch (e) {
                    console.error("Guruji failed to wake up", e);
                }
            }
        };

        if (ENABLE_AUTO_GURUJI) {
            // Small delay to ensure posts are settled
            const timer = setTimeout(checkSilence, 1000);
            return () => clearTimeout(timer);
        }
    }, [viewingCircle, posts, isLoading, t, onRefreshNeeded, ENABLE_AUTO_GURUJI]);

    // Reset the check ref when switching circles
    useEffect(() => {
        silenceCheckDoneRef.current = false;
    }, [viewingCircle]);


    // --- GURUJI REACTIVE LOGIC (Ask Button) ---
    const handleAskGuruji = async () => {
        if (!newPostContent.trim()) {
            showToast("Please type a question first.");
            return;
        }
        
        setIsGurujiThinking(true);
        const token = localStorage.getItem('authToken');
        if (!token) {
            showToast("Please log in to ask Guruji.");
            setIsGurujiThinking(false);
            return;
        }

        try {
            const circleName = viewingCircle ? t(viewingCircle.nameKey) : "General Community";
            const circleDesc = viewingCircle ? t(viewingCircle.descriptionKey) : "A community for learning";

            const res = await fetch(`${API_BASE_URL}/api/community/ask-guruji`, {
                method: 'POST',
                headers: getHeaders(token),
                body: JSON.stringify({
                    mode: 'answer',
                    userQuestion: newPostContent,
                    context: { circleName, circleDesc }
                })
            });

            if (res.ok) {
                const data = await res.json();
                // Append Guruji's answer to the user's input
                const newText = `${newPostContent}\n\n🙏 **Guruji says:** ${data.response}`;
                onPostContentChange(newText);
            } else {
                showToast("Guruji is meditating (Server Error). Try again later.");
            }
        } catch (e) {
            console.error("Guruji error", e);
            showToast("Failed to connect to Guruji.");
        } finally {
            setIsGurujiThinking(false);
        }
    };


    const startEdit = (post: APICommunityPost) => {
        setEditingPostId(post._id);
        setEditContent(post.content);
    };

    const cancelEdit = () => {
        setEditingPostId(null);
        setEditContent('');
    };

    const saveEdit = async (postId: string) => {
        await onEditPost(postId, editContent);
        setEditingPostId(null);
    };

    const toggleCommentSection = (postId: string) => {
        if (commentingPostId !== postId) {
            setCommentingPostId(postId);
        }
        setExpandedComments(prev => {
            const next = new Set(prev);
            if (next.has(postId)) next.delete(postId);
            else next.add(postId);
            return next;
        });
    };

    const submitComment = async (postId: string) => {
        await onCommentPost(postId, commentContent);
        setCommentContent('');
        if (!expandedComments.has(postId)) {
            setExpandedComments(prev => new Set(prev).add(postId));
        }
    };

    return (
        <div className="space-y-5">
            {/* Create Post Box - ONLY SHOW IF VIEWING A CIRCLE */}
            {viewingCircle && (
                <div className="bg-white dark:bg-neutral-800 rounded-3xl p-4 shadow-soft border border-neutral-100 dark:border-neutral-700 animate-fade-in">
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide">
                            Post to {t(viewingCircle.nameKey)}
                        </p>
                        <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold flex items-center">
                            <SparkleIcon className="w-3 h-3 mr-1" /> Guruji Active
                        </span>
                    </div>
                    <textarea
                        className="w-full bg-neutral-50 dark:bg-neutral-700 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary-500 dark:text-white resize-none transition-all"
                        placeholder="Ask a question or share something..."
                        rows={3}
                        value={newPostContent}
                        onChange={(e) => onPostContentChange(e.target.value)}
                    />
                    <div className="flex justify-between items-center mt-3">
                        <button 
                            onClick={handleAskGuruji}
                            disabled={isGurujiThinking || !newPostContent.trim()}
                            className="flex items-center space-x-1 text-xs font-bold text-orange-600 bg-orange-50 hover:bg-orange-100 dark:bg-orange-900/20 dark:text-orange-400 px-3 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Get AI help with your question"
                        >
                            {isGurujiThinking ? (
                                <>
                                    <SparkleIcon className="w-4 h-4 animate-spin" />
                                    <span>Thinking...</span>
                                </>
                            ) : (
                                <>
                                    <SparkleIcon className="w-4 h-4" />
                                    <span>Ask Guruji</span>
                                </>
                            )}
                        </button>

                        <button
                            onClick={onCreatePost}
                            disabled={isPosting || !newPostContent.trim()}
                            className="bg-primary-600 text-white text-xs font-bold py-2 px-6 rounded-full hover:bg-primary-700 disabled:bg-neutral-300 transition-all shadow-md hover:shadow-lg"
                        >
                            {isPosting ? 'Posting...' : 'Post'}
                        </button>
                    </div>
                </div>
            )}

            {/* Posts List */}
            {isLoading ? (
                <div className="flex justify-center py-10">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                </div>
            ) : posts.length === 0 ? (
                <div className="text-center py-10 bg-white dark:bg-neutral-800 rounded-3xl shadow-soft">
                    <p className="text-neutral-500">No posts yet. {viewingCircle ? 'Be the first!' : 'Join a circle to see posts.'}</p>
                </div>
            ) : (
                posts.map(post => {
                    const sourceCircle = post.circleId ? communityCircles.find(c => c.id === post.circleId) : null;
                    const isEditing = editingPostId === post._id;
                    const showComments = expandedComments.has(post._id);
                    const isGurujiPost = post.authorRole === "AI Mentor";

                    return (
                        <div key={post._id} className={`rounded-3xl p-5 shadow-soft transition-all ${isGurujiPost ? 'bg-orange-50/50 border border-orange-100 dark:bg-orange-900/10 dark:border-orange-800' : 'bg-white dark:bg-neutral-800'}`}>
                            {/* Header */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 shadow-sm ${isGurujiPost ? 'bg-gradient-to-br from-orange-400 to-red-500 text-white' : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600'}`}>
                                        {isGurujiPost ? <SparkleIcon className="w-5 h-5"/> : (post.authorName?.charAt(0).toUpperCase() || 'U')}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-neutral-900 dark:text-white text-sm flex items-center">
                                            {post.authorName}
                                            {post.isMine && <span className="ml-2 text-[10px] bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full">You</span>}
                                            {isGurujiPost && <span className="ml-2 text-[10px] bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full flex items-center">AI Mentor</span>}
                                        </h3>
                                        <div className="flex items-center space-x-2 text-xs text-neutral-500 dark:text-neutral-400">
                                            <span>{post.authorRole || 'Student'}</span>
                                            {sourceCircle && (
                                                <>
                                                    <span>•</span>
                                                    <span className="flex items-center bg-neutral-100 dark:bg-neutral-700 px-1.5 py-0.5 rounded text-[10px] font-semibold text-neutral-600 dark:text-neutral-300">
                                                        <span className="mr-1">{sourceCircle.icon}</span>
                                                        {t(sourceCircle.nameKey)}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {post.isMine && !isEditing && (
                                    <button onClick={() => startEdit(post)} className="text-neutral-400 hover:text-primary-600 p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                    </button>
                                )}
                            </div>

                            {/* Content Area */}
                            {isEditing ? (
                                <div className="mb-4">
                                    <textarea 
                                        className="w-full border rounded-xl p-2 text-sm focus:ring-2 focus:ring-primary-500"
                                        value={editContent}
                                        onChange={e => setEditContent(e.target.value)}
                                        rows={3}
                                    />
                                    <div className="flex justify-end gap-2 mt-2">
                                        <button onClick={cancelEdit} className="text-xs text-neutral-500 px-3 py-1">Cancel</button>
                                        <button onClick={() => saveEdit(post._id)} className="text-xs bg-primary-600 text-white px-3 py-1 rounded-lg">Save</button>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3 leading-relaxed whitespace-pre-wrap">
                                    {post.content}
                                </p>
                            )}

                            {/* Footer Actions */}
                            <div className="flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-700/50">
                                <button
                                    onClick={() => onLikePost(post._id)}
                                    className={`flex items-center space-x-1 text-sm font-medium transition-colors ${post.isLiked ? 'text-pink-500' : 'text-neutral-500 hover:text-pink-500'}`}
                                >
                                    {post.isLiked ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    )}
                                    <span>{post.likes}</span>
                                </button>

                                <button 
                                    onClick={() => toggleCommentSection(post._id)}
                                    className="flex items-center space-x-1 text-sm font-medium text-neutral-500 hover:text-primary-500 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                    <span>{post.comments ? post.comments.length : 0}</span>
                                </button>
                            </div>

                            {/* Comments Section */}
                            {showComments && (
                                <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-700">
                                    <div className="flex gap-2 mb-4">
                                        <input 
                                            type="text" 
                                            placeholder="Write a comment..." 
                                            className="flex-1 bg-neutral-50 dark:bg-neutral-700 rounded-full px-4 py-2 text-sm border-none focus:ring-1 focus:ring-primary-500 dark:text-white"
                                            value={commentingPostId === post._id ? commentContent : ''}
                                            onChange={e => setCommentContent(e.target.value)}
                                        />
                                        <button 
                                            onClick={() => submitComment(post._id)}
                                            disabled={!commentContent.trim()}
                                            className="text-primary-600 text-sm font-bold disabled:opacity-50"
                                        >
                                            Send
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        {post.comments && post.comments.length > 0 ? (
                                            post.comments.map((c, i) => (
                                                <div key={i} className="flex gap-2">
                                                    <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-600 shrink-0">
                                                        {c.authorName[0]}
                                                    </div>
                                                    <div className="bg-neutral-50 dark:bg-neutral-700/50 rounded-2xl rounded-tl-none p-2 px-3">
                                                        <p className="text-xs font-bold text-neutral-900 dark:text-white">{c.authorName}</p>
                                                        <p className="text-sm text-neutral-700 dark:text-neutral-300">{c.content}</p>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-xs text-neutral-400 italic text-center">No comments yet.</p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Feed;
