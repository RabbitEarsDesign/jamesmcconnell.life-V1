import React, { useState } from "react";
// HOOKS
import useInput from "../../hooks/use-input";
import useHttp from "../../hooks/use-http";
// COMPONENTS
import Button from "../ui/Button";
// CSS
import classes from "./Contact.module.css";

function Contact() {
  const { isLoading, error, sendRequest } = useHttp();

  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const {
    value: nameInputValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
    valueChangeHandler: nameChangeHandler,
  } = useInput((name) => name.trim("").length !== 0);

  const {
    value: emailInputValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
    valueChangeHandler: emailChangeHandler,
  } = useInput((email) => email.includes("@"));

  const {
    value: messageInputValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
    valueChangeHandler: messageChangeHandler,
  } = useInput((name) => name.trim("").length !== 0);

  const formIsValid = nameIsValid + emailIsValid + messageIsValid;

  const resetInputs = () => {
    resetMessage();
    resetEmail();
    resetName();
  };

  const applyData = () => {};

  function submitHandler(e) {
    e.preventDefault();
    const enteredName = nameInputValue;
    const enteredEmail = emailInputValue;
    const enteredMessage = messageInputValue;
    const url = `https://script.google.com/macros/s/AKfycbwJ9I9O8TlxMO8lGm8N2fYxKXnNBa2kGxHa5sPSPYj8cpIKLII/exec?name=${enteredName}&email=${enteredEmail}&message=${enteredMessage}`;
    // const form = document.querySelector("form");
    // console.log(form);
    if (formIsValid) {
      console.log(enteredName, enteredEmail, enteredMessage);

      sendRequest(
        {
          url: url,
          method: "POST",
          // headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage,
          }),
        },
        applyData
      );

      setFormIsSubmitted(true);
      resetInputs();
    } else {
      alert("Check the form inputs");
    }
  }

  return (
    <div className={classes.contact}>
      <h1>Contact Me.</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.formControl}>
          <label htmlFor="">Name * </label>
          <input
            name="name"
            type="text"
            value={nameInputValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError ? (
            <p className={classes.error}>Name must not be blank</p>
          ) : null}
        </div>
        <div className={classes.formControl}>
          <label htmlFor="">Email *</label>
          <input
            name="email"
            type="text"
            value={emailInputValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError ? (
            <p className={classes.error}>Email must be valid</p>
          ) : null}
        </div>
        <div className={classes.formControl}>
          <label htmlFor="">Message *</label>
          <textarea
            name="message"
            type="text"
            value={messageInputValue}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          />
          {messageHasError ? (
            <p className={classes.error}>Message must not be empty</p>
          ) : null}
        </div>
        {isLoading ? "Loading..." : null}
        {formIsSubmitted & !isLoading ? (
          <p className={classes.success}>
            Your submmision is received. I will be in touch shortly
          </p>
        ) : (
          <Button>Submit</Button>
        )}
      </form>
    </div>
  );
}

export default Contact;
