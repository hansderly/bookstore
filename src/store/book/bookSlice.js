/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

export const ID = 'yDbGjL1tReb79e1vei0W';
const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${ID}`;
const config = {
  headers: {
    'content-type': 'application/json',
  },
};

const getBooks = createAsyncThunk('book/getBooks', async () => {
  const endpoint = '/books';
  const url = baseURL + endpoint;

  try {
    const { data } = await axios.get(url);
    return data === '' ? [] : data;
  } catch (error) {
    console.log(error);
  }

  return [];
});

const initialState = {
  books: [],
  isLoading: false,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {

    addBook: ({ books }, { payload }) => {
      const { title, author } = payload;
      const id = nanoid();
      books.push({
        id, title, author, category: 'Action',
      });
    },

    removeBook: (state, { payload }) => {
      const { id } = payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.books = actions.payload;
    },
    [getBooks.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export { getBooks };
export default bookSlice.reducer;
