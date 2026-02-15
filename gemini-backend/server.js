
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
let dbError = null; // Capture specific connection errors
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

// --- DATABASE CONNECTION (ROBUST FIX) ---
if (DATABASE_URL) {
    const connectDB = async (retries = 5) => {
        while (retries > 0) {
            try {
                console.log(`[DB] Attempting connection... (Retries left: ${retries})`);
                
                // Mongoose 6+ / 8+ Connection Options for Stability
                await mongoose.connect(DATABASE_URL, { 
                    serverSelectionTimeoutMS: 30000, // Increase to 30 seconds
                    socketTimeoutMS: 45000,          // Keep sockets alive longer
                    family: 4                        // Force IPv4 (Crucial for Render <-> Atlas)
                });

                console.log('✅ MongoDB Connected!');
                dbStatus = 'connected';
                dbError = null;
                break; // Connected successfully, exit loop
            } catch (err) {
                console.error(`❌ MongoDB Connection Error:`, err.message);
                
                let msg = err.message;
                // Add helpful hints for common errors
                if (msg.includes('bad auth') || msg.includes('Authentication failed')) {
                    msg += ' (HINT: Check your DB Password in Render Environment Variables. Ensure special chars are URL encoded)';
                } else if (msg.includes('querySrv') || msg.includes('ENOTFOUND')) {
                    msg += ' (HINT: DNS Error. The app cannot find the database address. Check DATABASE_URL)';
                } else if (msg.includes('Invalid scheme')) {
                    msg += ' (HINT: Ensure string starts with mongodb+srv://)';
                }

                dbStatus = 'error';
                dbError = msg; 
                retries -= 1;
                if (retries === 0) break;
                // Wait 5 seconds before retrying
                await new Promise(res => setTimeout(res, 5000));
            }
        }
    };
    connectDB();
    
    // Monitor DB connection events
    mongoose.connection.on('error', err => {
        console.error('MongoDB Runtime Error:', err);
        dbStatus = 'error';
        dbError = err.message;
    });
    mongoose.connection.on('disconnected', () => {
     console.warn('⚠️ MongoDB Disconnected. Attempting to reconnect...');
        dbStatus = 'disconnected';
    });
    mongoose.connection.on('reconnected', () => {
        console.log('✅ MongoDB Reconnected!');
        dbStatus = 'connected';
    });
} else {
    console.warn("⚠️ No DATABASE_URL provided. App will run in limited mode.");
    dbStatus = 'error';
    dbError = "DATABASE_URL is missing in Environment Variables.";
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

// Improved Health Check: Returns detailed DB status
app.get('/api/health', (req, res) => res.json({ 
    server: 'running', 
    dbConnection: dbStatus,
    dbError: dbError // Send specific error to frontend
}));

// --- CONFIG ROUTE (Safe proxy for frontend voice) ---
// This allows the frontend to fetch the API key securely for the Live Client
app.get('/api/config/voice-key', ensureAuthenticated, (req, res) => {
    if (!API_KEY) return res.status(503).json({ error: 'Server API Key not configured' });
    res.json({ key: API_KEY });
});

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
        const { email, password } = req.body;
        let user = await User.findOne({ email });

        // --- MOCK GOOGLE LOGIN SUPPORT ---
        // If the frontend sends the specific google mock password, we allow it.
        // In a production app, you would verify the OAuth token from Google here.
        if (password === 'google-mock-password') {
            if (!user) {
                // Auto-register demo google user if they don't exist
                user = new User({ 
                    email, 
                    password: await bcrypt.hash('google-placeholder-secret', 10), 
                    profile: { name: 'Google User' } 
                });
                await user.save();
            }
        } else {
            // Standard Password Check
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
        }
        
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
// Simple in-memory cache to prevent 429 errors from multiple users
const starterCache = {}; // { circleName: { text: "...", timestamp: 12345 } }

app.post('/api/community/ask-guruji', ensureAuthenticated, async (req, res) => {
    if (!ai) return res.status(503).json({ error: 'AI Service missing key.' });
    try {
        const { mode, context, userQuestion } = req.body;
        // mode: 'answer' or 'starter'
        // context: { circleName: string, circleDesc: string }
        
        if (mode === 'starter') {
            const cacheKey = context.circleName;
            const now = Date.now();
            // 1 Hour Cache for starter questions
            if (starterCache[cacheKey] && (now - starterCache[cacheKey].timestamp < 3600000)) { 
                 return res.json({ response: starterCache[cacheKey].text });
            }
        }

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

        // Use 'gemini-flash-lite-latest' for higher throughput/lower cost for general chat
        const result = await ai.models.generateContent({
            model: 'gemini-flash-lite-latest',
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
        });
        
        const responseText = result.text;

        if (mode === 'starter') {
            starterCache[context.circleName] = { text: responseText, timestamp: Date.now() };
        }
        
        res.json({ response: responseText });
    } catch (e) {
        console.error("Guruji AI Failed:", e);
        res.status(500).json({ error: 'Guruji is meditating (Error generating response).' });
    }
});

// --- LESSON CHAT AI ROUTE (CONTEXT AWARE GURUJI) ---
app.post('/api/learn/chat', ensureAuthenticated, async (req, res) => {
    if (!ai) return res.status(503).json({ error: 'AI Service missing key.' });
    
    // Set headers for Server-Sent Events (SSE)
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    try {
        const { history, message, context, userLanguage } = req.body;
        
        const systemInstruction = `You are Guruji, a friendly, patient, and wise tutor for rural Indian students.
        
        Current User Context:
        The student is currently working on: 
        ${context ? `"${context.substring(0, 10000)}"` : "General learning"}
        User Language: ${userLanguage}
        
        Instructions:
        1. If the user asks about an Assignment, HELP them understand the task, clarify the criteria, or give creative inspiration.
        2. CRITICAL: Do NOT complete the assignment for them. Do not write the full essay, design the final image, or provide the exact file they need to submit. Guide them to do it themselves.
        3. If the user asks about a Lesson, explain the concepts simply.
        4. Keep answers short, encouraging, and easy to understand.
        5. Use emojis.
        6. Speak in the requested User Language (${userLanguage}).
        7. Do not lecture; guide them.`;

        // FILTER OUT EMPTY MESSAGES to prevent 400 Bad Request from Gemini
        const chatHistory = history
            .filter(msg => msg.text && msg.text.trim() !== '')
            .map(msg => ({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.text }]
            }));

        // Add the new message
        if (message && message.trim() !== '') {
            chatHistory.push({
                role: 'user',
                parts: [{ text: message }]
            });
        } else {
             // If message is empty for some reason, ignore and rely on history or just fail gently
             res.write(`data: ${JSON.stringify({ error: "Empty message." })}\n\n`);
             res.end();
             return;
        }

        // Use 'gemini-flash-lite-latest' for the chat to save quota
        const result = await ai.models.generateContentStream({
            model: 'gemini-flash-lite-latest',
            contents: chatHistory,
            config: {
                systemInstruction: systemInstruction
            }
        });

        // Use the response as an async iterable directly
        for await (const chunk of result) {
            const chunkText = chunk.text; // Access text property directly
            if (chunkText) {
                // Send data in SSE format
                res.write(`data: ${JSON.stringify({ text: chunkText })}\n\n`);
            }
        }
        
        res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
        res.end();

    } catch (e) {
        console.error("Lesson Chat Failed:", e);
        // Clean error message for user
        const safeError = e.message?.includes('429') ? "Guruji is busy (Quota Limit). Please wait a moment." : "Guruji is having trouble connecting.";
        res.write(`data: ${JSON.stringify({ error: safeError })}\n\n`);
        res.end();
    }
});

// --- AI ROUTE (Structured) ---
app.post('/api/gemini/structured-generate', ensureAuthenticated, async (req, res) => {
    if (!ai) return res.status(503).json({ error: 'AI Service missing key.' });
    try {
        const { contents, responseSchema, location } = req.body;
        
        // --- REAL DATA GROUNDING LOGIC ---
        // DEFAULT: Use 'gemini-flash-lite-latest' for all standard text/structured tasks to save quota.
        // EXCEPTION: If 'location' is provided (Gig Finder), we MUST use 'gemini-2.5-flash' to access Google Maps tools.
        
        let modelToUse = 'gemini-flash-lite-latest';
        let tools = [];

        // Rule: Maps grounding is only supported in Gemini 2.5 series models.
        if (location) {
            console.log(`📍 Using Google Maps Grounding via Gemini 2.5. Loc: ${JSON.stringify(location)}`);
            modelToUse = 'gemini-2.5-flash';
            tools = [{ googleMaps: {} }];
        }

        const config = {
            temperature: 0.1 // Keep it deterministic for structured data
        };
        
        if (tools.length > 0) {
            config.tools = tools;
            // NOTE: responseSchema is NOT allowed with googleMaps tool.
        } else if (responseSchema) {
            config.responseMimeType = "application/json";
            config.responseSchema = responseSchema;
        }

        const result = await ai.models.generateContent({
            model: modelToUse,
            contents: contents,
            config: config
        });
        
        // Extract Grounding Metadata if available (URLs, map links)
        let groundingMetadata = null;
        if (result.candidates && result.candidates[0] && result.candidates[0].groundingMetadata) {
             groundingMetadata = result.candidates[0].groundingMetadata;
        }

        res.json({ 
            response: result.text,
            groundingMetadata: groundingMetadata
        });

    } catch (e) { 
        console.error("Gemini API Failed:", e);
        
        let error = 'AI Generation failed.';
        let details = e.message;

        try {
            const jsonStart = e.message.indexOf('{');
            const jsonEnd = e.message.lastIndexOf('}');
            if (jsonStart !== -1 && jsonEnd !== -1) {
                const jsonStr = e.message.substring(jsonStart, jsonEnd + 1);
                const parsed = JSON.parse(jsonStr);
                if (parsed.error && parsed.error.message) {
                    details = parsed.error.message;
                }
            }
        } catch (parseErr) {}

        const status = (e.message.includes('429')) ? 429 : 500;
        
        if (details && (details.includes('API key') || details.includes('403'))) {
            error = 'AI Configuration Error: API Key Invalid or Expired.';
        } else if (status === 429) {
            error = 'Quota Exceeded. Please wait a moment and try again.';
        }

        res.status(status).json({ error, details }); 
    }
});

// --- GLOBAL ERROR HANDLER ---
app.use((err, req, res, next) => {
    console.error("Unhandled Server Error:", err.stack);
    if (!res.headersSent) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, '0.0.0.0', () => console.log(`✅ Server running on ${port}`));
