import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher';
import * as constants from '../constants/constants';

class SourcesStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
  }

  /**
 * @method getSources
 * returns articles array of NewsStore
 */
  getSources() {
    return this.sources;
  }

  /**
   * @method updateSources
   * Listens to actions from the dispatcher
   * runs actions relevant to NewsStore
   * Emits a change event
   */
  updateSources(action) {
    switch (action.type) {
      case constants.Sources:
        this.sources = action.data;
        this.emit('changes');
        break;
      default:
        break;
    }
  }
}

// Creates an subclass of NewsStore
const sourcesStore = new SourcesStore();
// Registers the store to recieve actions from the dispatcher
Dispatcher.register(sourcesStore.updateSources.bind(sourcesStore));
export default sourcesStore;
