import mockApi from './mockApi.json';

const apiCall = {
  get() {
    return Promise.resolve(mockApi);
  }
};

export default apiCall;
