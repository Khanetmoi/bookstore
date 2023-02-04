/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';

const Api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3NpzSS6TCHlgPC9vqAsu/books';

// Actions
const ADD = 'bookstore/books/addBook';
const REMOVE = 'bookstore/books/removeBook';
const GET_BOOKS = 'bookstore/books/fetchBooks';

const initialState = [];

// Add Reducers
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case `${ADD}/fulfilled`:
      return state.concat(action.meta.arg);

    case `${GET_BOOKS}/fulfilled`:
      return Object.keys(action.payload).map((key) => {
        const { title, author, category } = action.payload[key][0];
        return {
          item_id: key,
          title,
          author,
          category,
        };
      });

    case `${REMOVE}/fulfilled`:
      return state.filter((book) => book.item_id !== action.payload.id);
    default:
      return state;
  }
}

export const fetchBooks = createAsyncThunk(GET_BOOKS, async () => {
  const response = await fetch(Api);
  const data = await response.json();
  return data;
});

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
  return { id };
});
