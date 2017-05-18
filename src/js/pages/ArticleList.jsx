/* global localStorage*/
import React from 'react';

import PropTypes from 'prop-types';
import Nav from '../components/layout/Nav.jsx';
import Footer from '../components/layout/Footer.jsx';
import NewsStore from '../stores/newsStore';
import * as NewsActions from '../actions/newsAction';
import Dropdown from '../components/Dropdown.jsx';
import Articles from '../components/Articles.jsx';

/**
 * Headlines React Component
 */
class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.api = NewsStore.getArticles();
    this.state = {
      articles: this.api,
      name: 'articles',
    };
    this.article = this.getArticle.bind(this);
    this.sortsBy = [];
    this.name = '';
    this.id = '';
    this.change = this.onChange.bind(this);
  }
  // componentDidMount - Runs when component is loaded
  componentDidMount() {
    const { location } = this.props;
    const { query } = location;
    this.sorts = query.sorts.split(',');
    this.sortsBy = this.sorts.map(sort => sort);
    this.name = query.name;
    this.id = query.id;
    NewsStore.on('changes', this.article);
    NewsActions.getArticle(query.id, this.sorts[0]);
  }
  // componentWillUnMount - Runs when component is unloaded(changed)
  componentWillUnmount() {
    NewsStore.removeListener('changes', this.article);
  }
  // onChange - Runs when onChange event is called in select field
  onChange(event) {
    const value = event.target.value;
    NewsActions.getArticle(this.id, value);
  }
  // getArticle - Sets state of article
  getArticle() {
    this.setState({
      articles: NewsStore.getArticles(),
    });
  }
  render() {
    // maps through sortsBy array and passes props to dropdown component
    const sorted = this.sortsBy
      .map((sort, index) => <Dropdown key={index} value={sort} text={sort} />);
    // maps through articles array and passes props to Articles component
    const singleArticles = this.state.articles
      .map(article => <Articles key={article.publishedAt} {...article} />);
    return (
      <div>
        <Nav />
        <div className="container" id={this.state.name}>
          <div className="row">
            <div className="col m6">
              <h1>{this.name}</h1>
            </div>
            <div className="col m6">
              <div className="row">
                <div className="col m4">
                  <h6 htmlFor="sortsBy" className="sortBy">Sort By</h6>
                </div>
                <div className="col m8">
                  <select
                    className="browser-default input-field select"
                    onChange={this.change} id="sortsBy">
                    {sorted}
                  </select>
                </div>
              </div>
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
// sets default propstype
Headlines.defaultProps = {
  location: {
    query: {
      sorts: 'top',
    },
  },
};

Headlines.propTypes = {
  location: PropTypes.object,
};

export default Headlines;
