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
    };
    this.sources = this.getSources.bind(this);
    this.filter = this.filterSources.bind(this);
  }
  // componentDidMount - Runs when component is loaded
  componentDidMount() {
    NewsActions.getSources();
    sourcesStore.on('changes', this.sources);
  }
  // componentWillMount - Runs when component is loaded
  componentWillUnmount() {
    sourcesStore.removeListener('changes', this.sources);
  }
  // getSources - Sets state of sources
  getSources() {
    this.setState({
      sources: sourcesStore.getSources(),
    });
  }
  /**
   * filterSources - Searches through available sources
   * @param {event} event - Takes in an onChange event
   * Sets the state of sources to the result
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
    });
  }

  render() {
    const { sources } = this.state;
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
