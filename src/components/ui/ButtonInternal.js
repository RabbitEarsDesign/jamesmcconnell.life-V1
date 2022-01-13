import React from "react";
import { Link } from "react-router-dom";

// CSS
import classes from "./Button.module.css";

function ButtonInternal(props) {
  return (
    <button className={[classes.btn, props.style].join("")}>
      <Link to={props.url} target={props.target}>
        {props.children}
      </Link>
    </button>
  );
}

export default ButtonInternal;
