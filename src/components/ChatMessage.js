import React from 'react';
import './ChatMessage.css';
import Timestamp from './Timestamp';

const messageTimestamp = (props) => {
  return <Timestamp time={ props } />
};

const ChatMessage = (props) => {
  return (
    <section className="entry-bubble">
      <div className="chat-entry">
        <h3 className="entry-name">{ props.sender }</h3>
        <p className="entry-body">{ props.body }</p>
        <p className="entry-time">{ messageTimestamp(props.timeStamp) }</p>
      </div>
    </section>
  );
};

export default ChatMessage;