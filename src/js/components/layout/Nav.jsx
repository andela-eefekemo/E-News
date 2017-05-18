/* global location localStorage document $*/
import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import $ from 'jquery';
// Nav Component
const Nav = (props) => {
  /**
   * Logs out user from website
   * @param {event} e Takes in onClick event
   */
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('User');
    location.reload();
  };
  $(document).ready(() => {
    $('.dropdown-button').dropdown();
  });

  const img = props.info.imageURL;
  const name = props.info.name;
  return (
    <div>
      <nav>
        <div className="nav-wrapper teal lighten-1">
          <a href="#!" className="brand-logo">E-News</a>
          <a href="#!" data-activates="mobile-demo" className="button-collapse">
            <img className="pic" src={img} alt="profile" />
          </a>
          <ul className="right hide-on-med-and-down">
            <li><IndexLink to="/">Home</IndexLink></li>

            <li><a className="dropdown-button" href="#" data-activates="dropdown1">
              {name}<i className="material-icons right">
                arrow_drop_down
                </i>
            </a>
            </li>
            <ul id="dropdown1" className="dropdown-content">
              <li><img className="pic" src={img} alt="profile" />
              </li>
              <li className="divider" />
              <li ><Link to="/logout" onClick={logout}>Logout</Link></li>
            </ul>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to="/">Home</Link></li>
            <li className="divider" />
            <li> <Link to="/logout" onClick={logout}>Logout</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

// Set Default Props
Nav.defaultProps = {
  info: {
    imageURL: '',
    name: '',
  },
  imageURL: '',
  name: '',
};
// Set Props
Nav.propTypes = {
  info: PropTypes.object,
  imageURL: PropTypes.string,
  name: PropTypes.string,
};

export default Nav;
