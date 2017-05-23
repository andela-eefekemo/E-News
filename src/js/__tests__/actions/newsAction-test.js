/* global expect jest test */
// import dispatcher from '../../dispatcher';
import * as newsActions from '../../actions/newsAction';
import newsApi from '../../utils/newsApi';

// Mock the dispatcher, firebaseApi and newsApi.
jest.mock('../../dispatcher');
jest.mock('../../utils/newsApi');

// Setup the actual mock functions for the relevant functions.
// const dispatch = dispatcher.dispatch.mock;

const newsApiGet = newsApi.get;

newsApiGet.mockReturnValue(Promise.resolve({ data: 'This is the data' }));

test('should call newsActions.getSources() on getSources', () => {
  newsActions.getSources();
  expect(newsApiGet.mock.calls.length).toBe(1);
});

test('should call newsActions.getArticles()', () => {
  newsActions.getArticles();
  expect(newsApiGet.mock.calls.length).toBe(2);
});
