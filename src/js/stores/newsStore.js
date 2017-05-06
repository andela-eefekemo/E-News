import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher';

class NewsStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
    this.sources = [];
  }

  getArticles() {
    return this.articles;
  }

  getSources() {
    return this.sources;
  }

  updateNews(action) {
    switch (action.type) {
      case 'GET_SOURCES':
        this.sources = action.data;
        this.emit('changes');
        break;
      case 'GET_ARTICLES':
        this.articles = action.data;
        this.emit('changes');
        break;
      default:
        break;
    }
  }
}

const newsstore = new NewsStore();
Dispatcher.register(newsstore.updateNews.bind(newsstore));
export default newsstore;
