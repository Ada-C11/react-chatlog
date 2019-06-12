import React from 'react';
import Timestamp from './Timestamp';

const Message = (props) => {
    return (
      <section className="chat-entry local">
        <p> {props.sender} </p>
        <p> {props.body} </p>
        <p> <Timestamp time={props.timeStamp} /> </p>
      </section>
    );
  }
  
  export default Message;