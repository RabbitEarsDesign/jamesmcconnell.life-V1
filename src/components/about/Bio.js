import React from "react";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// COMPONENTS
// import Video from "../ui/Video";
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
      <small>Web Developer, Designer, Digital Atist</small>
      <p>
        I'm James McConnell, web developer who belives in keeping up with
        current trends and vendor best practices. I take pride in crafting clean
        and efficient user interfaces. My passion is in blurring the lines
        between art and code. Currently diving deep into Node.js.
      </p>
      <p>
        I am a problem solver, who enjoys working as part of a team. Rabbit Ears
        Design is the company I formed for my freelance work and the pseudo name
        I use for social media.
      </p>
      <p>
        Currently employed with Blueacorn iCi as an AEM Front End Developer.{" "}
      </p>
      {/* <Video url="https://www.youtube.com/embed/KDhCjJzWFtg" />
      <small>Checkout this video to learn more about me.</small> */}

      {/* <Button>Hire Me!</Button> */}
    </div>
  );
}

export default Bio;
