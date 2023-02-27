/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {

    addBook: ({ books }, { payload }) => {
      const { title, author } = payload;
      const id = Math.random();
      books.push({ id, title, author });
    },

  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
