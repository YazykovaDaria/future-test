import React from 'react';
import { renderWithProviders } from '../utils/store-utils';
import { fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import * as reduxHooks from 'src/hooks/reduxHook';
import SearchSection from 'src/components/searchSection/SearchSection';

describe('SearchSection', () => {
  vi.spyOn(reduxHooks, 'useAppDispatch');

  it('loads value from Redux store', () => {
    const searchText = 'test';
    const orderText = 'newest';
    const filterText = 'medical';

    const initialState = {
      search: searchText,
      orderBy: orderText,
      startIndex: 0,
      filtering: filterText,
    };

    const { getByDisplayValue } = renderWithProviders(<SearchSection />, {
      preloadedState: {
        booksQueryData: initialState,
      },
    });
    expect(getByDisplayValue(searchText)).toBeInTheDocument();
    expect(getByDisplayValue(filterText)).toBeInTheDocument();
    expect(getByDisplayValue(orderText)).toBeInTheDocument();
  });

  it('update search value in Redux store', () => {
    const { getByLabelText, getByText } = renderWithProviders(<SearchSection></SearchSection>);

    const searchInput = getByLabelText('Enter a search term');
    const searchButton = getByText('Search');
    fireEvent.change(searchInput, { target: { value: 'new value' } });
    fireEvent.click(searchButton);

    expect(reduxHooks.useAppDispatch).toHaveBeenCalledTimes(3);
  });
});
