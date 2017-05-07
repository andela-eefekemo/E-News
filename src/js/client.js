import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Headline from './pages/Headline';
import Main from './pages/Main';

const app = document.getElementById('app');

ReactDom.render(
  <Router history={browserHistory} >
    <Route path="/" component={Main} />
    <Route path="/headlines" component={Headline} />
  </Router>
  , app);
