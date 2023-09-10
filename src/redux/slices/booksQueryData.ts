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
    saveSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    changeSorting(state, action: PayloadAction<Sorting>) {
      state.orderBy = action.payload;
    },
    changeStartIndex(state, action: PayloadAction<number>) {
      state.startIndex = action.payload;
    },
    changeFilter(state, action: PayloadAction<Filtering>) {
      state.filtering = action.payload;
    },
  },
});

export const { saveSearch, changeSorting, changeStartIndex, changeFilter } =
  booksQueryDataSlice.actions;

export default booksQueryDataSlice.reducer;
