import axios from 'axios';

/**
 * @class Get
 */
class Get {
  /**
   * @static
   * @param {any} link - Takes in a link parameter
   * @memberof Get
   * @return {Promise} - Returns a promise
   */
  static get(link) {
    return axios
      .get(link)
      .then(response => response.data)
      .catch(error => error);
  }
}

export default Get;
