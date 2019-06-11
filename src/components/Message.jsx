import React from 'react';
import Timestamp from './Timestamp';

const Message = (props) => {
  let localOrRemote = ""

  if (props.sender === "Vladimir") {
    localOrRemote = "local";
  } else {
    localOrRemote = "remote";
  }

  return (
    <section className={`chat-entry ${localOrRemote}`}>
      <h3 className="entry-name">{props.sender}</h3>

      <div className="entry-bubble">
        <p className="entry-body">{props.body}</p>
        <p className="entry-time"><Timestamp time={props.timeStamp} /></p>
      </div>
    </section>
  );

};

export default Message;
