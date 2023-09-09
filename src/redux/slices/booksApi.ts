import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { maxResults } from 'src/constants/constants';

const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  tagTypes: ['books'],
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    updateBooks: build.query({
      query: (url: string) => url,
      providesTags: ['books'],
    }),
  }),
});

export const { useUpdateBooksQuery } = booksApi;
