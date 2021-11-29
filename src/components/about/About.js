import React from "react";
// COMPONENTS
import Bio from "./Bio";
import Technologies from "./Technologies";
import Contact from "../contact/Contact";
// CSS
import classes from "./About.module.css";
function About() {
  return (
    <section className={classes.about}>
      <div className={classes.flex}>
        <Contact />
        <Bio />
      </div>
      <Technologies />
    </section>
  );
}

export default About;
