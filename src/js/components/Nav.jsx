/* global location localStorage document $*/
import React from 'react';
import { IndexLink, Link, browserHistory } from 'react-router';
import PropTypes from 'prop-types';
/**
 * @class Nav
 * @extends {React.Component}
 */
class Nav extends React.Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }
  /**
   * Logs out user from website
   * @param {event} e Takes in onClick event
   * @return {void}
   */
  logout(e) {
    e.preventDefault();
    localStorage.removeItem('User');
    browserHistory.replace('/');
    location.reload();
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper teal lighten-1">
            <a href="#!" className="brand-logo logo">E-News</a>
            <ul className="right hide-on-med-and-down">
              <li><IndexLink to="/">Home</IndexLink></li>

              <li><Link to="/logout" onClick={this.logout}>Logout</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to="/">Home</Link></li>
              <li className="divider" />
              <li> <Link to="/logout" onClick={this.logout}>Logout</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

// Set Default Props
Nav.defaultProps = {
  info: {
    imageURL: '',
    name: ''
  }
};
// Set Props
Nav.propTypes = {
  info: PropTypes.object,
  imageURL: PropTypes.string,
  name: PropTypes.string
};

export default Nav;
