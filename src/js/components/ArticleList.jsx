/* global localStorage*/
import React from 'react';

import PropTypes from 'prop-types';
import Nav from './layout/Nav.jsx';
import Footer from './layout/Footer.jsx';
import articlesStore from '../stores/articlesStore';
import * as NewsActions from '../actions/newsAction';
import Dropdown from './Dropdown.jsx';
import Articles from './Articles.jsx';

/**
 * @class ArticleList
 * @extends {React.Component}
 */
class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      name: 'articles',
      currentSort: '',
    };
    this.article = this.getArticle.bind(this);
    this.sortsBy = [];
    this.name = '';
    this.id = '';
    this.change = this.onChange.bind(this);
  }
  /**
   * @method componentDidMount - Runs after the page has been rendered
   * @return {void}
   * Retrieves query values from the props and assigns them to instance variables
   * Makes an action call to get list of sources from the Api
   * Listens for a change event from the sourcesStore
   */
  componentDidMount() {
    const { location } = this.props;
    const { query } = location;
    this.sorts = query.sorts.split(',');
    this.sortsBy = this.sorts.map(sort => sort);
    this.name = query.name;
    this.id = query.id;
    NewsActions.getArticles(query.id, this.sorts[0]);
    articlesStore.on('changes', this.article);
  }
  /**
   * @method componentWillUnmount - Runs after component has been closed
   * @return {void}
   * Removes changes Listener from the articlesStore
   */
  componentWillUnmount() {
    articlesStore.removeListener('changes', this.article);
  }
  /**
   * @method onChange - Listens for an event and makes an action call to the Api
   * @param {event} event -Takes in an event parameter
   * @return {void}
   */
  onChange(event) {
    const value = event.target.value;
    NewsActions.getArticles(this.id, value);
    this.setState({ currentSort: value });
  }
  /**
   * @method getArticle - Sets the state of articles to data retrieve from articlesStore
   * @return {void}
   */
  getArticle() {
    this.setState({
      articles: articlesStore.getArticles(),
    });
  }
  render() {
    // maps through sortsBy array and passes props to dropdown component
    const sorted = this.sortsBy.map((sort, index) => (
      <Dropdown key={index} value={sort} text={sort} />
    ));
    // maps through articles array and passes props to Articles component
    const singleArticles = this.state.articles.map(article => (
      <Articles key={article.publishedAt} {...article} />
    ));
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
                    onChange={this.change}
                    id="sortsBy"
                  >
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

ArticleList.defaultProps = {
  location: {
    query: {
      sorts: 'top',
    },
  },
};

ArticleList.propTypes = {
  location: PropTypes.object,
};

export default ArticleList;
