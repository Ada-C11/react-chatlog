import React from 'react';
import Timestamp from './Timestamp';

const chatTimestamp = (props) => {
    return (
      <Timestamp time={ props } />
    );
  };
  
  const Messages = (props) => {
    return (
      <section>
        <h3>
          { props.sender }
        </h3>
        <p>
          { props.body }
        </p>
        <p>
          { chatTimestamp(props.timeStamp) }
        </p>
      </section>
    );
  };

export default Messages;