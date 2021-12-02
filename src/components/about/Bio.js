import React from "react";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// COMPONENTS
import Video from "../ui/Video";
// CSS
import classes from "./Bio.module.css";
// import Button from "../ui/Button";
function Bio() {
  return (
    <div className={classes.bio}>
      <h1>About Me.</h1>
      <div className={classes.social}>
        {/* <a href="resume" download className={classes.download}>
          resume <FontAwesomeIcon icon={faDownload} />
        </a> */}
        <a href="https://github.com/rabbitearsdesign" target="blank">
          <FontAwesomeIcon icon={faGithub} className={classes.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/james-mcconnell-rabbit-ears-design/"
          target="blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
        </a>
        <a href="https://www.instagram.com/rabbitearsdesign" target="blank">
          <FontAwesomeIcon icon={faInstagram} className={classes.icon} />
        </a>
      </div>
      <small>Front-end Developer, Designer, Digital Atist</small>
      <p>
        I'm James McConnell, 23 year old Front-end developer. I create art
        through programming and take pride in crafting clean efficient user
        interfaces.
      </p>
      <p>
        I am a problem solver, who has been freelancing while I work towards
        finding a fulltime job in the industry. Rabbit Ears Design is the
        company I formed for my freelance work and the pseudo name I use for
        social media.
      </p>
      <p>
        Currently actively looking for employment as a full-time web
        developer/software engineer.{" "}
      </p>
      <Video url="https://www.youtube.com/embed/KDhCjJzWFtg" />
      <small>Checkout this video to learn more about me.</small>

      {/* <Button>Hire Me!</Button> */}
    </div>
  );
}

export default Bio;
