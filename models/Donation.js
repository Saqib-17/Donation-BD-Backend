// backend/models/donation.js

const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema(
  {
    causeId: {
      type: Number,
      required: true,
    },
    causeName: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
