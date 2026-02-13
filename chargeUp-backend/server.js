// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// 1. Load your secret variables
dotenv.config();

const app = express();

// 2. Middleware
app.use(cors()); // Allows Frontend to connect
app.use(express.json()); // Allows server to read JSON data

// 3. Simple Test Route
app.get('/', (req, res) => {
  res.send('ChargeUp Backend is Running! ⚡');
});

// 4. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is purring on port ${PORT}`);
});