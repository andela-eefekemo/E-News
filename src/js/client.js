import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Headline from './pages/Headline';
import Main from './pages/Main';
import Login from './pages/Login';

const app = document.getElementById('app');

ReactDom.render(
  <Router history={browserHistory} >
    <Route path="/" component={localStorage.User ? Main : Login} />
    <Route path="/headlines" component={localStorage.User ? Headline : Login} />
  </Router>
  , app);
