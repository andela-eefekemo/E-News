import Dispatcher from '../dispatcher';
import * as newsApi from '../utils/newsApi';
import * as constants from '../constants/constants';
/**
 * Gets the list of sources from Api
 * @param {string} category sortsBy category for string
 * @return {void}
 */
export const getSource = () => {
  newsApi.getSources((data) => {
    Dispatcher.dispatch({
      type: constants.Articles,
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
export const getArticle = (source, sortBy) => {
  newsApi.getArticles(source, sortBy, (data) => {
    Dispatcher.dispatch({
      type: constants.Sources,
      data,
    });
  });
};
