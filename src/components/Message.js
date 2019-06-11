import React from 'react';
import Timestamp from './Timestamp';
import './Message.css';

const Message = (props) =>{
    const time = props.timestamp;
    return (
        <section className="chat-entry">
            <div className="entry-name">
                    {props.sender}
            </div>
            <div className="entry-bubble">
                <div className="entry-body">
                    {props.body}
                </div>
                <div className="entry-time">
                    <Timestamp time={time}/>
                </div>
            </div>
        </section>
    )
}

export default Message;