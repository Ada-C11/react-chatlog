import React from 'react';
import Messages from './Messages';
import './ChatLog';

const ChatLog = (props) => {
    const chats = props.messages.map((chat, i) => {
      return (
        <section key={ i }>
          <Messages
            sender={ chat.sender } 
            body={ chat.body } 
            timeStamp={ chat.timeStamp } />
        </section>
      );
    });
  
    return (
      <section className="chat">
        { chats }
      </section>
    );
  };

export default ChatLog;