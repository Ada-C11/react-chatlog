import React from 'react';
import './ChatMessage.css';
import Timestamp from './Timestamp';

const messageTimestamp = (props) => {
  return <Timestamp time={ props } />
};

const ChatMessage = (props) => {
  return (
    <div className="chat-entry local">
      <h3 className="entry-name">{ props.sender }</h3>
      <div className="entry-bubble">
        <p className="entry-body">{ props.body }</p>
        <p className="entry-time">{ messageTimestamp(props.timeStamp) }</p>
      </div>
    </div>
  );
};

export default ChatMessage;