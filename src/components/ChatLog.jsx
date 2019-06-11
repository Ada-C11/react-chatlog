import React from 'react';
import Message from './Message';

const ChatLog = (props) => {
  let localOrRemote = ""

  if (props.message.sender === "Vladimir") {
    localOrRemote = "local";
  } else {
    localOrRemote = "remote";
  }

  return (
    <section className={`chat-entry ${localOrRemote}`}>
      <h3 className="entry-name">{props.message.sender}</h3>

      <div className="entry-bubble">
        <p className="entry-body">{props.message.body}</p>
        <p className="entry-time"><Timestamp time={props.message.timeStamp} /></p>
      </div>
    </section>
  );

};

export default ChatLog;
