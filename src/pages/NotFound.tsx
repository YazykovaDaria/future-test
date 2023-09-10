import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

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

      <Typography align="center" variant="h6">
        <NavLink to="/">Return to main page</NavLink>
      </Typography>
    </Box>
  );
}

export default NotFound;
