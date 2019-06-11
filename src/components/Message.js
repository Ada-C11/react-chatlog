import React from 'react';
import ChatLog from './ChatLog';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const Message = (props) => {
  return (
    <section className="entry-bubble">
      <p className="entry-name">{ props.sender }</p>
      <p className="event-body">{ props.body }</p>
      <p className="entry-time"><Timestamp time={ props.timeStamp } /></p>
    </section>
  );
}

Message.propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
  };

export default Message;