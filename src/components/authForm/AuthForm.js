import React, { useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import AuthContext from "../../store/auth-context";
// HOOKS
import useHttp from "../../hooks/use-http";
// COMPONENTS
import FormControl from "../ui/FormControl";
// CSS
import classes from "./AuthForm.module.css";

function AuthForm(props) {
  const FIREBASE_AUTH_KEY = "AIzaSyDHriXfDOv12jEuBYg7fKUwQeNlAJsK31M";

  const { sendRequest, isLoading, error } = useHttp();

  const applyData = (data) => {
    // Use setTimout to avoid state update on unmounted component
    setTimeout(() => {
      props.loginHandler(data);
    }, 500);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = e.target[0].value;
    const enteredPassword = e.target[1].value;

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_AUTH_KEY}`;

    sendRequest(
      {
        url: url,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        },
      },
      applyData
    );
  };

  const verifyEmail = (value) => {
    return value.includes("@");
  };

  const verifyPassword = (value) => {
    return value.trim().length >= 6;
  };

  return (
    <div className={classes.auth}>
      {error ? <p className={classes["error-text"]}>{error}</p> : null}
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <FormControl
          type="email"
          label="Enter Email"
          id="email"
          errorMsg="Email must contain @"
          verifyFunc={verifyEmail}
        />

        <FormControl
          type="password"
          label="Enter Password"
          id="password"
          errorMsg="Password must be longer than 6 chars"
          verifyFunc={verifyPassword}
        />
        <div className={classes.actions}>
          {!isLoading && <button>Login</button>}
          {isLoading && <button>Loading...</button>}
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
