import React from 'react';
import { render, screen } from '@testing-library/react';
import { notFullBook, fullBook } from '../mock/bookData';

import BookCard from 'src/components/booksSection/Card';

const getString = (arr: string[]) => (arr.length ? arr.join(', ') : '');

describe('BookCard', () => {
  it('render card correctly', () => {
    render(<BookCard book={notFullBook}></BookCard>);
    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders card with full info', () => {
    const inf = fullBook.volumeInfo;
    const authors = getString(inf.authors);
    const categories = getString(inf.categories);

    render(<BookCard book={fullBook}></BookCard>);
    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByText(inf.title)).toBeInTheDocument();
    expect(screen.getByText(authors)).toBeInTheDocument();
    expect(screen.getByText(categories)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', `${inf.imageLinks.smallThumbnail}`);
  });
});
