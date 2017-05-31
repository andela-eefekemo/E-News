/* global localStorage*/
import React from 'react';
import PropTypes from 'react-router';

import Nav from './Nav';
import Footer from './Footer';
import Error from './Error';

const Main = (props) => {
  const userInfo = JSON.parse(localStorage.getItem('User'));
  return (
    <div>
      <Nav info={userInfo} />
      <Error />
      {props.children}
      <Footer />
    </div>
  );
};

// Set Default Props
Main.defaultProps = {
  children: ''
};

export default Main;
