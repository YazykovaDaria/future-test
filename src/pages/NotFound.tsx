import React from 'react';
import { Typography, Box } from '@mui/material';
import GoBackButton from 'src/components/GoBackBtn';

function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography align="center" variant="h3">
        Sorry, page not found(
      </Typography>

      <GoBackButton></GoBackButton>
    </Box>
  );
}

export default NotFound;
