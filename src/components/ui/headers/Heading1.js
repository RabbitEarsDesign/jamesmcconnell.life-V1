import React from "react";
// CSS
import classes from "./Heading1.module.css";

function Heading1(props) {
  return (
    <div className={classes.heading1}>
      <h1>{props.children}</h1>
    </div>
  );
}

export default Heading1;
