import newsApi from '../../utils/newsApi';

test('Returns List of Articles from Api', () => {
  const spy = jest.spyOn(newsApi, 'get');
  const articles = newsApi.get();

  expect(spy).toHaveBeenCalled();
  expect(articles).toEqual(Promise.resolve());
});