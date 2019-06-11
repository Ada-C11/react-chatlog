import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

const Chat = props => {
  return (
    <article>
      <h1>{props.sender}</h1>
      <div>
        <p>{props.body}</p>
        <p>
          <Timestamp time={props.timeStamp} />
        </p>
      </div>
    </article>
  );
};

Chat.propTypes = {
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
};
export default Chat;
