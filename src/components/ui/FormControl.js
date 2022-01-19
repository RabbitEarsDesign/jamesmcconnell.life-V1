import React from "react";
// HOOKS
import useInput from "../../hooks/use-input";
// CSS
import classes from "./FormControl.module.css";

function FormControl(props) {
  const {
    value,

    hasError,
    valueChangeHandler,
    inputBlurHandler,
  } = useInput(props.verifyFunc);

  const controlClasses = hasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  return (
    <div className={controlClasses}>
      <label htmlFor={props.type}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={value}
        onBlur={inputBlurHandler}
        onChange={valueChangeHandler}
        required
      />
      {hasError && <p className={classes["error-text"]}>{props.errorMsg}</p>}
    </div>
  );
}

export default FormControl;
