import React from 'react';
import Message from './Message';

const ChatLog = (props) => {
    const allMessages = props.chatMessages.map((message, i) => {
        return (
            <section key={i} className="chat-log">
                <Message 
                    sender={message.sender}
                    body={message.body}
                    timestamp={message.timeStamp} />
            </section>
        )
    });
    return (
        <section>
            {allMessages}
        </section>
    )
};

export default ChatLog;