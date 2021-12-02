import React from "react";
// COMPONENTS
import ProjectLayout from "../layout/projectLayout/ProjectLayout";
import ArtGallery from "../art/ArtGallery";
// CSS
import classes from "./Experiments.module.css";
function Experiments() {
  return (
    <section className={classes.experiments}>
      <ProjectLayout />
      <ArtGallery />
    </section>
  );
}

export default Experiments;
