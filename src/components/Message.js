import React from 'react';
import Timestamp from './Timestamp';

const Message = () => {
    const staticMessages = [
        {
          "sender":"Vladimir",
          "body":"why are you arguing with me",
          "timeStamp":"2018-05-29T22:49:06+00:00"
        },
        {
          "sender":"Estragon",
          "body":"Because you are wrong.",
          "timeStamp":"2018-05-29T22:49:33+00:00"
        },
    ];

    return (
      <section className="chat-entry local">
        <p> {staticMessages[0]["sender"]} </p>
        <p> {staticMessages[0]["body"]} </p>
        <p> <Timestamp time={staticMessages[0]["timeStamp"]} /> </p>
      </section>
    );
  }
  
  export default Message;