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
    return data === '' ? {} : data;
  } catch (error) {
    console.log(error);
  }

  return {};
});

const addBook = createAsyncThunk('book/addBooks', async (book) => {
  const endpoint = '/books';
  const url = baseURL + endpoint;
  const dataStringify = JSON.stringify(book);

  try {
    await axios.post(url, dataStringify, config);
    return { msg: 'Book added successfully!' };
  } catch (error) {
    console.log(error);
  }
  return null;
});

const removeBook = createAsyncThunk('book/addBooks', async (payload) => {
  const { id } = payload;
  const endpoint = `/books/${id}`;
  const url = baseURL + endpoint;
  const bookIdStringify = JSON.stringify({ item_id: id });

  try {
    const { data } = await axios.delete(url, bookIdStringify, config);
    return data;
  } catch (error) {
    console.log(error);
  }
  return null;
});

const initialState = {
  books: {},
  isLoading: false,
  isLoaded: false,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
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

    [addBook.pending]: (state) => {
      state.isLoading = true;
      state.isLoaded = false;
    },
    [addBook.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoaded = true;
    },
    [addBook.rejected]: (state) => {
      state.isLoading = false;
      state.isLoaded = false;
    },

    [removeBook.pending]: (state) => {
      state.isLoading = true;
      state.isLoaded = false;
    },
    [removeBook.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoaded = true;
    },
    [removeBook.rejected]: (state) => {
      state.isLoading = false;
      state.isLoaded = false;
    },
  },
});

export { getBooks, addBook, removeBook };
export default bookSlice.reducer;
