import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import GoogleBook from 'src/types/book';

type booksState = {
  book: GoogleBook | null;
};

const initialState: booksState = {
  book: null,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBook(state, action: PayloadAction<GoogleBook>) {
      state.book = action.payload;
    },
  },
});

export const { setBook } = booksSlice.actions;

export default booksSlice.reducer;
