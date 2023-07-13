import React from 'react';
import BottomNav from './navbar';
const Layout = ({children, showNav}) => {
  return (
    <>
      {children}
      {showNav ? <BottomNav /> : null}
    </>
  );
};

export default Layout;
