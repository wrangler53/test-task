import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import { getNews } from '../api/api';

import Error from './Error/Error';
import NewsList from './NewsList/NewsList';
import Pagination from './Pagination/Pagination';

class App extends Component {
  state = {
    news: [],
    currentPage: 1,
    totalPagesCount: null,
    hasError: false
  }

  componentDidMount() {
    this.loadNews();
  }

  refreshNews = () => {
    this.setState({ currentPage: 1 });
    this.loadNews();
  }

  loadNews(page = 1) {
    getNews(page)
      .then(response =>
        this.setState({
          news: response.results,
          totalPagesCount: response.pages
        }))
      .catch(() => this.setState({ hasError: true }));
  }

  goToNextPageHandler = () => {
    let newPage = this.state.currentPage;
    newPage++;
    this.setState({ currentPage: newPage }, () => {
      this.loadNews(this.state.currentPage);
    });
  }

  goToPreviousPageHandler = () => {
    let newPage = this.state.currentPage;
    newPage--;
    this.setState({ currentPage: newPage }, () => {
      this.loadNews(this.state.currentPage);
    });
  }

  render() {
    return (
      <div className="container">
        <h1>The Guardian News</h1>
        <Error hasError={this.state.hasError}>
          <Button className="btn_blue btn_refresh waves-effect" onClick={() => this.refreshNews()}>
            Refresh
            <Icon right>refresh</Icon>
          </Button>
          <NewsList news={this.state.news} />
          <Pagination
            currentPage={this.state.currentPage}
            totalPagesCount={this.state.totalPagesCount}
            goToNextPage={this.goToNextPageHandler}
            goToPreviousPage={this.goToPreviousPageHandler}
          />
        </Error>
      </div>
    );
  }
}

export default App;