/* global localStorage*/
import React from 'react';

import Home from './Home.jsx';
import Nav from '../components/layout/Nav.jsx';
import Footer from '../components/layout/Footer.jsx';

// Main Component
const Main = () => {
  const userInfo = JSON.parse(localStorage.getItem('User'));
  return (
    <div>
      <Nav info={userInfo} />
      <Home />
      <Footer />
    </div>
  );
};


export default Main;

