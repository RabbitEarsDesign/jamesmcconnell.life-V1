import React from "react";
// COMPONENTS
import DirectoryCard from "./DirectoryCard";
// CSS
import classes from "./Directory.module.css";
function Directory() {
  return (
    <section className={classes.directory}>
      <DirectoryCard
        path="/about"
        emoji="🥸"
        title="Who am I?"
        linkTitle="About"
      />
      <DirectoryCard
        path="/experiments"
        emoji="👨‍🔬"
        title="I've been experimenting"
        linkTitle="Visit the lab"
      />
    </section>
  );
}

export default Directory;
