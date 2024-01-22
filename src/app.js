// src/app.js

const express = require('express');

const Book = require('./controllers/book.controller');

const app = express();

app.use(express.json());

// Route health check
app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Server is running!' });
});

// Route to list all books
app.get('/books', Book.getAll);

// Route to get a book by id
app.get('/books/:id', Book.getById);

// Route to create a new book
app.post('/books', Book.create);

module.exports = app;