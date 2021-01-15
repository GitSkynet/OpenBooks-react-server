const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  year: String,
  description: String,
  writer: String,
  poster: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;