import dispatcher from '../../dispatcher';
import newsStore from '../../stores/newsStore';
import * as newsAction from '../../actions/newsAction';

jest.mock('../../dispatcher');
jest.dontMock('../../stores/newsStore');
jest.dontMock('../../actions/newsAction');
describe('AdminStore', () => {
  let callback
  beforeEach(() => {
    callback = dispatcher.register.mock.calls[0][0];
  });
  it('should initialize with a articles total of 0', () => {
    let total = newsStore.getArticles().length;
    expect(total).toBe(0);
  });
});
