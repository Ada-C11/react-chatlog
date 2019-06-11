import React from 'react';
import Message from './Message';

const ChatLog = (props) => {
    const allMessages = props.chatMessages.map((message, i) => {
        return (
            <div>
                <Message 
                    sender={message.sender}
                    body={message.body}
                    timestamp={message.timestamp} />
            </div>
        )
    });
    return (
        <section>
            {allMessages}
        </section>
    )
};

export default ChatLog;