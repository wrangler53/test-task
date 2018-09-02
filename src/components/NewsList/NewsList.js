import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

const NewsList = ({ news }) => (
  <Collapsible accordion defaultActiveKey={1}>
    {
      news.map(item =>
        <CollapsibleItem header={item.webTitle} key={item.id}>
          Lorem ipsum dolor sit amet.
        </CollapsibleItem>
      )
    }
  </Collapsible>
);

export default NewsList;