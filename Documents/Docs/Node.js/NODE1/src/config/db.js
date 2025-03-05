const mysql = require('mysql');
require('dotenv').config(); // Load environment variables

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',  // Default to 'localhost' if not set
    user: process.env.DB_USER || 'root',       // Default to 'root' if not set
    password: process.env.DB_PASSWORD || '',   // Default to empty password
    database: process.env.DB_DATABASE || 'libraryms', // ✅ Use string for fallback
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected successfully');
});

module.exports = connection;
