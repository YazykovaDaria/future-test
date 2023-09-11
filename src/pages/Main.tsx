import React from 'react';
import { useAppSelector } from 'src/hooks/reduxHook';

import SearchSection from 'src/components/searchSection/SearchSection';
import BooksSection from 'src/components/booksSection/BooksSection';

function Main() {
  const { showBooks } = useAppSelector((state) => state.book);

  return (
    <>
      <SearchSection></SearchSection>
      {showBooks && <BooksSection></BooksSection>}
    </>
  );
}

export default Main;
