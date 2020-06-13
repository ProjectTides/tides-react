import React from 'react';
import './Message.css';
// import styles from './Message.module.css';

const Message = (props) => {
  let classes = props.message.flow === 'OUTBOUND' ? 'MessageBox Sent' : 'MessageBox Received'
  return (
    <div>
      <div className={classes}>
        <p>{props.message.body}</p>
      </div>
    </div>
  );
}

export default Message;
