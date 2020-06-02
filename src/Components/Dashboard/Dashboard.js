import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import Navbar from '../Navbar/Navbar';
import Message from '../../Components/Message/Message';

const defaultMessages = [
  {
    type: 'received',
    content: 'hello',
  },
  {
    type: 'sent',
    content: 'Hello! Welcome to Tides!',
  }
];

const Dashboard = () => {

  const [messages, setMessages] = useState(defaultMessages);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        type: 'sent',
        content: e.target.content.value,
      }
    ]);
    e.target.content.value = '';
  }

  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <div className={styles.MessagesFrame}>
        {messages.map((message, index) => {
          if (message.type === 'sent') {
            return <Message key={index} message={message} />;
          }
          return <Message key={index} message={message} />;
        })}
        <form className={styles.MessageSendForm} onSubmit={sendMessage}>
          <input type="text" name="content" placeholder="Type a message..." className={styles.FormControl} />
          <button type="submit" className={styles.SendButton}>&#10140;</button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard;
