const mongoose = require('mongoose');

// Define the Booking schema
const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  guests: { type: Number, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
}, { timestamps: true });

// Create the Booking model
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
