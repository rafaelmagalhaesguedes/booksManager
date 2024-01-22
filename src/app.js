// src/app.js

const express = require('express');

const Book = require('./controllers/book.controller');

const app = express();

app.use(express.json());

// Route to list all books
app.get('/book', Book.getAll);

// Route to get a book by id
app.get('/book/:id', Book.getById);

// Route to create a new book
app.post('/book', Book.create);

module.exports = app;