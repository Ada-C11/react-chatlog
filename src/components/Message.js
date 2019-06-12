import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';
import Sender from './Sender';
import './Message.css';

const Message = (props) => {
  console.log(props);
  return (
    <p className="chat-entry local">
      <p className="entry-name"><Sender sender={ props.sender }/></p>
      <div className="entry-bubble">
        <p className="entry-body">{ props.body }</p>
        <p className="entry-time"><Timestamp time={ props.time }/></p>
      </div>
      
    </p>
  );
}

export default Message;