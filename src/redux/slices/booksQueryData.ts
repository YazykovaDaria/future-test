import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Sorting = 'relevance' | 'newest';
type Filtering = 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry';

type booksQueryDataState = {
  search: string;
  sorting: Sorting;
  startIndex: number;
  filtering: Filtering;
};

const initialState: booksQueryDataState = {
  search: '',
  sorting: 'relevance',
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
      state.sorting = action.payload;
    },
    changeStartIndex(state, action: PayloadAction<number>) {
      state.startIndex = action.payload;
    },
  },
});

export const { saveSearch } = booksQueryDataSlice.actions;

export default booksQueryDataSlice.reducer;
