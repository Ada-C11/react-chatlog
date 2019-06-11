import React from 'react';
import './ChatMessage.css';
import Timestamp from './Timestamp';

const ChatMessage = (props) => {
  return (
    <section>
      <h3>{ props.sender }</h3>
      <p>{ props.body }</p>
      <p>I work!</p>
    </section>
  )
    
}

export default ChatMessage;