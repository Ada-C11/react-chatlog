import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import './Chatlog.css';

const Chatlog = (props) => {
  const messageList = props.messages.map( (message, i) => {
    return (
      <li key={i}>
        <Message sender={ message.sender } body={ message.body } time={ message.timeStamp }/>
      </li>
    );
  });

  return (
    <ul className="chat-log">{ messageList }</ul>
  );
}


PropTypes.shape({
  sender: PropTypes.string,
  body: PropTypes.string,
  time: PropTypes.string,
});


export default Chatlog;