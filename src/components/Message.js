import React from 'react';
import Timestamp from './Timestamp';
import './Message.css';
import PropTypes from 'prop-types';

const Message = (props) =>{
    let localOrRemote;
    if (props.sender === "Estragon"){
        localOrRemote = "chat-entry local";
    }

    if (props.sender === "Vladimir"){
        localOrRemote = "chat-entry remote";
    }
    return (
        <section className={localOrRemote}>
            <div className="entry-name">
                    {props.sender}
            </div>
            <div className="entry-bubble">
                <div className="entry-body">
                    {props.body}
                </div>
                <div className="entry-time">
                    <Timestamp time={props.timestamp}/>
                </div>
            </div>
        </section>
    );
};

Message.propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,


}

export default Message;