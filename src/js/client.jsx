/* global document localStorage*/
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import ArticleList from './components/ArticleList.jsx';
import Main from './components/Main.jsx';
import Login from './components/Login.jsx';
import '../../public/sass/style.scss';

// Gets element with id:app
const app = document.getElementById('app');

// Renders in the react DOM
ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={localStorage.User ? Main : Login} />
    <Route
      path="headlines"
      component={localStorage.User ? ArticleList : Login}
    />
  </Router>,
  app,
);
