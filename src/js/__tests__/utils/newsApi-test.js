// import apiCall from '../../__mocks__/axiosMock';
import * as newsApi from '../../utils/newsApi';

// jest.mock('../../utils/newsApi');
// const getArticles = jest.fn();
// getArticles.mockImplementation = (() => apiCall.get());
test('Returns List of Articles from Api', () => {
  const spy = jest.spyOn(newsApi, 'getArticles');
  const articles = newsApi.getArticles();

  expect(spy).toHaveBeenCalled();
  expect(articles).toBe(undefined);
});

test('Return list of Sources from Api', () => {
  const spy = jest.spyOn(newsApi, 'getSources');
  const sources = newsApi.getSources();

  expect(spy).toHaveBeenCalled();
  expect(sources).toBe(undefined);
});