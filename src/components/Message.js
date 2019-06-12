import React from 'react';
import Timestamp from './Timestamp';

const Message = (props) => {
    const sentFrom = props.sender == "Vladimir";

    return (
      <section className={`chat-entry ${sentFrom ? 'local' : 'remote'}`}>
        <p className="entry-name"> {props.sender} </p>
        <section className="entry-bubble">
            <p className="entry-body"> {props.body} </p>
            <p className="entry-time"> <Timestamp time={props.timeStamp} /> </p>
        </section>
      </section>
    );
  }
  
  export default Message;