import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import ReactHtmlParser from 'react-html-parser';

import { getNewsItemBody } from '../../api/api';

class NewsList extends Component {
  state = {
    newsItemBody: null
  }

  setNewsItemBody = (apiUrl) => {
    getNewsItemBody(apiUrl)
      .then(body => this.setState({ newsItemBody: body }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Collapsible accordion>
        {
          this.props.news.map(item =>
            <CollapsibleItem
              header={item.webTitle}
              key={item.id}
              onClick={() => this.setNewsItemBody(item.apiUrl)}
            >
              {ReactHtmlParser(this.state.newsItemBody)}
              <a href={item.webUrl} target="_blank">Read full news</a>
            </CollapsibleItem>
          )
        }
      </Collapsible>
    );
  }
};

export default NewsList;