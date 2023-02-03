const ADD = 'bookstore/books/addBook';
const REMOVE = 'bookstore/books/removeBook';

const initialState = {
  books: [
    {
      id: 1,
      category: 'action',
      title: 'Titanic',
      author: 'Winfred',
    },
    {
      id: 2,
      category: 'action',
      title: 'Titanic',
      author: 'Winnie',
    },
    {
      id: 3,
      category: 'action',
      title: 'tanic',
      author: 'Winfred',
    },
    {
      id: 4,
      category: 'action',
      title: 'Titan',
      author: 'Winfred',
    },
  ]
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD: {
      const newbook = [...state.books, action.payload];
      return {...state.books, books: newbook};
    }
      
    case REMOVE:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.id),
      }
      
    default:
      return state;
  }
}

export const addBook = (title, author) => ({
  type: ADD,
  payload: {
    title,
    author,
    id
  }
});

export const removeBook = (id) => ({
  type: REMOVE,
  payload: {
    id
  }
});
