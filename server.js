const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const donationRoutes = require('./routes/donationRoutes');
app.use('/api', donationRoutes);

// MongoDB connection
console.log('Connecting to MongoDB...');
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

// Test route
app.get('/', (req, res) => {
  res.send('Donate Bangladesh Backend is Running');
});

// ❌ REMOVE app.listen (Vercel handles it automatically)

// ✅ EXPORT the app for Vercel
module.exports = app;
