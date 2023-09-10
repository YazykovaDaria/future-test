import React from 'react';
import SearchForm from './SearchForm';
import { useAppSelector, useAppDispatch } from 'src/hooks/reduxHook';
import { setSorting, setFiltering } from 'src/redux/slices/booksQueryData';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography, MenuItem, Box, Grid } from '@mui/material';

function SearchSection() {
  const dispatch = useAppDispatch();
  const { orderBy, filtering } = useAppSelector((state) => state.booksQueryData);

  const hangleSorting = (event: SelectChangeEvent) => {
    dispatch(setSorting(event.target.value));
  };

  const handleFiltering = (event: SelectChangeEvent) => {
    dispatch(setFiltering(event.target.value));
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
      <Typography variant="h3">Search for books</Typography>
      <SearchForm></SearchForm>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <div>
            <Typography>Sorting by</Typography>
            <Select
              sx={{ width: '200px' }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={orderBy}
              onChange={hangleSorting}
            >
              <MenuItem value={'relevance'}>relevance</MenuItem>
              <MenuItem value={'newest'}>newest</MenuItem>
            </Select>
          </div>
        </Grid>
        <Grid item>
          <div>
            <Typography>Categories</Typography>
            <Select
              labelId="categories"
              id="categories"
              value={filtering}
              onChange={handleFiltering}
              sx={{ width: '200px' }}
            >
              <MenuItem value={'all'}>all</MenuItem>
              <MenuItem value={'art'}>art</MenuItem>
              <MenuItem value={'biography'}>biography</MenuItem>
              <MenuItem value={'computers'}>computers</MenuItem>
              <MenuItem value={'history'}>history</MenuItem>
              <MenuItem value={'medical'}>medical</MenuItem>
              <MenuItem value={'poetry'}>poetry</MenuItem>
            </Select>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchSection;
