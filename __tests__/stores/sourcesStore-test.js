/* global expect jest describe it beforeEach */
import dispatcher from '../../src/js/dispatcher';
import mockApi from '../../__mocks__/mockApi.json';
import sourcesStore from '../../src/js/stores/sourcesStore';

jest.mock('../../src/js/dispatcher');
describe('Sources Store', () => {
  let callback;

  const sources = {
    type: 'GET_SOURCES',
    sources: mockApi
  };

  beforeEach(() => {
    callback = dispatcher.register.mock.calls[0][0];
  });

  it('should register a call with the dispatcher', () => {
    expect(dispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no sources', () => {
    expect(sourcesStore.getSources().length).toBe(0);
  });

  it('should return the appropraite result', () => {
    callback(sources);
    expect(sourcesStore.getSources().length).toBe(10);
    expect(sourcesStore.getSources()).toEqual(mockApi);
  });
});
