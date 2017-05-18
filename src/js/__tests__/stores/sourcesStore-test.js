import dispatcher from '../../dispatcher';
import mock_api from '../../__mocks__/mock-api.json';
import sourcesStore from '../../stores/sourcesStore';

jest.mock('../../dispatcher');
describe('sourcesStore', () => {
  let sourcesStore;
  let callback;
  
  const sources= {
    type: 'GET_SOURCES',
    mock_api,
  }
  
  beforeEach(() => {
    jest.resetModules();
    sourcesStore = require('../../stores/sourcesStore').default;
    callback = dispatcher.register.mock.calls[0][0];
  });

  it('register a call with the dispatcher', () => {
    expect(dispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no article', () => {
    expect(sourcesStore.sources.length).toBe(0);
  });

  it('stores mock', () => {
    callback(sources);
    expect(sourcesStore.sources).toEqual([]);
  });
 

});