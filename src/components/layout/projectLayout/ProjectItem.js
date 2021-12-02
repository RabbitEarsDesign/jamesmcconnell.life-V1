import React from "react";
// CSS
import classes from "./ProjectItem.module.css";
function ProjectItem(props) {
  const imgUrl = props.url;

  return (
    <div className={classes.project}>
      <button className={classes.btn}>
        <a href={props.link} target="blank">
          View
        </a>
      </button>
      <img src={imgUrl} alt="experiment" />
    </div>
  );
}

export default ProjectItem;
