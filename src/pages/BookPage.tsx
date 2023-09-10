import React from 'react';

import { useAppSelector } from 'src/hooks/reduxHook';
import GoBackButton from 'src/components/GoBackBtn';
import Book from 'src/components/book/Book';

function BookPage() {
  const { book } = useAppSelector((state) => state.book);

  return (
    <>
      <GoBackButton></GoBackButton>
      {book && <Book book={book}></Book>}
    </>
  );
}

export default BookPage;
