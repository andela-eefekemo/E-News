import React from 'react';
import { IndexLink, Link } from 'react-router';
import { GoogleLogin } from 'react-google-login';

export default class Nav extends React.Component {
  constructor() {
    super();
    this.signOut = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    localStorage.removeItem('User');
    location.reload();
  }
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
              <li ><Link to="/logout" onClick={this.signOut}>Logout</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to="/">Home</Link></li>
              <li> <Link to="/logout" onClick={this.signOut}>Logout</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

