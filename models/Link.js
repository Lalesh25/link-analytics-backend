const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  timestamp: Date,
  ip: String,
  userAgent: String,
});

const linkSchema = new mongoose.Schema({
  userId: String,
  originalUrl: String,
  shortCode: String,
  customAlias: String,
  expirationDate: Date,
  createdAt: { type: Date, default: Date.now },
  clicks: { type: Number, default: 0 },
  analytics: [analyticsSchema],
});

module.exports = mongoose.model('Link', linkSchema);
