import React from "react";
// CSS
import classes from "./Heading2.module.css";

function Heading2(props) {
  return (
    <div className={classes.heading2}>
      <h1>{props.children}</h1>
    </div>
  );
}

export default Heading2;
