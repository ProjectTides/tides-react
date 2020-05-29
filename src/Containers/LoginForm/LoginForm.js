import React from 'react';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div class={styles.LoginForm}>
      <div className={styles.FormWrapper}>
        <div className={styles.InputWrapper}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className={styles.FormControl} />
        </div>
        <div className={styles.InputWrapper}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className={styles.FormControl} />
        </div>
        <div className={styles.InputWrapper}>
          <button type="button" className={styles.LoginButton}>Login</button>
        </div>
      </div>
      <div className={styles.forgotPasswordWrapper}>
        <a href="#" className={styles.forgotPassword}>Forgot password?</a>
      </div>
    </div>
  );
}

export default LoginForm;
