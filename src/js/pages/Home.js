import React from 'react';
import 'react-materialize';

import NewsStore from '../stores/newsStore';
import * as NewsActions from '../actions/newsAction';
import Sources from '../components/Sources';


export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: NewsStore.getSources(),
    };
    this.sources = this.getNews.bind(this);
  }

  componentWillMount() {
    NewsActions.getSource();
    NewsStore.on('changes', this.sources);
  }

  componentWillUnmount() {
    NewsStore.removeListener('changes', this.sources);
  }

  getNews() {
    this.setState({
      sources: NewsStore.getSources(),
    });
  }

  filterSources(event) {
    const data = [];
    NewsStore.getSources().map((source) => {
      if (source.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1) {
        data.push(source);
      }
    });
    console.log(data);
    this.setState({
      sources: data,
    });
  }

  render() {
    const { sources } = this.state;

    const NewsComponents = sources.map(source => <Sources key={source.id} {...source} />);
    return (
      <div className="container">
        <div className="row">
          <div className="col m8">
            <input id="source_search" type="text" className="validate" placeholder="Search for sources" onChange={this.filterSources.bind(this)} />
          </div>
          <div className="col m4">
            <form>
              <select className="browser-default input-field">
                <option value="">All</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="gaming">Gaming</option>
                <option value="general">General</option>
                <option value="music">Music</option>
                <option value="politics">Politics</option>
                <option value="science-and-nature">Science and Nature</option>
                <option value="sport">Sport</option>
                <option value="technology">Technology</option>
              </select>
            </form>
          </div>
        </div>
        <div className="row">
          <div>
            {NewsComponents}
          </div>
        </div>
      </div>
    );
  }
}
