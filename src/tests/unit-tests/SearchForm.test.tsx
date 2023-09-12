import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import SearchForm from 'src/components/searchSection/SearchForm';

describe('SearchForm', () => {
  it('calls onSubmit with search value when form is submitted', () => {
    const handleSubmit = vi.fn();
    const { getByLabelText, getByRole } = render(
      <SearchForm label="Search" inputValue="test" onSubmit={handleSubmit} />
    );
    const searchInput = getByLabelText('Search');
    const searchButton = getByRole('button');
    fireEvent.change(searchInput, { target: { value: 'new value' } });
    fireEvent.click(searchButton);
    expect(handleSubmit).toHaveBeenCalledWith('new value');
  });

  it('displays error message when search value is empty', () => {
    const handleSubmit = vi.fn();
    const { getByText, getByRole } = render(
      <SearchForm label="Search" inputValue="" onSubmit={handleSubmit} />
    );

    const searchButton = getByRole('button');
    fireEvent.click(searchButton);
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(getByText('Enter a search term or select a category')).toBeInTheDocument();
  });
});
