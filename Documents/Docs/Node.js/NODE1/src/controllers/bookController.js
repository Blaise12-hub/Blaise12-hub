const Book = require('../models/Bookregistration.js'); // Correct path

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.getAll();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching books', details: err.message });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.getById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching book', details: err.message });
    }
};

exports.createBook = async (req, res) => {
    const { Book_id, Book_title, Book_Author, Pub_year, Category_id } = req.body;
    try {
        const newBook = await Book.create(Book_id, Book_title, Book_Author, Pub_year, Category_id);
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ error: 'Error creating book', details: err.message });
    }
};

exports.updateBook = async (req, res) => {
    const { Book_id, Book_title, Book_Author, Pub_year, Category_id } = req.body;
    try {
        const updatedBook = await Book.update(req.params.id, Book_id, Book_title, Book_Author, Pub_year, Category_id);
        if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({ error: 'Error updating book', details: err.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.delete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
        res.json(deletedBook);
    } catch (err) {
        res.status(500).json({ error: 'Error deleting book', details: err.message });
    }
};







