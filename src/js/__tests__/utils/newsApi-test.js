
import newsApi from '../../utils/newsApi';

// jest.mock('../../utils/newsApi');
// const getArticles = jest.fn();
// getArticles.mockImplementation = (() => apiCall.get());
test('Returns List of Articles from Api', () => {
  const spy = jest.spyOn(newsApi, 'get');
  const articles = newsApi.get();

  expect(spy).toHaveBeenCalled();
});