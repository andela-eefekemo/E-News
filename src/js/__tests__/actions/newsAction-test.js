import { getArticle } from '../../actions/newsAction';
import dispatcher from '../../dispatcher';

jest.mock('../../dispatcher');
jest.dontMock('../../actions/newsAction');
describe('News Action', () => {
  beforeEach(() => {
    getArticle('the-next-web', 'latest');
  })
  it('calls action', () => {
    expect(getArticle).toBeCalled()});
});
    // const spy = jest.spyOn(dispatcher, 'dispatch');
    // const article = getArticle('the-nex-web', 'latest');
    // expect(spy).toHaveBeenCalled();

    // spy.mockReset();
    // spy.mockRestore();


