import Dispatcher from '../dispatcher';
import * as newsApi from '../api/newsApi';

export const getSource = (category) => {
  newsApi.getSources(category, (data) => {
    Dispatcher.dispatch({
      type: 'GET_SOURCES',
      data,
    });
  });
};

export const getArticle = (source, sortBy) => {
  newsApi.getArticles(source, sortBy, (data) => {
    Dispatcher.dispatch({
      type: 'GET_ARTICLES',
      data,
    });
  });
};
