import React from 'react';
import Timestamp from './Timestamp';

const Message = (props) =>{
    const time = props.timestamp;
    return (
        <section>
            {props.sender}
            {props.body}
            <Timestamp time={time}/>
        </section>
    )
}

export default Message;