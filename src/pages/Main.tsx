import React from 'react';
import { useState } from 'react';

import SearchSection from 'src/components/searchSection/SearchSection';
import BooksSection from 'src/components/booksSection/BooksSection';

function Main() {
  const [isShowBooks, setShowBooks] = useState<boolean>(false);

  const showBooks = () => setShowBooks(true);

  return (
    <>
      <SearchSection startSearch={showBooks}></SearchSection>
      {isShowBooks && <BooksSection></BooksSection>}
    </>
  );
}

export default Main;
