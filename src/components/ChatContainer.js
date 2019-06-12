import React from 'react';
import PropTypes from 'prop-types';
import Chat from './Chat';
import './ChatContainer.css';

const ChatContainer = props => {
  const chatLog = props.messages.map((message, i) => {
    return (
      <li key={i}>
        <Chat
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />
      </li>
    );
  });
  return <ul className="chat-log">{chatLog}</ul>;
};

ChatContainer.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    sender: PropTypes.string,
    body: PropTypes.string,
    timeStamp: PropTypes.string,
  })
).isRequired;

export default ChatContainer;
