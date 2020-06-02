import React from 'react';
import './Message.css';
// import styles from './Message.module.css';

const Message = (props) => {
  let classes = props.message.type === 'sent' ? 'MessageBox Sent' : 'MessageBox Received'
  return (
    <div>
      <div className={classes}>
        <p>{props.message.content}</p>
      </div>
    </div>
  );
}

export default Message;
