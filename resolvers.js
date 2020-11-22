const resolvers = {
  Book: {
    // title: (parent) => parent.title.toUpperCase(),
    author: (book, __, { db }) => db.getAuthorById(book.authorId),
    cover: (book) => ({
      path: book.coverPath
    })
  },
  Author: {
    books: (author, __, { db }) => author.booksIds.map(db.getBookById),
    photo: (author) => ({
      path: author.photoPath
    })
  },
  Image: {
    url: (image, __, { assetsBaseUrl }) => assetsBaseUrl + image.path
  },
  Query: {
    // (rootValue, args, context, info)
    books: (_, __, { db }) => db.getAllBooks(),
    authors: (_, __, { db }) => db.getAllAuthors(),
    users: (_, __, { db }) => db.getAllUsers()
  }
};

module.exports = resolvers;
