import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher';
import * as constants from '../constants/constants';

class ArticlesStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
  }

  /**
  * @method getArticle
  * @return {array} - returns an array of articles
  */
  getArticles() {
    return this.articles;
  }

  /**
  * @method updateArticles
  * @param {any} action
  * @return {void}
  * Listens to actions from the dispatcher
  * runs actions relevant to NewsStore
  * Emits a change event
  */
  updateArticles(action) {
    switch (action.type) {
      case constants.Articles:
        this.articles = action.articles;
        this.emit('changes');
        break;
      default:
        break;
    }
  }
}

// Creates an subclass of NewsStore
const articlesStore = new ArticlesStore();
// Registers the store to recieve actions from the dispatcher
Dispatcher.register(articlesStore.updateArticles.bind(articlesStore));
export default articlesStore;
