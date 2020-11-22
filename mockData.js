const data = {
  books: [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      coverPath: "/assets/images/book-covers/harry1.jpg"
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      coverPath: "/assets/images/book-covers/harry2.jpg"
    },
    {
      title: "Harry Potter and the Prisoner of Azkaban",
      coverPath: "/assets/images/book-covers/harry3.jpg"
    },
    {
      title: "Harry Potter and the Goblet of Fire",
      coverPath: "/assets/images/book-covers/harry4.jpg"
    },
    {
      title: "Harry Potter and the Order of the Phoenix",
      coverPath: "/assets/images/book-covers/harry5.jpg"
    },
    {
      title: "Harry Potter and the Half-Blood Prince",
      coverPath: "/assets/images/book-covers/harry6.jpg"
    },
    {
      title: "Harry Potter and the Deathly Hallows",
      coverPath: "/assets/images/book-covers/harry7.jpg"
    },
    {
      title: "Leviathan Wakes",
      coverPath: "/assets/images/book-covers/expanse1.jpg"
    },
    {
      title: "Caliban's War",
      coverPath: "/assets/images/book-covers/expanse2.jpg"
    },
    {
      title: "Abaddon's Gate",
      coverPath: "/assets/images/book-covers/expanse3.jpg"
    },
    {
      title: "Cibola Burn",
      coverPath: "/assets/images/book-covers/expanse4.jpg"
    },
    {
      title: "Nemesis Games",
      coverPath: "/assets/images/book-covers/expanse5.jpg"
    },
    {
      title: "Babylon's Ashes",
      coverPath: "/assets/images/book-covers/expanse6.jpg"
    },
    {
      title: "Persepolis Rising",
      coverPath: "/assets/images/book-covers/expanse7.jpg"
    },
    {
      title: "Tiamat's Wrath",
      coverPath: "/assets/images/book-covers/expanse8.jpg"
    },
    {
      title: "Blood of Elves",
      coverPath: "/assets/images/book-covers/witcher1.jpg"
    },
    {
      title: "Time of contempt",
      coverPath: "/assets/images/book-covers/witcher2.jpg"
    },
    {
      title: "Baptism of fire",
      coverPath: "/assets/images/book-covers/witcher3.jpg"
    },
    {
      title: "The tower of the swallow",
      coverPath: "/assets/images/book-covers/witcher4.jpg"
    },
    {
      title: "The lady of the lake",
      coverPath: "/assets/images/book-covers/witcher5.jpg"
    }
  ],
  authors: [
    {
      name: "J. K. Rowling",
      photoPath: "/assets/images/book-authors/j-k-rowling.jpg"
    },
    {
      name: "James S. A. Corey",
      photoPath: "/assets/images/book-authors/james-s-a-corey.jpg"
    },
    {
      name: "Andrzej Sapkowski",
      photoPath: "/assets/images/book-authors/andrzej-sapkowski.jpg"
    }
  ],
  users: [
    {
      name: "Alice",
      email: "alice@example.com",
      avatar: {
        image: {
          path: "/assets/images/avatars/w13.png"
        },
        color: "yellow"
      }
    },
    {
      name: "Bob",
      email: "bob@example.com",
      avatar: {
        image: {
          path: "/assets/images/avatars/m10.png"
        },
        color: "green"
      }
    },
    {
      name: "Celine",
      email: "celine@example.com",
      avatar: {
        image: {
          path: "/assets/images/avatars/w2.png"
        },
        color: "red"
      }
    },
    {
      name: "Dan",
      email: "dan@example.com",
      avatar: {
        image: {
          path: "/assets/images/avatars/m25.png"
        },
        color: "blue"
      }
    }
  ],
  bookIdsByAuthorIds: {
    1: [1, 2, 3, 4, 5, 6, 7],
    2: [8, 9, 10, 11, 12, 13, 14],
    3: [15, 16, 17, 18, 19, 20]
  }
};

module.exports = data;
