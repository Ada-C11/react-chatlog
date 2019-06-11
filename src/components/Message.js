import React from 'react';
import ChatLog from './ChatLog';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const Message = (props) => {
  return (
    <section>
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