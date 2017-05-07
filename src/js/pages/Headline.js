import React from 'react';

import PropTypes from 'prop-types';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import NewsStore from '../stores/newsStore';
import * as NewsActions from '../actions/newsAction';
import Dropdown from '../components/Dropdown';
import Articles from '../components/Articles';

class Headlines extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: NewsStore.getArticles(),
    };
    this.article = this.getArticle.bind(this);
    this.sortsBy = [];
    this.name = '';
    this.id = '';
  }

  componentWillMount() {
    const { location } = this.props;
    const { query } = location;
    const sorts = query.sorts.split(',');
    this.sortsBy = sorts.map(sort => sort);
    this.name = query.name;
    this.id = query.id;
    NewsStore.on('changes', this.article);
    NewsActions.getArticle(query.id, sorts[0]);
  }
  componentWillUnmount() {
    NewsStore.removeListener('changes', this.article);
  }

  onChange(event) {
    const value = event.target.value;
    NewsActions.getArticle(this.id, value);
  }
  getArticle() {
    this.setState({
      articles: NewsStore.getArticles(),
    });
  }
  render() {
    const sorted = this.sortsBy.map((sort, index) => <Dropdown key={index} value={sort} text={sort} />);
    const singleArticles = this.state.articles.map(article => <Articles key={article.publishedAt} {...article} />);
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col m8">
              <h1>{this.name}</h1>
            </div>
            <div className="col m4">
              <select className="browser-default input-field" onChange={this.onChange.bind(this)} >
                {sorted}
              </select>
            </div>
          </div>
          <div className="row">
            {singleArticles}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Headlines.defaultProps = {
  location: {},
  query: {},
};

Headlines.propTypes = {
  location: PropTypes.Object,
  query: PropTypes.Object,
};

export default Headlines;
