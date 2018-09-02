import React from 'react';

const Error = props => {
  if (props.hasError) {
    return (
      <div className="error error_msg">
        Sorry, we couldn`t find news for you. Please, try again later
      </div>
    );
  }
  return props.children;
};

export default Error;