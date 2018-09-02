import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import { getTenLastNews } from '../api/api';

import Error from './Error/Error';
import NewsList from './NewsList/NewsList';

class App extends Component {
  state = {
    news: [],
    hasError: false
  }

  componentDidMount() {
    this.loadTenLastNews();
  }

  loadTenLastNews() {
    getTenLastNews()
      .then(news => this.setState({ news }))
      .catch(() => this.setState({ hasError: true }));
  }

  render() {
    return (
      <div className="container">
        <h1>The Guardian News</h1>
        <Error hasError={this.state.hasError}>
          <Button waves='light' onClick={() => this.loadTenLastNews()}>
            Refresh
            <Icon right>refresh</Icon>
          </Button>
          <NewsList news={this.state.news} />
        </Error>
      </div>
    );
  }
}

export default App;