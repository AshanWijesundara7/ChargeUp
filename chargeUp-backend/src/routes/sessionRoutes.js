const express = require('express');
const router = express.Router();
const ChargingSession = require('../models/chargingsession');

// Start a new session
router.post('/start', async (req, res) => {
  try {
    const newSession = new ChargingSession({ stationId: 'EVOCK-01' });
    await newSession.save();
    res.status(201).json(newSession);
  } catch (err) {
    res.status(500).json({ error: 'Failed to start session' });
  }
});

// Get live updates for a session
router.get('/:id', async (req, res) => {
  try {
    const session = await ChargingSession.findById(req.params.id);
    if (!session) return res.status(404).json({ error: 'Session not found' });

    // Calculate time elapsed
    const now = new Date();
    const diffMs = now - session.startTime;
    const diffMins = Math.floor(diffMs / 60000); // Convert to minutes
    
    // Calculate amount (Assuming 1 unit per minute for simulation)
    const currentAmount = diffMins * session.pricePerUnit;

    res.json({
      timeElapsedMins: diffMins,
      amount: currentAmount,
      pricePerUnit: session.pricePerUnit,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch updates' });
  }
});

module.exports = router;