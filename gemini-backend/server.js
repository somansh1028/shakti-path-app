
console.log("--- Starting Gemini Backend Server (JWT Mode) ---");

const express = require('express');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');

// FIX: Use lowercase filenames for Linux compatibility
const User = require('./models/user');
const Post = require('./models/post');

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

// --- CORS CONFIGURATION (ROBUST) ---
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    // Allow any origin (Reflection)
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Explicitly handle Preflight (OPTIONS) requests for all routes
app.options('*', cors());

// INCREASED LIMIT TO 100MB to handle multiple high-res image uploads safely
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

// --- FAVICON FIX ---
app.get('/favicon.ico', (req, res) => res.status(204).end());

// --- DATABASE CONNECTION ---
if (DATABASE_URL) {
    const connectDB = async () => {
        try {
            await mongoose.connect(DATABASE_URL, { serverSelectionTimeoutMS: 5000 });
            console.log('✅ MongoDB Connected!');
            dbStatus = 'connected';
        } catch (err) {
            console.error('❌ MongoDB Connection Error:', err.message);
            dbStatus = 'error';
        }
    };
    connectDB();
    
    // Monitor DB connection events
    mongoose.connection.on('error', err => {
        console.error('MongoDB Runtime Error:', err);
        dbStatus = 'error';
    });
    mongoose.connection.on('disconnected', () => {
        console.warn('MongoDB Disconnected');
        dbStatus = 'disconnected';
    });
} else {
    console.warn("⚠️ No DATABASE_URL provided. App will run in limited mode.");
}

// --- AUTH MIDDLEWARE ---
const getUserFromToken = (req) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return null;
    try { return jwt.verify(token, JWT_SECRET); } catch (err) { return null; }
};

const ensureAuthenticated = async (req, res, next) => {
  try {
      const decoded = getUserFromToken(req);
      if (!decoded) return res.status(401).json({ error: 'Unauthorized' });
      
      if (dbStatus !== 'connected') { 
          req.user = { _id: decoded.id, email: decoded.email }; 
          return next(); 
      }
      
      const user = await User.findById(decoded.id).select('-password');
      if (!user) return res.status(403).json({ error: 'User not found' });
      
      req.user = user;
      next();
  } catch (err) {
      console.error("Auth Middleware Error:", err);
      return res.status(500).json({ error: 'Auth Processing Error' });
  }
};

// --- ROUTES ---
app.get('/', (req, res) => res.send('✅ Backend Running'));
app.get('/api/health', (req, res) => res.json({ server: 'running', dbConnection: dbStatus }));

// Auth Endpoints
app.post('/api/auth/register', async (req, res) => {
    if (dbStatus !== 'connected') return res.status(503).json({ error: 'Database not connected' });
    try {
        const { email, password } = req.body;
        if (await User.findOne({ email })) return res.status(400).json({ error: 'Email exists' });
        const hashedPassword = await bcrypt.hash(password, 10);
        await new User({ email, password: hashedPassword }).save();
        res.status(201).json({ message: 'Registered' });
    } catch (e) { 
        console.error("Register error:", e);
        res.status(500).json({ error: 'Error registering user' }); 
    }
});

app.post('/api/auth/login', async (req, res) => {
    if (dbStatus !== 'connected') return res.status(503).json({ error: 'Database not connected' });
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || !(await bcrypt.compare(req.body.password, user.password))) return res.status(401).json({ error: 'Invalid credentials' });
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user: { email: user.email, name: user.profile?.name || 'User' } });
    } catch (e) { 
        console.error("Login error:", e);
        res.status(500).json({ error: 'Error logging in' }); 
    }
});

// --- PROFILE ROUTES ---
app.get('/api/user/profile', ensureAuthenticated, async (req, res) => {
    if (dbStatus !== 'connected') return res.json({ name: 'Guest', city: '', skills: [] });
    res.json(req.user.profile || {});
});

app.put('/api/user/profile', ensureAuthenticated, async (req, res) => {
    if (dbStatus !== 'connected') return res.status(503).json({ error: 'No DB' });
    try {
        const { name, city, bio, skills, interests } = req.body;
        
        if (!req.user.profile) req.user.profile = {};
        
        if (name !== undefined) req.user.profile.name = name;
        if (city !== undefined) req.user.profile.city = city;
        if (bio !== undefined) req.user.profile.bio = bio;
        if (skills) req.user.profile.skills = skills;
        if (interests) req.user.profile.interests = interests;

        await req.user.save();
        res.json(req.user.profile);
    } catch (e) { 
        console.error("Profile update error:", e);
        res.status(500).json({ error: 'Failed to update profile' }); 
    }
});

// --- PREFERENCES ROUTES (REMINDERS) ---
app.get('/api/user/preferences', ensureAuthenticated, async (req, res) => {
    if (dbStatus !== 'connected') return res.json({});
    res.json(req.user.preferences || {});
});

app.put('/api/user/preferences', ensureAuthenticated, async (req, res) => {
    if (dbStatus !== 'connected') return res.status(503).json({ error: 'No DB' });
    try {
        const { dailyGoal, studyTime, reminderDays, notifications } = req.body;
        
        req.user.preferences = {
            dailyGoal: dailyGoal || 15,
            studyTime: studyTime || '18:00',
            reminderDays: reminderDays || [],
            notifications: notifications || { practice: true, streaks: true, community: false }
        };

        await req.user.save();
        res.json(req.user.preferences);
    } catch (e) { 
        console.error("Preferences update error:", e);
        res.status(500).json({ error: 'Failed to update preferences' }); 
    }
});


// --- CAREER HUB ROUTES (PROSPECTS) ---
app.get('/api/career/prospects', ensureAuthenticated, async (req, res) => {
    if (dbStatus !== 'connected') return res.json({ prospects: [] });
    res.json({ prospects: req.user.prospects || [] });
});

app.post('/api/career/prospects', ensureAuthenticated, async (req, res) => {
    if (dbStatus !== 'connected') return res.status(503).json({ error: 'No DB' });
    try {
        const { prospect } = req.body;
        // Simple dup check
        const exists = req.user.prospects.some(p => p.name === prospect.name);
        if (!exists) {
            req.user.prospects.push(prospect);
            await req.user.save();
        }
        res.json(req.user.prospects);
    } catch (e) { res.status(500).json({ error: 'Failed to add prospect' }); }
});

app.put('/api/career/prospects/:id', ensureAuthenticated, async (req, res) => {
    if (dbStatus !== 'connected') return res.status(503).json({ error: 'No DB' });
    try {
        const { status } = req.body;
        const prospect = req.user.prospects.find(p => p.id === req.params.id);
        if (prospect) {
            prospect.status = status;
            await req.user.save();
        }
        res.json(req.user.prospects);
    } catch (e) { res.status(500).json({ error: 'Failed to update prospect' }); }
});

app.delete('/api/career/prospects/:id', ensureAuthenticated, async (req, res) => {
    if (dbStatus !== 'connected') return res.status(503).json({ error: 'No DB' });
    try {
        req.user.prospects = req.user.prospects.filter(p => p.id !== req.params.id);
        await req.user.save();
        res.json(req.user.prospects);
    } catch (e) { res.status(500).json({ error: 'Failed to delete prospect' }); }
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
    } catch (e) { 
        console.error("Progress Fetch Error:", e);
        res.status(500).json({ error: 'Fetch progress failed' }); 
    }
});

app.post('/api/user/progress/sync', ensureAuthenticated, async (req, res) => {
    if (dbStatus !== 'connected') return res.status(503).json({ error: 'No DB' });
    try {
        const { points, completedLessons, completedQuizzes, completedCourses, badges, assignmentScores } = req.body;
        const user = req.user;
        if (!user.progress) user.progress = {};
        
        const currentPoints = user.progress.points || 0;
        const incomingPoints = points || 0;
        if (incomingPoints > currentPoints) {
            user.progress.points = incomingPoints;
        }
        
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
    // DEFENSIVE: If DB is not ready, return empty array instead of crashing
    if (dbStatus !== 'connected') {
        console.warn("DB disconnected, returning empty feed.");
        return res.json([]);
    }
    try {
        const currentUser = getUserFromToken(req);
        const { circleId } = req.query;
        let query = {};
        if (circleId && circleId !== 'undefined' && circleId !== 'null') query = { circleId };

        const posts = await Post.find(query).sort({ createdAt: -1 }).limit(50).lean();
        
        // Robust mapping to prevent 500 errors if data is dirty
        const formatted = posts.map(post => {
            try {
                return {
                    ...post,
                    _id: post._id.toString(),
                    likes: Array.isArray(post.likes) ? post.likes.length : 0,
                    isLiked: currentUser && Array.isArray(post.likes) 
                        ? post.likes.some(id => id && id.toString() === currentUser.id) 
                        : false,
                    isMine: currentUser && post.authorId 
                        ? post.authorId.toString() === currentUser.id 
                        : false,
                    commentCount: post.comments ? post.comments.length : 0
                };
            } catch (mapError) {
                console.warn("Skipping malformed post:", post._id);
                return null;
            }
        }).filter(p => p !== null);

        res.json(formatted);
    } catch (err) { 
        console.error("Post fetch error:", err);
        res.status(500).json({ error: 'Fetch failed' }); 
    }
});

app.post('/api/community/posts', ensureAuthenticated, async (req, res) => {
    if (dbStatus !== 'connected') return res.status(503).json({ error: 'No DB' });
    try {
        const { content, circleId, isGuruji } = req.body;
        
        let authorName = req.user.profile?.name || req.user.email.split('@')[0];
        let authorRole = 'Student';
        
        // Allow forcing "Guruji" persona if requested (could secure this more in prod)
        if (isGuruji) {
            authorName = "Guruji 🤖";
            authorRole = "AI Mentor";
        }

        const newPost = new Post({
            authorId: req.user._id,
            authorName: authorName,
            authorRole: authorRole,
            content,
            circleId: circleId || null,
            likes: [],
            comments: []
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) { 
        console.error("Post create error:", err);
        res.status(500).json({ error: 'Post failed' }); 
    }
});

app.put('/api/community/posts/:id', ensureAuthenticated, async (req, res) => {
    if (dbStatus !== 'connected') return res.status(503).json({ error: 'No DB' });
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
    if (dbStatus !== 'connected') return res.status(503).json({ error: 'No DB' });
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ error: 'Not found' });
        
        post.comments.push({ 
            userId: req.user._id, 
            authorName: req.user.profile?.name || req.user.email.split('@')[0], 
            content: req.body.content 
        });
        await post.save();
        res.json(post.comments);
    } catch (err) { res.status(500).json({ error: 'Comment failed' }); }
});

app.post('/api/community/posts/:id/like', ensureAuthenticated, async (req, res) => {
    if (dbStatus !== 'connected') return res.status(503).json({ error: 'No DB' });
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
    if (dbStatus !== 'connected') return res.status(503).json({ error: 'No DB' });
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

// --- COMMUNITY AI ROUTE (GURUJI) ---
app.post('/api/community/ask-guruji', ensureAuthenticated, async (req, res) => {
    if (!ai) return res.status(503).json({ error: 'AI Service missing key.' });
    try {
        const { mode, context, userQuestion } = req.body;
        // mode: 'answer' or 'starter'
        // context: { circleName: string, circleDesc: string }
        
        let prompt = "";
        if (mode === 'starter') {
            prompt = `You are "Guruji", a wise, friendly, and encouraging Indian community mentor. 
            You are managing a community circle called "${context.circleName}" (${context.circleDesc}).
            The group has been silent for a while.
            Generate a short, engaging, and relevant discussion starter question to wake up the group.
            Use emojis. Keep it warm and inviting. Do not sound robotic.
            Example: "Namaste everyone! 🌟 I was wondering, what is one challenge you faced in your business this week? Let's help each other!"`;
        } else {
            prompt = `You are "Guruji", a wise, friendly, and encouraging Indian community mentor.
            A student in the "${context.circleName}" circle has asked this question: "${userQuestion}".
            Please provide a helpful, concise, and actionable answer.
            Use emojis. Keep it professional but warm.`;
        }

        const result = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
        });
        
        res.json({ response: result.text });
    } catch (e) {
        console.error("Guruji AI Failed:", e);
        res.status(500).json({ error: 'Guruji is meditating (Error generating response).' });
    }
});

// --- AI ROUTE ---
app.post('/api/gemini/structured-generate', ensureAuthenticated, async (req, res) => {
    if (!ai) return res.status(503).json({ error: 'AI Service missing key.' });
    try {
        const { contents, responseSchema } = req.body;
        
        const config = {};
        // Only add responseSchema if it exists, and enforce JSON mime type
        if (responseSchema) {
            config.responseMimeType = "application/json";
            config.responseSchema = responseSchema;
        }

        // Use gemini-2.5-flash for broader support (including multimodal)
        const result = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: contents,
            config: config
        });
        res.json({ response: result.text });
    } catch (e) { 
        console.error("Gemini API Failed:", e);
        
        let error = 'AI Generation failed.';
        let details = e.message;

        // Sanitize Google GenAI error if possible
        try {
            // If message is a JSON string (e.g. "Error: [403] ..."), try to extract inner message
            const jsonStart = e.message.indexOf('{');
            const jsonEnd = e.message.lastIndexOf('}');
            if (jsonStart !== -1 && jsonEnd !== -1) {
                const jsonStr = e.message.substring(jsonStart, jsonEnd + 1);
                const parsed = JSON.parse(jsonStr);
                if (parsed.error && parsed.error.message) {
                    details = parsed.error.message;
                }
            }
        } catch (parseErr) {
            // If parsing fails, use original message
        }

        if (details && (details.includes('API key') || details.includes('403'))) {
            error = 'AI Configuration Error: API Key Invalid or Expired.';
        }

        res.status(500).json({ error, details }); 
    }
});

// --- GLOBAL ERROR HANDLER ---
// This prevents server crashes from unhandled errors in routes
app.use((err, req, res, next) => {
    console.error("Unhandled Server Error:", err.stack);
    if (!res.headersSent) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, '0.0.0.0', () => console.log(`✅ Server running on ${port}`));
