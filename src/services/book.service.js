// src/services/books.service.js

const { Book } = require('../models');

/*
  This function uses Sequelize's findAll method to fetch all rows from the
  Books table It is equivalent to making the query: SELECT * FROM Books
  Order by title ASC
*/
const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
  });

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

/* 
  This function uses Sequelize's findOne method to fetch a single row from
  the Books table based on a specific column. It is equivalent to making the
  query: SELECT * FROM Books WHERE author = <author>
  Order by title ASC
*/
const getByAuthor = async (author) => {
  const books = await Book.findAll({
    where: { author },
    order: [['title', 'ASC']],
  });

  return book;
};

/* 
  This function uses Sequelize's create method to insert a new row into the
  Books table. It is equivalent to making the query: INSERT INTO Books
  (title, author_id) VALUES (<title>, <author_id>)
*/
const create = async (title, author, pageQuantity) => {
  const book = await Book.create({ title, author, pageQuantity });

  return book;
};

/* 
  This function uses Sequelize's update method to update a row from the
  Books table. It is equivalent to making the query: UPDATE Books SET
  title = <title>, author_id = <author_id> WHERE id = <id>

*/
const update = async (id, title, author_id) => {
  const book = await Book.update({ title, author_id }, { where: { id } });

  return book;
}

/* 
  This function uses Sequelize's destroy method to delete a row from the
  Books table. It is equivalent to making the query: DELETE FROM Books
  WHERE id = <id>
*/
const exclude = async (id) => {
  const book = await Book.destroy({ where: { id } });

  return book;
}

module.exports = {
  getAll,
  getById,
  getByAuthor,
  create,
  update,
  exclude,
};