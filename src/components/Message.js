import React from 'react';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const Message = (props) => {
  const sendee = props.sender
  if (sendee === "Vladimir") {
  return (
    <section className="chat-entry local">
        <div className="entry-name">{ props.sender }</div>
        <section className="entry-bubble">
            <p className="event-body">{ props.body }</p>
            <div className="entry-time"><Timestamp time={ props.timeStamp }/></div>
        </section>
    </section>
  )
  }
  return (
    <section className="chat-entry remote">
        <div className="entry-name">{ props.sender }</div>
        <section className="entry-bubble">
            <p className="event-body">{ props.body }</p>
            <div className="entry-time"><Timestamp time={ props.timeStamp }/></div>
        </section>
    </section>
  );
}

Message.propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
  };

export default Message;