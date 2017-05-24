/* global expect jest describe it beforeEach */
import dispatcher from '../../dispatcher';
import mockApi from '../__mocks__/mockApi.json';
import sourcesStore from '../../stores/sourcesStore';

jest.mock('../../dispatcher');
describe('sourcesStore', () => {
  let callback;

  const sources = {
    type: 'GET_SOURCES',
    sources: mockApi,
  };

  beforeEach(() => {
    callback = dispatcher.register.mock.calls[0][0];
  });

  it('register a call with the dispatcher', () => {
    expect(dispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no article', () => {
    expect(sourcesStore.getSources().length).toBe(0);
  });

  it('stores mock', () => {
    callback(sources);
    expect(sourcesStore.getSources().length).toBe(10);
    expect(sourcesStore.getSources()).toEqual(mockApi);
  });
});
