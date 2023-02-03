import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD = 'bookstore/books/addBook';
const REMOVE = 'bookstore/books/removeBook';
const FETCH = 'bookstore/books/fechBooks';

const Api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3NpzSS6TCHlgPC9vqAsu';

const initialState = [];

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case `${ADD}/fulfilled`:
      return action.payload;

    case `${REMOVE}/fulfilled`:
      return state.filter((book) => book.id !== action.payload);

    case `${FETCH}/fulfilled`:
      return Object.keys(action.payload).map((key) => {
        const { title, author, category } = action.payload[key][0];
        return {
          item_id: key,
          title,
          author,
          category,
        };
      });

    default:
      return state;
  }
}

export const addBook = createAsyncThunk(ADD, async (book) => {
  await fetch(Api, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json',
    },
  });
});

export const removeBook = createAsyncThunk(REMOVE, async (id) => {
  await fetch(`${Api}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  });
});

export const fetchBook = createAsyncThunk(FETCH, async () => {
  const response = await fetch(Api);
  const data = await response.json();
  return data;
});
