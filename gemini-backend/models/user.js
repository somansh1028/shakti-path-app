
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  passwordResetToken: String,
  passwordResetExpires: Date,
  joinedCircles: [{ type: String }], // Array of Circle IDs
  
  // --- Learning Progress Persistence ---
  progress: {
    points: { type: Number, default: 0 },
    completedLessons: [{ type: String }], // Array of Lesson IDs
    completedQuizzes: [{ type: String }], // Array of Quiz IDs
    completedCourses: [{ type: String }], // Array of Course IDs
    assignmentScores: { type: Map, of: Number, default: {} }, // CourseID -> Score
    badges: [{
        id: String,
        nameKey: String,
        icon: String,
        dateEarned: { type: Date, default: Date.now }
    }]
  }
});

module.exports = mongoose.model('User', userSchema);
