const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  userId: { type: String, default: 'anonymous-user' }, 
  stationId: { type: String, required: true },
  startTime: { type: Date, default: Date.now },
  pricePerUnit: { type: Number, default: 30.00 }, // Matching your UI
  totalAmount: { type: Number, default: 0 },
  status: { type: String, enum: ['active', 'completed'], default: 'active' }
});

module.exports = mongoose.model('ChargingSession', sessionSchema);