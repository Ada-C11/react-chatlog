import React from 'react';
import './ChatLog.css';
import Message from './Message';
import PropTypes from 'prop-types';

const ChatLog = (props) => {

  const messages = props.messages

  const MessageComponents = messages.map( (message, i) => {
    return (
      <div key={i}>
        <Message 
          sender={ message.sender }
          body={ message.body }
          timeStamp={ message.timeStamp }/>
      </div>
    );
  });

  return (
    <section>
    <section>
      { MessageComponents }
    </section>
  </section>
  );
}

ChatLog.propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
  };

export default ChatLog;