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

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);
    if (!book) return res.status(404).json({ message: 'Not found' });
    return res.status(200).json(book);
  } catch (e) {
    res.status(500).json({ message: 'Error with connection!' });
  }
};

const getByAuthor = async (req, res) => {
  try {
    const { author } = req.params;
    const book = await BookService.getByAuthor(author);
    if (!book) return res.status(404).json({ message: 'Not found' });
    return res.status(200).json(book);
  } catch (e) {
    res.status(500).json({ message: 'Error with connection!' });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await BookService.create(title, author, pageQuantity);
    return res.status(201).json(book);
  } catch (e) {
    res.status(500).json({ message: 'Error with connection!' });
  }
};

const update = async (req, res) => {
  try {
    const { title, author_id } = req.body;
    const { id } = req.params;
    const book = await BookService.update(id, title, author_id);
    return res.status(200).json(book);
  } catch (e) {
    res.status(500).json({ message: 'Error with connection!' });
  }
};

const exclude = async (req, res) => {
  try {
    const { id } = req.params;
    await BookService.exclude(id);
    res.status(200).json({ message: 'Deleted book!' });
  } catch (e) {
    res.status(500).json({ message: 'Error with connection!' });
  }
};

module.exports = {
  getAll,
  getById,
  getByAuthor,
  create,
  update,
  exclude,
};