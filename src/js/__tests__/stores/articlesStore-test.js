/* global expect jest describe it beforeEach */
import dispatcher from '../../dispatcher';
import mockApi from '../../__mocks__/mockApi.json';
import articlesStore from '../../stores/articlesStore';

jest.mock('../../dispatcher');
describe('articlesStore', () => {
  let callback;

  const articles = {
    type: 'GET_ARTICLES',
    articles: mockApi,
  };

  beforeEach(() => {
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
    expect(articlesStore.getArticles()).toEqual(mockApi);
  });
});