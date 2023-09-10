import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from 'src/pages/NotFound';
import Layout from './Layout';
import Main from 'src/pages/Main';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/main" element={<Main></Main>}></Route>
        </Route>
        <Route path="books/:book" element={<div>book page</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
