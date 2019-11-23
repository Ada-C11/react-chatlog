import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

const Chat = props => {
  const location = props.sender === 'Estragon' ? 'local' : 'remote';
  return (
    <article className={'chat-entry ' + location}>
      <h1 className="entry-name">{props.sender}</h1>
      <div className="entry-bubble">
        <p className="entry-body">{props.body}</p>
        <p className="entry-time">
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
