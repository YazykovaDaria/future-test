import React from 'react';
import GoogleBook from 'src/types/book';
import { Card, Box, CardContent, CardMedia, Typography } from '@mui/material';

type Props = { book: GoogleBook };

function BookCard({ book }: Props) {
  const info = book.volumeInfo;

  return (
    <Card
      sx={{
        width: {
          xs: 200,
          sm: 300,
        },
        '&:hover': {
          transform: 'scale(1.1)',
          cursor: 'pointer',
          zIndex: '10',
        },
      }}
    >
      <CardMedia
        component="img"
        alt=" "
        height="140"
        image={info.imageLinks?.smallThumbnail || ''}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.title}
        </Typography>

        <Box>
          <Typography variant="body2" color="#0d47a1">
            Authors
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.authors?.length && info.authors.join(', ')}
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2" color="#0d47a1">
            Category
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.categories?.length && info.categories[0]}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default BookCard;
