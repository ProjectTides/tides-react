import React, { useState, useEffect } from "react";
import styles from "./LoginForm.module.css";
import { Redirect } from "react-router-dom";
import { useQuery, useLazyQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const LOGIN_USER_VIA_EMAIL = gql`
  query loginUserViaEmail($email: String!, $password: String!) {
    loginUserViaEmail(email: $email, password: $password) {
      id
      email
    }
  }
`;

const LoginForm = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loginUserViaEmail, { called, data }] = useLazyQuery(
    LOGIN_USER_VIA_EMAIL
  );

  const verifyUser = (res) => {
    const userDetails = res.data.loginUserViaEmail;
    if (!userDetails) {
      // show error and return false;
      setLoginError(true);
      return false;
    }
    setAuthenticated(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // add form validation

    // make API call to authenticate

    // loginUserViaEmail({
    //   variables: {
    //     email: e.target.email.value,
    //     password: e.target.password.value,
    //   }
    // });
    setAuthenticated(true);
    if (data) {
      setAuthenticated(true);
    }
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className={styles.Page}>
      <h1>Welcome to Project Tides</h1>
      <div className={styles.LoginForm}>
        {loginError && (
          <div className={styles.LoginError}>Invalid user name or password</div>
        )}
        <form className={styles.FormWrapper} onSubmit={handleSubmit}>
          <div className={styles.InputWrapper}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className={styles.FormControl} />
          </div>
          <div className={styles.InputWrapper}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className={styles.FormControl}
            />
          </div>
          <div className={styles.InputWrapper}>
            <button type="submit" className={styles.LoginButton}>
              Login
            </button>
          </div>
        </form>
        <div className={styles.forgotPasswordWrapper}>
          <a href="#" className={styles.forgotPassword}>
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
