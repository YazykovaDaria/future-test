import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BooksQueryData, Sorting, Filtering } from 'src/types/queryArguments';

const initialState: BooksQueryData = {
  search: '',
  orderBy: 'relevance',
  startIndex: 0,
  filtering: 'all',
};

const booksQueryDataSlice = createSlice({
  name: 'booksQueryData',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSorting(state, action: PayloadAction<string>) {
      state.orderBy = action.payload;
    },
    setStartIndex(state, action: PayloadAction<number>) {
      state.startIndex = action.payload;
    },
    setFiltering(state, action: PayloadAction<string>) {
      state.filtering = action.payload;
    },
  },
});

export const { setSearch, setSorting, setStartIndex, setFiltering } = booksQueryDataSlice.actions;

export default booksQueryDataSlice.reducer;
