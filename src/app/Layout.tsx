import React from 'react';
import { Outlet } from 'react-router';
import SearchSection from 'src/components/searchSection/SearchSection';

function Layout() {
  return (
    <div>
      <SearchSection></SearchSection>
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
