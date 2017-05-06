import React from 'react';

import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

export default class Headlines extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Nav />
        <h1>the headlines</h1>
        <Footer />
      </div>
    );
  }
}
