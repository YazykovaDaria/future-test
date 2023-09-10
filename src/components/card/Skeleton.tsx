import React from 'react';
import { useEffect } from 'react';
import { CircularProgress, Box } from '@mui/material';

function Skeleton() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Box
      sx={{
        background: '#d8d7d7',
        zIndex: '10',
        opacity: '0.8',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress></CircularProgress>
    </Box>
  );
}

export default Skeleton;
