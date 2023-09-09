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
        Страница не найдена
      </Typography>

      <Typography align="center" variant="h6">
        <NavLink to="/">Вернуться на главную</NavLink>
      </Typography>
    </Box>
  );
}

export default NotFound;
