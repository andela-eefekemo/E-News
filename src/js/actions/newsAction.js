/* global window */
import Dispatcher from '../dispatcher';
import newsApi from '../utils/newsApi';
import * as constants from '../constants/constants';

export const getFailed = (error) => {
  Dispatcher.dispatch({
    type: constants.Errors,
    message: 'Failed to Load Page, Please Try Again',
    cause: error.message
  });
};

/**
 * Gets the list of sources from Api
 * @function getSources - Dispatches it to the stores
 * @return {void}
 */

export const getSources = () => {
  const link = 'https://newsapi.org/v1/sources';
  newsApi
    .get(link)
    .then((source) => {
      const sourcesList = source.sources;
      Dispatcher.dispatch({
        type: constants.Sources,
        sources: sourcesList
      });
    })
    .catch((error) => {
      getFailed(error);
    });
};

/**
 * @function getArticles - Gets the list of articles from selected source
 * @param {string} source Source for article selection
 * @param {string} sortBy SortBy for article
 * @return {void}
 */

export const getArticles = (source, sortBy) => {
  const api = 'https://newsapi.org/v1/articles?source=';
  const key = process.env.KEY;
  const link = `${api}${source}&sortBy=${sortBy}&apiKey=${key}`;
  newsApi
    .get(link)
    .then((article) => {
      const articlesList = article.articles;
      Dispatcher.dispatch({
        type: constants.Articles,
        articles: articlesList
      });
    })
    .catch((error) => {
      getFailed(error);
    });
};
