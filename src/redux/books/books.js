import { v4 as uuidv4 } from 'uuid';

const ADD = 'bookstore/books/addBook';
const REMOVE = 'bookstore/books/removeBook';
const FECTH = 'bookstore/books/fechBooks';

const Api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qRq5MNlV4Ck1eZaDEPnz';

const initialState = [];


export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case `${ADD}/fulfilled`: 
      return action.payload;

    case `${REMOVE}/fulfilled`:
      return
         state.filter((book) => book.id !== action.payload);
    case `${FETCH}/fulfilled`: 
      return Object.keys(action.payload).map((key)=>{
        const {title, author, category} = action.payload[key][0];
        return {
          item_id: key,
          title,
          author,
          category,
        }
      })

      
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
