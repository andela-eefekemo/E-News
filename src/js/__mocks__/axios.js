import api from './mock-api.json';

const apiCall = {
  newsApi: {
    getArticles() {
      return (Promise.resolve(api));
    },
    getSources() {
      return (Promise.resolve(api));
    },
  },
};

export default apiCall;
