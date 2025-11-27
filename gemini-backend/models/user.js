
const mongoose = require('mongoose');

const prospectSchema = new mongoose.Schema({
  id: String, 
  name: String,
  businessType: String,
  status: { type: String, default: 'Lead' },
  contact: {
    phone: String,
    email: String,
    website: String
  },
  notes: String,
  addedAt: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  passwordResetToken: String,
  passwordResetExpires: Date,
  joinedCircles: [{ type: String }],
  
  profile: {
    name: { type: String, default: 'Learner' },
    city: { type: String, default: '' },
    bio: { type: String, default: '' },
    skills: [{ type: String }],
    interests: [{ type: String }],
    avatar: { type: String }
  },

  preferences: {
    dailyGoal: { type: Number, default: 15 },
    studyTime: { type: String, default: '18:00' },
    reminderDays: [{ type: String }],
    notifications: {
      practice: { type: Boolean, default: true },
      streaks: { type: Boolean, default: true },
      community: { type: Boolean, default: false }
    }
  },

  prospects: [prospectSchema],

  progress: {
    points: { type: Number, default: 0 },
    completedLessons: [{ type: String }],
    completedQuizzes: [{ type: String }],
    completedCourses: [{ type: String }],
    assignmentScores: { type: Map, of: Number, default: {} },
    badges: [{
        id: String,
        nameKey: String,
        icon: String,
        dateEarned: { type: Date, default: Date.now }
    }]
  }
});

module.exports = mongoose.model('User', userSchema);
