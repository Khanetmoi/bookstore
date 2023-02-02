const ADD = 'bookstore/books/addBook';
const REMOVE = 'bookstore/books/removeBook';

const initialState = {
  books: [],
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { ...state };
    case REMOVE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

export const addBook = () => ({
  type: ADD,
});

export const removeBook = () => ({
  type: REMOVE,
});
