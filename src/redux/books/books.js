import { v4 as uuidv4 } from 'uuid';

const ADD = 'bookstore/books/addBook';
const REMOVE = 'bookstore/books/removeBook';

const initialState = {
  books: [
    {
      id: uuidv4(),
      category: 'action',
      title: 'Titanic',
      author: 'Winfred',
    },
    {
      id: uuidv4(),
      category: 'action',
      title: 'Titanic',
      author: 'Winnie',
    },
    {
      id: uuidv4(),
      category: 'action',
      title: 'tanic',
      author: 'Winfred',
    },
    {
      id: uuidv4(),
      category: 'action',
      title: 'Titan',
      author: 'Winfred',
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
