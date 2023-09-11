import React from 'react';
import { useAppSelector, useAppDispatch } from 'src/hooks/reduxHook';
import { setSorting, setFiltering, setSearch } from 'src/redux/slices/booksQueryData';

import { SelectChangeEvent } from '@mui/material/Select';
import { Typography, Box, Grid } from '@mui/material';

import SearchForm from './SearchForm';
import SelectInput from './SelectInput';

type Props = {
  startSearch: () => void;
};

function SearchSection({ startSearch }: Props) {
  const dispatch = useAppDispatch();
  const { orderBy, filtering, search } = useAppSelector((state) => state.booksQueryData);

  const handleSearch = (data: string) => {
    dispatch(setSearch(data));
    startSearch();
  };

  const searchArguments = {
    label: 'Enter a search term',
    onSubmit: handleSearch,
    inputValue: search,
  };

  const hangleSorting = (event: SelectChangeEvent) => {
    dispatch(setSorting(event.target.value));
  };

  const sortintArguments = {
    inputValue: orderBy,
    title: 'Sorting by',
    onChange: hangleSorting,
    values: ['relevance', 'newest'],
  };

  const handleFiltering = (event: SelectChangeEvent) => {
    dispatch(setFiltering(event.target.value));
    startSearch();
  };

  const filteringArguments = {
    inputValue: filtering,
    title: 'Categories',
    onChange: handleFiltering,
    values: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'],
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '3rem',
        paddingBottom: '1rem',
        background: 'RGBA(255, 255, 204, 0.8)',
      }}
    >
      <Typography variant="h3" align="center">
        Search for books
      </Typography>
      <SearchForm {...searchArguments}></SearchForm>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <SelectInput {...sortintArguments}></SelectInput>
        </Grid>
        <Grid item>
          <SelectInput {...filteringArguments}></SelectInput>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchSection;
