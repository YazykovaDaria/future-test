import React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHook';
import { setBooks } from 'src/redux/slices/books';
import { useGetBooksQuery } from 'src/redux/slices/booksApi';
import { setStartIndex } from 'src/redux/slices/booksQueryData';
import { v4 as uuidv4 } from 'uuid';

import { maxResults } from 'src/constants/constants';

import { Button, Box } from '@mui/material';
import BookCard from './Card';
import Skeleton from 'src/components/Skeleton';

function BooksSection() {
  const { search, orderBy, startIndex, filtering } = useAppSelector(
    (state) => state.booksQueryData
  );
  const dispatch = useAppDispatch();

  const loadHandler = () => {
    dispatch(setStartIndex(startIndex + maxResults));
  };

  const params = {
    search,
    startIndex,
    orderBy,
    filtering,
  };

  const { data, isLoading, error, isFetching } = useGetBooksQuery(params);

  const { books } = useAppSelector((state) => state.book);

  useEffect(() => {
    if (!data?.items || isFetching) {
      return;
    }
    if (!startIndex) {
      dispatch(setBooks(data?.items));
      return;
    }
    dispatch(setBooks([...books, ...data.items]));
  }, [data, startIndex, isFetching, filtering, orderBy, dispatch]);

  useEffect(() => {
    dispatch(setStartIndex(0));
  }, [search, orderBy, filtering, dispatch]);

  return (
    <section>
      <div>
        <span>Tolat books:</span>
        {!isFetching && data?.totalItems && <span> {data?.totalItems} </span>}
      </div>

      {isFetching && <Skeleton></Skeleton>}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          paddingBottom: '1rem',
        }}
      >
        {error && <div>{JSON.stringify(error)}</div>}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            paddingY: '2rem',
          }}
        >
          {books &&
            books.map((item) => {
              return <BookCard book={item} key={item.id + uuidv4()}></BookCard>;
            })}
        </Box>

        {data?.totalItems && data?.totalItems >= startIndex + maxResults && (
          <Button variant="outlined" onClick={loadHandler} disabled={isLoading}>
            Load more
          </Button>
        )}
      </Box>
    </section>
  );
}

export default BooksSection;
