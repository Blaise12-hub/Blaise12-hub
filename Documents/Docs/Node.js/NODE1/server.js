 require('dotenv').config();
const express = require('express');
const cors = require('cors');
 const bookRoutes = require('./src/routes/bookRoute.js');

const db = require('./src/config/db.js');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/books', bookRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});


