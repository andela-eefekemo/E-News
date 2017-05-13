/* global location localStorage*/
import React from 'react';
import { IndexLink, Link } from 'react-router';

// Nav Component
const Nav = () => {
  /**
   * Logs out user from website
   * @param {event} e Takes in onClick event
   */
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('User');
    location.reload();
  };
  return (
    <div>
      <nav>
        <div className="nav-wrapper teal lighten-1">
          <div data-activates="mobile-demo" className="button-collapse">
            <i className="material-icons">menu</i>
          </div>
          <ul className="right hide-on-med-and-down">
            <li><IndexLink to="/">Home</IndexLink></li>
            <li ><Link to="/logout" onClick={logout}>Logout</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/logout" onClick={logout}>Logout</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
