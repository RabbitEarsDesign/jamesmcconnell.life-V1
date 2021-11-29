import React, { useEffect, useState } from "react";
// COMPONENTS
import Heading2 from "../ui/headers/Heading2";
// CSS
import classes from "./ArtGallery.module.css";

function ArtGallery() {
  const [iframeSource, setIframeSource] = useState("");

  useEffect(() => {
    setIframeSource("https://snapwidget.com/embed/974776");
  }, [setIframeSource]);
  return (
    <section className={classes.artGallery}>
      <Heading2>Daily Art</Heading2>
      <h1>
        I create a piece of digital art daily, here are some recent ones...
      </h1>
      <iframe
        title="instaGallery"
        src={iframeSource}
        class="snapwidget-widget"
        allowtransparency="true"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </section>
  );
}

export default ArtGallery;
