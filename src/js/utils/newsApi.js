import axios from 'axios';

const get = {
  /**
   * @param {any} link - Takes in a link parameter
   * @memberof Get
   * @return {Promise} - Returns a promise
   */
  get: link =>
    axios.get(link).then(response => response.data).catch(error => error),
};

export default get;
