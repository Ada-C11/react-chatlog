import React from 'react';
import Timestamp from './Timestamp';
import './Message.css';
import PropTypes from 'prop-types';

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

Message.propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    

}

export default Message;