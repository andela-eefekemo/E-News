import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher';
import * as constants from '../constants/constants';

// NewsStore class
class NewsStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
    this.sources = [];
  }
  /**
   * @method getArticle
   * returns articles array of NewsStore
   */
  getArticles() {
    return this.articles;
  }
  /**
   * @method getSources
   * returns sources array of NewsStore
   */
  getSources() {
    return this.sources;
  }
  /**
   * @method updateNews
   * Listens to actions from the dispatcher
   * runs actions relevant to NewsStore
   * Emits a change event
   */
  updateNews(action) {
    switch (action.type) {
      case constants.Sources:
        this.sources = action.data;
        this.emit('changes');
        break;
      case constants.Articles:
        this.articles = action.data;
        this.emit('changes');
        break;
      default:
        break;
    }
  }
}
// Creates an subclass of NewsStore
const newsstore = new NewsStore();
// Registers the store to recieve actions from the dispatcher
Dispatcher.register(newsstore.updateNews.bind(newsstore));
export default newsstore;
