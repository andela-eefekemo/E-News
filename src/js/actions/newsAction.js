/* global window */
import Dispatcher from '../dispatcher';
import newsApi from '../utils/newsApi';
import * as constants from '../constants/constants';
/**
 * Gets the list of sources from Api
 * @param {string} category sortsBy category for string
 * @return {void}
 */
export const getSources = () => {
  const link = 'https://newsapi.org/v1/sources';
  newsApi.get(link).then((source) => {
    const data = source.sources;
    Dispatcher.dispatch({
      type: constants.Sources,
      data,
    });
  });
};

/**
 * Gets the list of articles from selected source
 * @param {string} source Source for article selection
 * @param {string} sortBy SortBy for article
 * @return {void}
 */
export const getArticles = (source, sortBy) => {
  const api = 'https://newsapi.org/v1/articles?source=';
  const key = process.env.KEY;
  const link = `${api}${source}&sortBy=${sortBy}&apiKey=${key}`;
  newsApi.get(link).then((article) => {
    const data = article.articles;
    Dispatcher.dispatch({
      type: constants.Articles,
      data,
    });
  });
};
