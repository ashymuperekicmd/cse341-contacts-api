const express = require('express');
const mongodb = require('./data/database');

const app = express();
const port = process.env.PORT || 3000;

// Verify dotenv is configured at the very top
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', require('./routes'));

// Initialize database
mongodb.initDb((err) => {
    if (err) {
        console.error('Failed to initialize database:', err);
        process.exit(1);
    } else {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
});