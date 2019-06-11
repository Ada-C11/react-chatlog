import React from 'react';
import './Message.css';
import ChatLog from './ChatLog';
import Timestamp from './Timestamp';

const Message = (props) => {
  return (
    <section className="timeline timeline-event">
      <span className="event-person">{ props.sender }</span>
      <span className="event-time"><Timestamp time={ props.timeStamp } /></span>
      <p className="event-status">
        { props.body }
      </p>
    </section>
  );
}

export default Message;