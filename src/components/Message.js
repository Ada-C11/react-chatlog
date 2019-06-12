import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';
import Sender from './Sender';
import './Message.css';

const Message = (props) => {
  const entryType = (props.sender === 'Vladimir') ? 'chat-entry local' : 'chat-entry remote';

  return (
    <div className={ entryType }>
      <p className="entry-name"><Sender sender={ props.sender }/></p>
      <section className="entry-bubble">
        <p className="entry-body">{ props.body }</p>
        <p className="entry-time"><Timestamp time={ props.time }/></p>
      </section>
    </div>
  );
}

PropTypes.shape({
  sender: PropTypes.string,
  body: PropTypes.string,
  time: PropTypes.string,
});

export default Message;