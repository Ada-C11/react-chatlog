import React from 'react';
import Timestamp from './Timestamp';

const Message = (props) => {
    return (
        <section>
            <h5>
                {props.sender}
            </h5>
            <div>
                <p>
                    {props.body}
                </p>
                <h5>
                    <Timestamp time={props.timestamp}/>
                </h5>
            </div>
        </section>
    )
}

export default Message;
