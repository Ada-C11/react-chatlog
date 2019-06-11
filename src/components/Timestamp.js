import React from 'react';
import moment from 'moment';

const Timestamp = (props) => {
  const time = moment(props.time);
  const absolute = time.format('h:mm:ss a');
  // const relative = time.fromNow();

  return <span title={absolute}>{absolute}</span>;
};


export default Timestamp;
