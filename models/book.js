const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  book_title: String,
  book_year: String,
  description: String,
  poster: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Book = mongoose.model('Book', bookSchema);

createBook = async () =>{
    const book_title = "La sombra del viento"
    const book_year = "2002"
    const description = "Una descripción random para probar"
    await Book.create({ book_title, book_year, description})
    console.log('BOOK TITLE', book_title)
} 

module.exports = Book;