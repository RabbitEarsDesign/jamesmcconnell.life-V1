import React from "react";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faCss3,
  faReact,
  faGithub,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
// CSS
import classes from "./Technologies.module.css";

function Technologies() {
  return (
    <div className={classes.technologies}>
      <div className={classes.iconGroup}>
        <FontAwesomeIcon icon={faCss3} className={classes.icon} />
        <p className={classes.iconDescription}>CSS is fun</p>
      </div>
      <div className={classes.iconGroup}>
        <FontAwesomeIcon icon={faJs} className={classes.icon} />
        <p className={classes.iconDescription}>JS brings superpowers</p>
      </div>
      <div className={classes.iconGroup}>
        <FontAwesomeIcon icon={faReact} className={classes.icon} />
        <p className={classes.iconDescription}>My preffered library</p>
      </div>
      <div className={classes.iconGroup}>
        <FontAwesomeIcon icon={faGithub} className={classes.icon} />
        <p className={classes.iconDescription}>Git/Github proficiency</p>
      </div>
      <div className={classes.iconGroup}>
        <FontAwesomeIcon icon={faSass} className={classes.icon} />
        <p className={classes.iconDescription}>Nested CSS</p>
      </div>
    </div>
  );
}

export default Technologies;
