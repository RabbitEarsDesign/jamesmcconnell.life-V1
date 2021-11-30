import React from "react";
// CSS
import classes from "./Emoji.module.css";
function Emoji(props) {
  return (
    <span
      className={classes.emoji}
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );
}

export default Emoji;
