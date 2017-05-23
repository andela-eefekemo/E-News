import React from 'react';

import sourcesStore from '../stores/sourcesStore';
import * as NewsActions from '../actions/newsAction';
import Sources from '../components/Sources.jsx';

/**
 * Home React Component
 */
export default class SourceList extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: [],
      name: 'sources',
      searchTerm: '',
    };
    this.sources = this.getSources.bind(this);
    this.filter = this.filterSources.bind(this);
  }
  /**
   * @method componentDidMount - Runs after the page has been rendered
   * @return {void}
   * Makes an action call to get list of sources from the Api
   * Listens for a change event from the sourcesStore
   */
  componentDidMount() {
    NewsActions.getSources();
    sourcesStore.on('changes', this.sources);
  }
  /**
   * @method componentWillUnmount - Runs after component has been closed
   * @return {void}
   * Removes changes Listener from the sourcesStore
   */
  componentWillUnmount() {
    sourcesStore.removeListener('changes', this.sources);
  }
  /**
   * @method getSources - Sets the state of Sources to data retrieve from sourcesStore
   * @return {void}
   */
  getSources() {
    this.setState({
      sources: sourcesStore.getSources(),
    });
  }
  /**
   * @method filterSources - Searches through available sources
   * @param {event} event - Takes in an onChange event
   * @return {void}
   * Maps through lists of articles retrieved from the sourcesStore
   * Sets the sources State to the search result
   */
  filterSources(event) {
    const searchList = [];
    sourcesStore.getSources().map((source) => {
      if (source.name.toLowerCase()
        .search(event.target.value.toLowerCase()) !== -1) {
        searchList.push(source);
      }
    });
    this.setState({
      sources: searchList,
      searchTerm: event.target.value,
    });
  }

  render() {
    const { sources } = this.state;
    // maps through sources array and passes props to Sources component
    const SourcesComponents = sources.map(source => <Sources key={source.id} {...source} />);
    return (
      <div className="container">
        <div className="row">
          <div className="col m8">
            <input
              id={this.state.name}
              type="text"
              className="validate"
              placeholder="Search for sources"
              onChange={this.filter} />
          </div>
        </div>
        <div className="row">
          <div>
            {SourcesComponents}
          </div>
        </div>
      </div>
    );
  }
}
