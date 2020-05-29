import React from 'react';
import styles from './LoginForm.module.css';

const LoginForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!validCredentials(email, password)) {
    //   return false;
    // }

    console.log(e.target.email.value);
    console.log(e.target.password.value);
  }

  return (
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
  );
}

export default LoginForm;
