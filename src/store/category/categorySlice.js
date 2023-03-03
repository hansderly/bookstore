/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Under construction'],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: ({ categories }) => {
      categories[0] = 'Under construction';
    },
  },
});

export default categorySlice.reducer;
