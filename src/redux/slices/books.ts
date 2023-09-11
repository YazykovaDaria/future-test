import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import GoogleBook from 'src/types/book';

type booksState = {
  book: GoogleBook | null;
  books: GoogleBook[];
  showBooks: boolean;
};

const initialState: booksState = {
  book: null,
  books: [],
  showBooks: false,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBook(state, action: PayloadAction<GoogleBook>) {
      state.book = action.payload;
    },
    setBooks(state, action: PayloadAction<GoogleBook[]>) {
      state.books = action.payload;
    },
    setShowBooks(state, action: PayloadAction<boolean>) {
      state.showBooks = action.payload;
    },
  },
});

export const { setBook, setBooks, setShowBooks } = booksSlice.actions;

export default booksSlice.reducer;
