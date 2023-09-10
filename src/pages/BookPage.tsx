import React from 'react';

import { useAppSelector } from 'src/hooks/reduxHook';
import { useNavigate } from 'react-router';

import { Button } from '@mui/material';
import Book from 'src/components/book/Book';

function BookPage() {
  const { book } = useAppSelector((state) => state.book);
  console.log(book);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Button variant="text" onClick={handleGoBack}>
        Return back
      </Button>

      {book && <Book book={book}></Book>}
    </div>
  );
}

export default BookPage;
