import React from 'react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from 'src/hooks/reduxHook';
import { setSearch } from 'src/redux/slices/booksQueryData';

import { TextField, Button, Box } from '@mui/material';

function SearchForm() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.length > 0) {
      dispatch(setSearch(inputValue));
      console.log(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <TextField
          label="Enter a search term"
          variant="outlined"
          value={inputValue}
          size="medium"
          autoFocus
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained" color="primary" size="large">
          Search
        </Button>
      </Box>
    </form>
  );
}

export default SearchForm;
