import api from './mockApi.json';

const apiCall = {
  get() {
    return Promise.resolve(api);
  },
};

export default apiCall;
