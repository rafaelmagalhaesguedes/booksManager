// src/app.js

const express = require('express');

const Book = require('./controllers/book.controller');

const app = express();

app.use(express.json());

app.get('/book', Book.getAll);

module.exports = app;