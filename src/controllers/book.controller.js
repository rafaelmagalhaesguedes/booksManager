// src/controllers/book.controller.js
const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    res.status(500).json({ message: 'Error with connection!' });
  }
};

module.exports = {
  getAll,
};