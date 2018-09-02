import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import { getTenLastNews } from '../api/api';

import NewsList from './NewsList/NewsList';
class App extends Component {
  state = {
    news: [],
    isError: false
  }

  componentDidMount() {
    this.loadTenLastNews();
  }

  loadTenLastNews() {
    getTenLastNews()
      .then(news => this.setState({ news }))
      .catch(() => this.setState({ isError: true }));
  }

  render() {
    return (
      <div className="container">
        <h1>The Guardian News</h1>
        <Button waves='light' onClick={() => this.loadTenLastNews()}>
          Refresh
          <Icon right>refresh</Icon>
        </Button>
        <NewsList
          news={this.state.news}
          error={this.state.isError}
        /> {/*TODO: check could I set in props all state*/}
      </div>
    );
  }
}

export default App;