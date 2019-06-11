import React from 'react';
import PropTypes from 'prop-types';
import ChatBubble from './ChatBubble';

const ChatLog = (props) => {
  
  const entryComponents = props.entries.map((entry, i) => {
    return ( 
      <div key={i}>
        <ChatBubble
          sender={entry.sender} 
          body={entry.body}
          timestamp={entry.timeStamp} /> 
      </div>
    );
  });

  return (
    <section className='chat-log'>
      {entryComponents}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array,
};


export default ChatLog;
