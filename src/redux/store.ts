import booksReducer from './slices/books';
import booksQueryDataReducer from './slices/booksQueryData';

import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { booksApi } from './slices/booksApi';

const rootReducer = combineReducers({
  books: booksReducer,
  booksQueryData: booksQueryDataReducer,
  [booksApi.reducerPath]: booksApi.reducer,
});
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(booksApi.middleware),
    preloadedState,
  });
}
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
