const data = require("./mockData");

const getAuthorIdByBookId = (bookId) =>
  parseInt(
    Object.entries(data.bookIdsByAuthorIds).find(([authorId, bookIds]) =>
      bookIds.includes(bookId)
    )[0],
    10
  );

// console.log("author ids by book ids: ", getAuthorIdByBookId(10));

// id = index + 1
const getBookById = (id) => ({
  ...data.books[id - 1],
  id,
  authorId: getAuthorIdByBookId(id)
});
const getAuthorById = (id) => ({
  ...data.authors[id - 1],
  id,
  booksIds: data.bookIdsByAuthorIds[id]
});
const getUserById = (id) => ({
  ...data.users[id - 1],
  id
});
const getAllBooks = () => data.books.map((_, index) => getBookById(index + 1));
const getAllAuthors = () =>
  data.authors.map((_, index) => getAuthorById(index + 1));
const getAllUsers = () => data.users.map((_, index) => getUserById(index + 1));

const db = {
  getAllBooks,
  getAllAuthors,
  getAllUsers,
  getBookById,
  getAuthorById,
  getUserById
};

module.exports = db;
