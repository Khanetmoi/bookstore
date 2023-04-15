import { v4 as uuidv4 } from 'uuid';

const ADD = 'bookstore/books/addBook';
const REMOVE = 'bookstore/books/removeBook';
const initialState = {
  books: [
    {
      id: uuidv4(),
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: uuidv4(),
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: uuidv4(),
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD: {
      const newbook = [...state.books, action.payload];
      return { ...state.books, books: newbook };
    }

    case REMOVE:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.id),
      };

    default:
      return state;
  }
}

export const addBook = (title, author) => ({
  type: ADD,
  payload: {
    title,
    author,
    id: uuidv4(),
  },
});

export const removeBook = (id) => ({
  type: REMOVE,
  payload: {
    id,
  },
});
