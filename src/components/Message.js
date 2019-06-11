import React from 'react';
import Timestamp from './Timestamp';

const Message = props => {
  const senderClass = `chat-entry ${props.message.person}`;
  return (
    <article className={senderClass}>
      <h1 className="entry-name">{props.message.sender}</h1>
      <div className="entry-bubble">
        <p className="entry-body">{props.message.body}</p>
        <p className="entry-time">
          <Timestamp time={props.message.timeStamp} />
        </p>
      </div>
    </article>
  );
};

export default Message;
