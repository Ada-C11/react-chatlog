import React from 'react';
import Message from './Message';

const MessageLog = (props) => {

    const accessJsonMessages = props.allMessages.map( (message, i) => {
        return (
            <div key={i}>
                <Message 
                    sender={message.sender}
                    body={message.body}
                    timeStamp={message.timeStamp}
                />
            </div>
        ); 
    });

    return (
        { accessJsonMessages }
    );
};

export default MessageLog;