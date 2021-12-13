import React, { useEffect, useState } from "react";
// COMPONENTS
import Heading2 from "../ui/headers/Heading2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// CSS
import classes from "./ArtGallery.module.css";

function ArtGallery() {
  return (
    <section className={classes.artGallery}>
      <Heading2>Daily Art</Heading2>
      <h1>I create a piece of digital art daily, click the icon to view...</h1>

      <a href="https://www.instagram.com/rabbitearsdesign" target="blank">
        <FontAwesomeIcon icon={faInstagram} className={classes.icon} />
      </a>
    </section>
  );
}

export default ArtGallery;
