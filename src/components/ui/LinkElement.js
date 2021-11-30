import React from "react";
import { Link } from "react-router-dom";
// CSS
import classes from "./LinkElement.module.css";
function LinkElement(props) {
  return (
    <div className={classes.linkElement}>
      <Link to={props.path}>{props.children}</Link>
    </div>
  );
}

export default LinkElement;
