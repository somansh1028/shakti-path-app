
console.log("--- Starting Gemini Backend Server (JWT Mode) ---");

const express = require('express');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('./models/User');
const Post = require('./models/Post');

const app = express();
// Render assigns a port automatically via process.env.PORT
const port = process.env.PORT || 3001;

// --- CONFIG ---
const API_KEY = process.env.API_KEY;
const DATABASE_URL = process.env.DATABASE_URL;
const SESSION_SECRET = process.env.SESSION_SECRET;
const JWT_SECRET = SESSION_SECRET || 'fallback_dev_secret';

let dbStatus = 'disconnected';
let ai = null;
if (API_KEY) ai = new GoogleGenAI({ apiKey: API_KEY });

app.use(cors({ origin: true, credentials: true }));
// INCREASED LIMIT TO 100MB to handle multiple high-res image uploads safely
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

if (DATABASE_URL) {
    mongoose.connect(DATABASE_URL, { serverSelectionTimeoutMS: 5000 })
      .then(() => { console.log('✅ MongoDB Connected!'); dbStatus = 'connected'; })
      .catch(err => { console.error('❌ MongoDB Error:', err.message); dbStatus = 'error'; });
}

// --- AUTH MIDDLEWARE ---
const getUserFromToken = (req) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return null;
    try { return jwt.verify(token, JWT_SECRET); } catch (err) { return null; }
};

const ensureAuthenticated = async (req, res, next) => {
  const decoded = getUserFromToken(req);
  if (!decoded) return res.status(401).json({ error: 'Unauthorized' });
  if (dbStatus !== 'connected') { req.user = { _id: decoded.id, email: decoded.email }; return next(); }
  try {
      const user = await User.findById(decoded.id).select('-password');
      if (!user) return res.status(403).json({ error: 'User not found' });
      req.user = user;
      next();
  } catch (err) { return res.status(500).json({ error: 'Auth DB Error' }); }
};

// --- ROUTES ---
app.get('/', (req, res) => res.send('✅ Backend Running'));
app.get('/api/health', (req, res) => res.json({ server: 'running', dbConnection: dbStatus }));

// Auth Endpoints
app.post('/api/auth/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (await User.findOne({ email })) return res.status(400).json({ error: 'Email exists' });
        const hashedPassword = await bcrypt.hash(password, 10);
        await new User({ email, password: hashedPassword }).save();
        res.status(201).json({ message: 'Registered' });
    } catch (e) { res.status(500).json({ error: 'Error' }); }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || !(await bcrypt.compare(req.body.password, user.password))) return res.status(401).json({ error: 'Invalid' });
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user: { email: user.email } });
    } catch (e) { res.status(500).json({ error: 'Error' }); }
});

// Progress
app.get('/api/user/progress', ensureAuthenticated, async (req, res) => {
    if (dbStatus !== 'connected') return res.json({ points: 0, completedLessons: [], completedQuizzes: [], completedCourses: [], badges: [], assignmentScores: {} });
    try {
        const p = req.user.progress || {};
        res.json({
            points: p.points || 0,
            completedLessons: p.completedLessons || [],
            completedQuizzes: p.completedQuizzes || [],
            completedCourses: p.completedCourses || [],
            badges: p.badges || [],
            assignmentScores: p.assignmentScores || {}
        });
    } catch (e) { res.status(500).json({ error: 'Fetch progress failed' }); }
});

app.post('/api/user/progress/sync', ensureAuthenticated, async (req, res) => {
    if (dbStatus !== 'connected') return res.status(503).json({ error: 'No DB' });
    try {
        const { points, completedLessons, completedQuizzes, completedCourses, badges, assignmentScores } = req.body;
        const user = req.user;
        if (!user.progress) user.progress = {};
        
        user.progress.points = points;
        
        const mergeUnique = (current, incoming) => {
            const set = new Set(current || []);
            if (incoming) incoming.forEach(i => set.add(i));
            return Array.from(set);
        };

        user.progress.completedLessons = mergeUnique(user.progress.completedLessons, completedLessons);
        user.progress.completedQuizzes = mergeUnique(user.progress.completedQuizzes, completedQuizzes);
        user.progress.completedCourses = mergeUnique(user.progress.completedCourses, completedCourses);

        if (badges && Array.isArray(badges)) {
            if (!user.progress.badges) user.progress.badges = [];
            badges.forEach(newBadge => {
                if (!user.progress.badges.some(b => b.id === newBadge.id)) {
                    user.progress.badges.push(newBadge);
                }
            });
        }
        
        if (assignmentScores) {
            if (!user.progress.assignmentScores) user.progress.assignmentScores = new Map();
            Object.keys(assignmentScores).forEach(courseId => {
                user.progress.assignmentScores.set(courseId, assignmentScores[courseId]);
            });
        }

        await user.save();
        res.json(user.progress);
    } catch (e) { console.error(e); res.status(500).json({ error: 'Sync failed' }); }
});

// Community
app.get('/api/community/posts', async (req, res) => {
    try {
        const currentUser = getUserFromToken(req);
        const { circleId } = req.query;
        let query = {};
        if (circleId && circleId !== 'undefined' && circleId !== 'null') query = { circleId };

        const posts = await Post.find(query).sort({ createdAt: -1 }).limit(50).lean();
        const formatted = posts.map(post => ({
            ...post,
            likes: post.likes ? post.likes.length : 0,
            isLiked: currentUser && post.likes ? post.likes.some(id => id.toString() === currentUser.id) : false,
            isMine: currentUser && post.authorId && post.authorId.toString() === currentUser.id,
            commentCount: post.comments ? post.comments.length : 0
        }));
        res.json(formatted);
    } catch (err) { res.status(500).json({ error: 'Fetch failed' }); }
});

app.post('/api/community/posts', ensureAuthenticated, async (req, res) => {
    try {
        const { content, circleId } = req.body;
        const newPost = new Post({
            authorId: req.user._id,
            authorName: req.user.email.split('@')[0],
            content,
            circleId: circleId || null,
            likes: [],
            comments: []
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) { res.status(500).json({ error: 'Post failed' }); }
});

app.put('/api/community/posts/:id', ensureAuthenticated, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ error: 'Not found' });
        if (post.authorId.toString() !== req.user._id.toString()) return res.status(403).json({ error: 'Not allowed' });
        
        post.content = req.body.content;
        await post.save();
        res.json(post);
    } catch (err) { res.status(500).json({ error: 'Edit failed' }); }
});

app.post('/api/community/posts/:id/comments', ensureAuthenticated, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ error: 'Not found' });
        if (post.authorId.toString() === req.user._id.toString()) return res.status(400).json({ error: 'Cannot comment on own post' });

        post.comments.push({ userId: req.user._id, authorName: req.user.email.split('@')[0], content: req.body.content });
        await post.save();
        res.json(post.comments);
    } catch (err) { res.status(500).json({ error: 'Comment failed' }); }
});

app.post('/api/community/posts/:id/like', ensureAuthenticated, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ error: 'Not found' });
        
        const userId = req.user._id;
        const idx = post.likes.indexOf(userId);
        let isLiked = false;
        if (idx === -1) { post.likes.push(userId); isLiked = true; }
        else { post.likes.splice(idx, 1); isLiked = false; }
        
        await post.save();
        res.json({ likes: post.likes.length, isLiked });
    } catch (err) { res.status(500).json({ error: 'Like failed' }); }
});

app.get('/api/community/user-circles', ensureAuthenticated, (req, res) => {
    res.json({ joinedCircles: req.user.joinedCircles || [] });
});

app.post('/api/community/circles/:id/join', ensureAuthenticated, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        const circleId = req.params.id;
        if (!user.joinedCircles) user.joinedCircles = [];
        const idx = user.joinedCircles.indexOf(circleId);
        let joined = false;
        if (idx === -1) { user.joinedCircles.push(circleId); joined = true; }
        else { user.joinedCircles.splice(idx, 1); joined = false; }
        await user.save();
        res.json({ joined, joinedCircles: user.joinedCircles });
    } catch (e) { res.status(500).json({ error: 'Join failed' }); }
});

// --- AI ROUTE ---
app.post('/api/gemini/structured-generate', ensureAuthenticated, async (req, res) => {
    if (!ai) return res.status(503).json({ error: 'AI Service missing key.' });
    try {
        // Use gemini-2.5-flash for broader support (including multimodal)
        const result = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: req.body.contents,
            config: { 
                responseMimeType: req.body.responseSchema ? "application/json" : "text/plain", 
                responseSchema: req.body.responseSchema 
            }
        });
        res.json({ response: result.text });
    } catch (e) { 
        console.error("Gemini API Failed:", e);
        res.status(500).json({ error: 'AI Generation failed.', details: e.message }); 
    }
});

app.listen(port, '0.0.0.0', () => console.log(`✅ Server running on ${port}`));
