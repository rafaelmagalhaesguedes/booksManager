// src/services/books.service.js

const { Book } = require('../models');

/*
    This function uses Sequelize's findAll method to fetch all rows from the
    Books table It is equivalent to making the query: SELECT * FROM Books
*/
const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

module.exports = {
  getAll,
};