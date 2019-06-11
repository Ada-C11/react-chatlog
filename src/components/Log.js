import React from 'react';
import Message from './Message'
import { tsPropertySignature } from '@babel/types';

const Log = (props) => {
  const messages = props.entries.map((entry, i) => {
    const sender = i % 2 == 0 ? 'local' : 'remote';
    return <Message message =
  })
  return (

  );
}

export default Log;