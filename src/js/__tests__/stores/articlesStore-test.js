import dispatcher from '../../dispatcher';
import mock_api from '../../__mocks__/mock-api.json';
import articlesStore from '../../stores/articlesStore';

jest.mock('../../dispatcher');
describe('articlesStore', () => {
  let articlesStore;
  let callback;
  const articles = {
    type: 'GET_ARTICLES',
    mock_api,
  };
  
  
  beforeEach(() => {
    jest.resetModules();
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
    expect(articlesStore.articles).toEqual([]);
  });

});