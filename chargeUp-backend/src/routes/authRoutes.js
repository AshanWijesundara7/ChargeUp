// backend/src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// This creates the URL: http://localhost:5000/api/auth/register
// When someone visits this URL with data, run the 'registerUser' function.
router.post('/register', authController.registerUser);

module.exports = router;