import React from 'react';
import BottomNav from './navbar';

const Layout = ({children}) => {
  return (
    <>
      {children}
      <BottomNav />
    </>
  );
};

export default Layout;
