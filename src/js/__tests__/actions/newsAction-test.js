import * as newsApi from '../../actions/newsAction';
import mockedAxios from '../../__mocks__/axios';
import dispatcher from '../../dispatcher';
import newsStore from '../../stores/newsStore';
import * as constants from '../../constants/constants';

jest.mock('../../dispatcher');
describe('#getNews() using Promises', () => {
  let dispatchSpy;
  beforeEach(() => {
    jest.mock('axios', () => mockedAxios);
    dispatchSpy = jest.spyOn(dispatcher, 'dispatch');
  });

  afterEach(() => {
    dispatchSpy.mockReset();
  });

  it('should load news data', () => newsApi.getArticle('the-next-web', 'latest')
    .then(() => {
      const arg = dispatchSpy.mock.calls[0][0];
      expect(dispatchSpy).toHaveBeenCalled();
      expect(arg.eventName).toEqual(constants.GET_ARTICLES);
      expect(arg.news).toBeInstanceOf(Object);
      expect(arg.news[0].meta).toEqual('BBC News');
    }));
});


