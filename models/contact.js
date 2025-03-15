const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address'],
  },
  favoriteColor: {
    type: String,
    required: true,
    trim: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true, // Adds `createdAt` and `updatedAt` fields
});

// Create the Contact model
const Contact = mongoose.model('Contact', contactSchema);

// Export the Contact model
module.exports = Contact;