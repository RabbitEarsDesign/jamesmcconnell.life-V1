import React, { useState } from "react";
// HOOKS
import useInput from "../../hooks/use-input";
// COMPONENTS
import Button from "../ui/Button";
// CSS
import classes from "./Contact.module.css";

function Contact() {
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

  function submitHandler(e) {
    e.preventDefault();

    if (formIsValid) {
      console.log(e.target);
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
            type="text"
            value={messageInputValue}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          />
          {messageHasError ? (
            <p className={classes.error}>Message must not be empty</p>
          ) : null}
        </div>
        {formIsSubmitted ? (
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
