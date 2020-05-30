import React from 'react';
import styles from './Dashboard.module.css';
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <div className={styles.MessagesFrame}>
        <div className={styles.MessageSendForm}>
          <input type="text" placeholder="Type a message..." className={styles.FormControl} />
          <button className={styles.SendButton}>&#10140;</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
