const Book = require('../models/Book');

// GET /api/books - Retrieve all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

// POST /api/books - Add a new book
exports.addBook = async (req, res) => {
  try {
    const { title, author, description, addedBy } = req.body;
    const newBook = new Book({ title, author, description, addedBy });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add book' });
  }
};

// PUT /api/books/:id/upvote - Upvote a book
exports.upvoteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    book.upvotes += 1;
    await book.save();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Failed to upvote book' });
  }
};

// DELETE /api/books/:id - Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
};
