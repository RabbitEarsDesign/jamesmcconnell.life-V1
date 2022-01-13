import silhouette from "./silhouette3.png";
// PDF

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// COMPONENTS
import Button from "../ui/Button";
import ButtonInternal from "../ui/ButtonInternal";
// CSS
import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <section className={classes.landing}>
      <div className={classes.flex}>
        <div className={classes.details}>
          <h1>Hello World</h1>
          <h1>I'm James</h1>
          <p>
            Web developer, designer, and digital artist, with a passion for
            building functional and user friendly web applications, utilizing
            technologies such as JavaScript/ReactJS, HTML, & CSS
          </p>
          <div className={classes.social}>
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
          <Button url="#projects" target="">
            View Projects
          </Button>
          <ButtonInternal url="/art">View Art</ButtonInternal>
        </div>
        <div className={classes.img}>
          <img src={silhouette} alt="Silhouette" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
