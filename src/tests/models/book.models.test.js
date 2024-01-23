const { expect } = require('chai');
const { Book } = require('../../models');

describe('Book model tests', function () {
  it('should have a "title"', function () {
    const book = new Book();
    expect(book).to.have.property('title');
  });

  it('should have a "author"', function () {
    const book = new Book();
    expect(book).to.have.property('author');
  });

  it('should have a "pageQuantity"', function () {
    const book = new Book();
    expect(book).to.have.property('pageQuantity');
  });

  it('should have a "publisher"', function () {
    const book = new Book();
    expect(book).to.have.property('publisher');
  });
});