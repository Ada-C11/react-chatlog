import React from 'react';
import Message from './Message';

const ChatLog = (props) => {

  console.log(props.messages)

  const chatComponents = props.messages.map((message) => {
    return (
      <Message
        sender={message.sender}
        body={message.body}
        timestamp={message.timeStamp} />
    );
  });

  return (
    <section class="chat-log">
      {chatComponents}
    </section>
  );

};

export default ChatLog;
