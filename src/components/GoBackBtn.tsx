import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

function GoBackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button variant="text" onClick={handleGoBack}>
      Return back
    </Button>
  );
}

export default GoBackButton;
