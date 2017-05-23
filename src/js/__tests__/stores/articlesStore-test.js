import dispatcher from '../../dispatcher';
import mock_api from '../../__mocks__/mock-api.json';
import articlesStore from '../../stores/articlesStore';
import constants from '../../constants/constants';

jest.mock('../../dispatcher');
describe('articlesStore', () => {
  let articlesStore;
  let callback;

  const articles = {
    type: 'GET_ARTICLES',
    articles: mock_api,
  };


  beforeEach(() => {
    articlesStore = require('../../stores/articlesStore').default;
    callback = dispatcher.register.mock.calls[0][0];
  });

  it('register a call with the dispatcher', () => {
    expect(dispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no article', () => {
    expect(articlesStore.articles.length).toBe(0);
  });

  it('stores mock', () => {
    callback(articles);
    expect(articlesStore.getArticles().length).toBe(10);
    expect(articlesStore.getArticles()).toEqual(mock_api);
  });

});