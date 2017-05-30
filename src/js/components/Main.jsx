/* global localStorage*/
import React from 'react';
import PropTypes from 'react-router';

import Nav from './Nav';
import Footer from './Footer';

const Main = (props) => {
  const userInfo = JSON.parse(localStorage.getItem('User'));
  return (
    <div>
      <Nav info={userInfo} />
      {props.children}
      <Footer />
    </div>
  );
};

// Set Default Props
Main.defaultProps = {
  children: ''
};

// Nav.propTypes = {
//   children: PropTypes.element
// };

export default Main;
