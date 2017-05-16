import dispatcher from '../../dispatcher';
import mock_api from '../../__mocks__/mock-api.json';
import newsStore from '../../stores/newsStore';

jest.mock('../../dispatcher');
// jest.dontMock('../../stores/newsStore');
describe('newsStore', () => {
  let newsStore;
  let callback;
  const news = {
    type: 'GET_ARTICLES',
    mock_api,
  };
  
  const channel = {
    type: 'GET_SOURCES',
    mock_api,
  }
  
  beforeEach(() => {
    jest.resetModules();
    newsStore = require('../../stores/newsStore').default;
    callback = dispatcher.register.mock.calls[0][0];
  });

  it('register a call with the dispatcher', () => {
    expect(dispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no article', () => {
    expect(newsStore.articles.length).toBe(0);
  });

  it('stores mock', () => {
    callback(news);
    expect(newsStore.articles).toEqual([]);
  });
 
  it('should initialize with no article', () => {
    expect(newsStore.sources.length).toBe(0);
  });

  it('stores mock', () => {
    callback(channel);
    expect(newsStore.sources).toEqual([]);
  });

});