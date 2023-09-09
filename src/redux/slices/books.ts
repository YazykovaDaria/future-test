import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import GoogleBook from 'src/types/book';

type booksState = {
  books: GoogleBook[];
};

const initialState: booksState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    changeBooks(state, action: PayloadAction<GoogleBook[]>) {
      state.books = action.payload;
    },
    addBooks(state, action: PayloadAction<GoogleBook[]>) {
      state.books = [...state.books, ...action.payload];
    },
  },
});

export const { changeBooks, addBooks } = booksSlice.actions;

export default booksSlice.reducer;
