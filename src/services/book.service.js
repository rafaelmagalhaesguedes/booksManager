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

/* 
    This function uses Sequelize's findByPk method to fetch a single row from
    the Books table based on its primary key (id). It is equivalent to making
    the query: SELECT * FROM Books WHERE id = <id>
*/
const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

module.exports = {
  getAll,
  getById,
};