import React from 'react';
import Timestamp from './Timestamp';

const Message = (props) => {
    let sentFrom = props.sender === 'Vladimir' ? 'local' : 'remote';

    return (
      <section className={`chat-log chat-entry ${sentFrom}`}>
        <p className="entry-name"> {props.sender} </p>
        <section className="entry-bubble">
            <p className="entry-body"> {props.body} </p>
            <p className="entry-time"> <Timestamp time={props.timeStamp} /> </p>
        </section>
      </section>
    );
  }
  
  export default Message;