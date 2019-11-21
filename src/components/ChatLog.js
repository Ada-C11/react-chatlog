import React from 'react';
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
      { MessageComponents }
    </section>
  );
}

ChatLog.propTypes = {
    messages: PropTypes.array.isRequired,
  };

export default ChatLog;