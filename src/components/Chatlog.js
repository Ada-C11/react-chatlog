import React from 'react';
import './Chatlog.css';
import ChatMessage from './ChatMessage';

const postData = (props) =>
  props.messages.map( (message, i) => {
    return (
      <ChatMessage sender={ message.sender } body={ message.body } timeStamp={ message.timeStamp } />
    )
})

const Chatlog = (props) => {
  return (
    <section>
      {/* <h1>I Work!</h1> */}
      { postData(props) }
    </section>
  );
};



export default Chatlog;