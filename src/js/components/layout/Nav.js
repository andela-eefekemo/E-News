import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper teal lighten-1">
            <div data-activates="mobile-demo" className="button-collapse">
              <i className="material-icons">menu</i>
            </div>
            <ul className="right hide-on-med-and-down">
              <li><IndexLink to="/">Home</IndexLink></li>
              <li><Link to="/headlines">Headlines</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><IndexLink to="/">Dashboard</IndexLink></li>
              <li><Link to="/headlines">Headlines</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

