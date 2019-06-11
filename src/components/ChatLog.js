import React from 'react';
import Message from './Message';

const ChatLog = (props) => {
    const allMessages = props.chatMessages.map((message, i) => {
        return (
            <section className="chat-log">
                <Message 
                    sender={message.sender}
                    body={message.body}
                    timestamp={message.timestamp} />
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