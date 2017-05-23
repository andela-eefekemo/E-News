/* global localStorage*/
import React from 'react';

import SourceList from './SourceList.jsx';
import Nav from './layout/Nav.jsx';
import Footer from './layout/Footer.jsx';

const Main = () => {
  const userInfo = JSON.parse(localStorage.getItem('User'));
  return (
    <div>
      <Nav info={userInfo} />
      <SourceList />
      <Footer />
    </div>
  );
};

export default Main;
