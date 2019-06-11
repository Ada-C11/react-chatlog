import React from 'react';
import Timestamp from './Timestamp';

const Message = (props) => {
    return (
        <section className='chat-entry local'>
            <h5 className='entry-name'>
                {props.sender}
            </h5>
            <div className='entry-bubble'>
                <p className='entry-body'>
                    {props.body}
                </p>
                <h5 className='entry-time'>
                    <Timestamp time={props.timestamp}/>
                </h5>
            </div>
        </section>
    )
}

export default Message;
