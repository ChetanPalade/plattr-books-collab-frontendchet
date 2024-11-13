const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, default: '' },
  upvotes: { type: Number, default: 0 },
  addedBy: { type: String, default: 'Anonymous' },
});

module.exports = mongoose.model('Book', bookSchema);
