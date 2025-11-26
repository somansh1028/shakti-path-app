
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  authorName: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Essential for "My Post" logic
  authorName: { type: String, required: true },
  authorRole: { type: String, default: 'Student' },
  content: { type: String, required: true },
  image: { type: String }, // Optional URL
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [commentSchema], // Embed comments directly
  circleId: { type: String, default: null }, // null = Public Feed
  createdAt: { type: Date, default: Date.now }
});

// Indexes for performance
postSchema.index({ circleId: 1, createdAt: -1 });
postSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Post', postSchema);
