import axios from 'axios';

/**
 * @class NewsApi
 */
class NewsApi {
  /**
   * @static
   * @param {any} link - Takes in a link parameter
   * @memberof NewsApi
   * @return {Promise} - Returns a promise
   */
  static get(link) {
    return axios
      .get(link)
      .then(response => response.data)
      .catch(error => error);
  }
}

export default NewsApi;
