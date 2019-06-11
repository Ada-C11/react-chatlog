import React from 'react';
import './Chatlog.css';
import ChatMessage from './ChatMessage';

const postData = (props) =>
  props.messages.map( (message, i) => {
    return (
      <ChatMessage sender={ message.sender } body={ message.body } timeStamp={ message.timeStamp } />
    );
});

const Chatlog = (props) => {
  return (
    <section className="chat-log">
      { postData(props) }
    </section>
  );
};



export default Chatlog;