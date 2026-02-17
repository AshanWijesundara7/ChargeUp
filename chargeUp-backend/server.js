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





// ... keep your other imports ...
const authRoutes = require('./src/routes/authRoutes'); // <--- ADD THIS

// ... keep your app.use(express.json()) ...

// This tells the server: "Any URL starting with /api/auth goes to the authRoutes file"
app.use('/api/auth', authRoutes); // <--- ADD THIS

// ... keep your app.listen ...




const mongoose = require('mongoose');

// This tells the server to go grab the secret key from the .env file
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Vault Connected! 🔐'))
  .catch((err) => console.log('Vault Connection Failed:', err));