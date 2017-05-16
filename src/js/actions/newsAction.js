import Dispatcher from '../dispatcher';
import newsApi from '../utils/newsApi';
import * as constants from '../constants/constants';
/**
 * Gets the list of sources from Api
 * @param {string} category sortsBy category for string
 * @return {void}
 */
export const getSource = () => {
  const link = 'https://newsapi.org/v1/sources';
  const data = newsApi.get(link);
  console.log(data);
  Dispatcher.dispatch({
    type: constants.Sources,
    data,
  });
};

/**
 * Gets the list of articles from selected source
 * @param {string} source Source for article selection
 * @param {string} sortBy SortBy for article
 * @return {void}
 */
export const getArticle = (source, sortBy) => {
  const api = 'https://newsapi.org/v1/articles?source=';
  const key = '&apiKey=213327409d384371851777e7c7f78dfe';
  const link = `${api}${source}&sortBy=${sortBy}${key}`;
  const data = newsApi.get(link);
  Dispatcher.dispatch({
    type: constants.Articles,
    data,
  });
};
