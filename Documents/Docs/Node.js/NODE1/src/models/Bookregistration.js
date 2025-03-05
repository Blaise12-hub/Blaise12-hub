const db = require('../config/db'); // Ensure correct path

class Book {
    // Get all books
    static getAll() {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM books';
            db.query(query, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }

    // Get book by ID
    static getById(id) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM books WHERE id = ?';
            db.query(query, [id], (err, results) => {
                if (err) reject(err);
                else resolve(results.length ? results[0] : null);
            });
        });
    }

    // Create a new book
    static create(Book_id, Book_title, Book_Author, Pub_year, Category_id) {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO books (Book_id, Book_title, Book_Author, pub_year, Category_id) VALUES (?, ?, ?, ?, ?)';
            db.query(query, [Book_id, Book_title, Book_Author, Pub_year, Category_id], (err, results) => {
                if (err) reject(err);
                else resolve({ id: results.insertId, Book_id, Book_title, Book_Author, Pub_year, Category_id });
            });
        });
    }

    // Update a book by ID
    static update(id, Book_id, Book_title, Book_Author, Pub_year, Category_id) {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE books SET Book_id = ?, Book_title = ?, Book_Author = ?,Pub_year = ?, Category_id = ? WHERE id = ?';
            db.query(query, [Book_id, Book_title, Book_Author, Pub_year, Category_id, id], (err, results) => {
                if (err) reject(err);
                else resolve(results.affectedRows ? { id, Book_id, Book_title, Book_Author, Pub_year, Category_id } : null);
            });
        });
    }

    // Delete a book by ID
    static delete(id) {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM books WHERE id = ?';
            db.query(query, [id], (err, results) => {
                if (err) reject(err);
                else resolve(results.affectedRows ? { message: 'Book deleted successfully' } : null);
            });
        });
    }
}

module.exports = Book;
