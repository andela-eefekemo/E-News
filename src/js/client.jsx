/* global document localStorage*/
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import ArticleList from './components/ArticleList';
import SourceList from './components/SourceList';
import Main from './components/Main';
import Login from './components/Login';
import '../../public/sass/style.scss';

// Gets element with id:app
const app = document.getElementById('app');

// Renders in the react DOM
ReactDom.render(
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={localStorage.User ? SourceList : Login} />
      <Route
        path="headlines"
        component={localStorage.User ? ArticleList : Login}
      />
    </Route>
  </Router>,
  app
);
