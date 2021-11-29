import React from "react";

// CSS
import classes from "./Button.module.css";
function Button(props) {
  const style = props.styles;
  return (
    <button className={[classes.btn, props.style].join("")}>
      <a href={props.url} target={props.target}>
        {props.children}
      </a>
    </button>
  );
}

export default Button;
