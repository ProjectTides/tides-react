import React from 'react';
import styles from './App.module.css';
import LoginForm from './Containers/LoginForm/LoginForm';
import { Redirect } from "react-router-dom";

const App = () => {
  let user = null;
  if (user) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className={styles.App}>
      <h1>Welcome to Project Tides</h1>
      <LoginForm />
    </div>
  );
}

export default App;
