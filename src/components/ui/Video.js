import React from "react";
// CSS
import classes from "./Video.module.css";
function Video(props) {
  return (
    <div className={classes.videoWrapper}>
      <iframe title="video" src={props.url} frameborder="0"></iframe>
    </div>
  );
}

export default Video;
