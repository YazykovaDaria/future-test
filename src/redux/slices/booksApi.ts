import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { maxResults } from 'src/constants/constants';
import { BooksQueryData } from 'src/types/queryArguments';
import GoogleBooksAPIResults from 'src/types/booksApiResult';

const baseUrl = 'https://www.googleapis.com/books/v1/' as const;

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (build) => ({
    getBooks: build.query<GoogleBooksAPIResults, BooksQueryData>({
      query: ({ orderBy, startIndex, search, filtering }) => ({
        url: '/volumes',
        params: {
          q: `${search}${filtering && filtering !== 'all' ? `+subject:${filtering}` : ''}`,
          orderBy: orderBy,
          maxResults: maxResults,
          startIndex: startIndex,
          key: import.meta.env.API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
