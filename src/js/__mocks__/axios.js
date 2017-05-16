import api from './mock-api.json';

const apiCall = {
  get() {
    return (Promise.resolve(api));
  },
};

export default apiCall;
