/* global document localStorage*/
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Headline from './pages/Headline.jsx';
import Main from './pages/Main.jsx';
import Login from './pages/Login.jsx';

// Gets element with id:app
const app = document.getElementById('app');

// Renders in the react DOM
ReactDom.render(
  <Router history={browserHistory} >
    <Route path="/" component={localStorage.User ? Main : Login} />
    <Route path="/headlines" component={localStorage.User ? Headline : Login} />
  </Router>
  , app);
