/* 
  Sequelize test helpers is a package that provides a set of functions that
*/
const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
  } = require('sequelize-test-helpers');
  
  const BookModel = require('../../models/book.model');
  
  describe('Book Model Tests', () => {
    const Book = BookModel(sequelize, dataTypes);
    const book = new Book();
  
    describe('should have name "Book"', () => {
      checkModelName(Book)('Book');
    });
  
    describe('should have a properties "title", "author", "pageQuantity" e "publisher"', () => {
      ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
    });
  });