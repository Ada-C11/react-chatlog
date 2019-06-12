import React from 'react';
import PropTypes from 'prop-types';
import './Sender.css';

const Sender = (props) => {
  return(
    <p>{ props.sender }</p>
  );
};

Sender.propTypes ={
  sender: PropTypes.string.isRequired,
};

export default Sender;