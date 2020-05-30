import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { Redirect } from 'react-router-dom';

const LoginForm = () => {

  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // add form validation

    // make API call to authenticate

    setAuthenticated(true);
    console.log(authenticated);
  }

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className={styles.Page}>
      <h1>Welcome to Project Tides</h1>
      <div className={styles.LoginForm}>
        <form className={styles.FormWrapper} onSubmit={handleSubmit}>
          <div className={styles.InputWrapper}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className={styles.FormControl} />
          </div>
          <div className={styles.InputWrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className={styles.FormControl} />
          </div>
          <div className={styles.InputWrapper}>
            <button type="submit" className={styles.LoginButton}>Login</button>
          </div>
        </form>
        <div className={styles.forgotPasswordWrapper}>
          <a href="#" className={styles.forgotPassword}>Forgot password?</a>
        </div>
      </div>

    </div>
  );
}

export default LoginForm;
