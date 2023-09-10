import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from 'src/redux/store';
import { Container } from '@mui/material';
import AppRouter from './Router';

const App = () => {
  return (
    <Container maxWidth="lg">
      <Provider store={setupStore()}>
        <AppRouter></AppRouter>
      </Provider>
    </Container>
  );
};

export default App;
