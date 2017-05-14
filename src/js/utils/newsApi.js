import axios from 'axios';

/**
 * @function getSources - Get sources from Api using Axois
 * @param {string} category - Set default to null
 * @param {function} callback
 */
export const getSources = (callback) => {
  const api = 'https://newsapi.org/v1/sources';
  axios.get(api)
    .then(response => callback(response.data.sources))
    .catch((error) => {
      console.log(error);
    });
};
/**
 * @function getArticles - Get articles from Api using Axois
 * @param {string} category - Set default to null
 * @param {string} sortBy
 * @param {function} callback
 */
export const getArticles = (source, sortBy, callback) => {
  const api = 'https://newsapi.org/v1/articles?source=';
  const key = '&apiKey=213327409d384371851777e7c7f78dfe';

  const link = `${api}${source}&sortBy=${sortBy}${key}`;
  axios.get(link)
    .then(response => callback(response.data.articles))
    .catch((error) => {
      console.log(error);
    });
};
