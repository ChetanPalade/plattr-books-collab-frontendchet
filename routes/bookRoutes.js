const express = require('express');
const { getBooks, addBook, upvoteBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();

router.get('/', getBooks); // GET /api/books
router.post('/', addBook); // POST /api/books
router.put('/:id/upvote', upvoteBook); // PUT /api/books/:id/upvote
router.delete('/:id', deleteBook); // DELETE /api/books/:id

module.exports = router;
