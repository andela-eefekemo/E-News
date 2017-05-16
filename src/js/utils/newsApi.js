import axios from 'axios';

/**
 * @function getArticles - Get articles from Api using Axois
 * @param {string} category - Set default to null
 * @param {string} sortBy
 * @param {function} callback
 */
const get = {
  get: link => axios.get(link)
      .then(response => response.data)
      .catch(error => error),
};


export default get;
