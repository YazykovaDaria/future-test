import React from 'react';
import { ChangeEvent, FormEvent, useState } from 'react';

import { TextField, Button, Box, Snackbar } from '@mui/material';

type Props = {
  label: string;
  inputValue: string;
  onSubmit: (data: string) => void;
  errorValidateMessage?: string;
};

const defaultErrorMessage = 'Enter a search term or select a category';

function SearchForm({
  label,
  inputValue,
  onSubmit,
  errorValidateMessage = defaultErrorMessage,
}: Props) {
  const [searchValue, setSearchValue] = useState<string>(inputValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchValue.trim().length > 0) {
      onSubmit(searchValue);
    } else {
      setSnackbar(true);
      setTimeout(() => setSnackbar(false), 3000);
    }
  };

  const [isSnackbar, setSnackbar] = useState<boolean>(false);

  const handleClose = () => setSnackbar(false);

  return (
    <>
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
            label={label}
            variant="outlined"
            value={searchValue}
            size="medium"
            autoFocus
            onChange={handleInputChange}
          />
          <Button type="submit" variant="contained" color="primary" size="large">
            Search
          </Button>
        </Box>
      </form>

      <Snackbar
        open={isSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        message={errorValidateMessage}
      />
    </>
  );
}

export default SearchForm;
