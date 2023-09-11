import React from 'react';
import GoogleBook from 'src/types/book';

import { Typography, Box } from '@mui/material';

type Props = {
  book: GoogleBook;
};

function Book({ book }: Props) {
  const info = book.volumeInfo;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        paddingY: '2rem',
      }}
    >
      <Typography variant="h3" align="center">
        {info.title}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          gap: '1rem',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: {
              xs: 200,
              sm: 400,
            },
          }}
        >
          <img src={info.imageLinks?.thumbnail || ''} alt={info.title} width="100%" />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
          }}
        >
          <div>
            <Typography variant="h4" color="#0d47a1">
              Authors:
            </Typography>
            <Typography variant="h5">{info.authors?.length && info.authors.join(', ')}</Typography>
          </div>

          <div>
            <Typography variant="h4" color="#0d47a1">
              Categories:
            </Typography>
            <Typography variant="h5">
              {info.categories?.length && info.categories.join(', ')}
            </Typography>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <Typography variant="h3" color="#0d47a1" align="center">
          Description
        </Typography>
        <Typography variant="h6">
          {' '}
          {info.description ? info.description : 'Description not found'}
        </Typography>
      </Box>
    </Box>
  );
}

export default Book;
