import React from 'react';
import { render, screen } from '@testing-library/react';
import { notFullBook, fullBook } from '../mock/bookData';
import { transformArrToStr } from '../utils/test-utils';

import Book from 'src/components/book/Book';

describe('Book', () => {
  it('renders book correctly', () => {
    render(<Book book={notFullBook}></Book>);
    expect(screen.getByTestId('book')).toBeInTheDocument();
    expect(screen.getByText(notFullBook.volumeInfo.title)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders book with full info', () => {
    const inf = fullBook.volumeInfo;
    const authors = transformArrToStr(inf.authors, ', ');
    const categories = transformArrToStr(inf.categories, ', ');
    const description = inf.description ? inf.description : '';

    render(<Book book={fullBook}></Book>);
    expect(screen.getByTestId('book')).toBeInTheDocument();
    expect(screen.getByText(authors)).toBeInTheDocument();
    expect(screen.getByText(categories)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', `${inf.imageLinks.thumbnail}`);
  });

  it('renders book without description', () => {
    const defautDescription = 'Description not found';
    render(<Book book={notFullBook}></Book>);
    expect(screen.getByTestId('book')).toBeInTheDocument();
    expect(screen.getByText(defautDescription)).toBeInTheDocument();
  });
});
