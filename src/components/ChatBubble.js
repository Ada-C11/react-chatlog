import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

const ChatBubble = (props) => {
  
  const senderName = props.sender
  const bubbleAlignment = senderName === 'Vladimir' ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${bubbleAlignment}`}>
      <h3 className='entry-name'> {senderName} </h3>
      <div className='entry-bubble'>
        <p className='entry-body'> {props.body} </p>
        <p className='entry-time'> <Timestamp time={props.timestamp} /> </p>
      </div>
    </div>
  );
};

ChatBubble.propTypes = {
  timestamp: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
};


export default ChatBubble;
