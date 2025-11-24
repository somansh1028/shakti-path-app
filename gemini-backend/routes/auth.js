// gemini-backend/routes/auth.js

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/User');

const router = express.Router();
const JWT_SECRET = process.env.SESSION_SECRET;

// POST /api/auth/register
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Please enter all fields.' });
    
    try {
        if (await User.findOne({ email: email.toLowerCase() })) {
            return res.status(400).json({ error: 'Email already exists.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await new User({ email: email.toLowerCase(), password: hashedPassword }).save();
        res.status(201).json({ message: 'User registered successfully.' });
    } catch (err) {
        res.status(500).json({ error: 'Server error during registration.' });
    }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Please enter all fields.' });

    try {
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }
        
        const payload = { id: user._id, email: user.email };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ 
            message: 'Logged in successfully.', 
            token, 
            user: { email: user.email } 
        });
    } catch (err) {
        res.status(500).json({ error: 'Server error during login.' });
    }
});

// POST /api/auth/forgot-password
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(200).json({ message: 'If an account with that email exists, a password reset link has been sent.' });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        
        user.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        user.passwordResetExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        const resetURL = `http://localhost:8080/reset-password/${resetToken}`;

        console.log('--- PASSWORD RESET LINK (FOR DEV ONLY) ---');
        console.log(`User: ${user.email}`);
        console.log(`Reset Link: ${resetURL}`);
        console.log('------------------------------------------');
        
        res.status(200).json({ message: 'If an account with that email exists, a password reset link has been sent.' });

    } catch (error) {
        console.error('Forgot Password Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

// NEW: POST /api/auth/reset-password/:token
router.post('/reset-password/:token', async (req, res) => {
    try {
        // Hash the token from the URL so we can find it in the database
        const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

        // Find the user with a matching, unexpired token
        const user = await User.findOne({
            passwordResetToken: hashedToken,
            passwordResetExpires: { $gt: Date.now() } // Check that the token has not expired
        });

        if (!user) {
            return res.status(400).json({ error: 'Password reset token is invalid or has expired.' });
        }

        // Set the new password
        if (!req.body.password) {
             return res.status(400).json({ error: 'Password is required.' });
        }
        user.password = await bcrypt.hash(req.body.password, 10);
        
        // Clear the reset token fields so it can't be used again
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        
        await user.save();

        res.status(200).json({ message: 'Password has been updated successfully.' });

    } catch (error) {
        console.error('Reset Password Error:', error);
        res.status(500).json({ error: 'An error occurred while resetting the password.' });
    }
});


module.exports = router;