import React from 'react';
import Message from './Message';

const Log = props => {
  const local = props.messages[0].sender;
  const messages = props.messages.map((entry, i) => {
    const person = entry.sender === local ? 'local' : 'remote';
    return <Message message={{ ...entry, person }} />;
  });
  return <section className="chat-log">{messages}</section>;
};

export default Log;
