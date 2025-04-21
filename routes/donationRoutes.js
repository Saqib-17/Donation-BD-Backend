// backend/routes/donationRoutes.js

const express = require('express');
const router = express.Router();
const Donation = require('../models/donation');

// POST: Create a new donation
router.post('/donate', async (req, res) => {
  try {
    const { causeId, causeName, amount } = req.body;

    if (!causeId || !causeName || !amount) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const donation = new Donation({
      causeId,
      causeName,
      amount,
    });

    await donation.save();
    console.log('🔔 Donation saved:', donation);

    res.status(201).json({ message: '✅ Donation saved successfully!', donation });
  } catch (err) {
    console.error('❌ Error saving donation:', err.message);
    res.status(500).json({ message: '❌ Error saving donation', error: err.message });
  }
});

// GET: Fetch all donation history
router.get('/donations', async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.status(200).json(donations);
  } catch (err) {
    console.error('❌ Error fetching donations:', err.message);
    res.status(500).json({ message: '❌ Error fetching donations', error: err.message });
  }
});

module.exports = router;
