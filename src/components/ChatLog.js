import React from 'react';
import Message from './Message.js';

const ChatLog = (props) => {
    const chatLogComponents = props.chats.map( (message, i) => {
        return (
          <p key={i} className='chat-log'>
            <Message
              sender={ message.sender }
              body={ message.body } 
              timestamp={ message.timeStamp }/>
          </p>
        );
      });
    
      return (
        <section>
          <ul className="timeline">
            { chatLogComponents }
          </ul>
        </section>
      );
    }
    
    export default ChatLog;


