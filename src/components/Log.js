import React from 'react';
import Message from './Message';

const Log = props => {
  const messages = props.messages.map((entry, i) => {
    const person = i % 2 === 0 ? 'local' : 'remote';
    return <Message message={{ ...entry, person }} />;
  });
  return <section className="chat-log">{messages}</section>;
};

export default Log;
