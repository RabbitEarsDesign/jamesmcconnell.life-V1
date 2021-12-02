import React from "react";
// COMPONENTS
import ProjectItem from "./ProjectItem";
// CSS
import classes from "./ProjectLayout.module.css";
function ProjectLayout() {
  return (
    <div className={classes.projectLayout}>
      <div className={classes.projectGroup}>
        <ProjectItem
          url={
            "https://codepen.io/rabbitearsdesign/pen/vYeEGwg/image/small.png"
          }
          link={"https://codepen.io/rabbitearsdesign/pen/vYeEGwg"}
        />{" "}
        <ProjectItem
          url={
            "https://codepen.io/rabbitearsdesign/pen/ZEXYWPw/image/small.png"
          }
          link={"https://codepen.io/rabbitearsdesign/pen/ZEXYWPw"}
        />{" "}
        <ProjectItem
          url={
            "https://codepen.io/rabbitearsdesign/pen/NWaPNEy/image/small.png"
          }
          link={"https://codepen.io/rabbitearsdesign/pen/NWaPNEy"}
        />
      </div>
      <div className={classes.projectGroup}>
        {" "}
        <ProjectItem
          url={
            "https://codepen.io/rabbitearsdesign/pen/vYeEGby/image/small.png"
          }
          link={"https://codepen.io/rabbitearsdesign/pen/vYeEGby"}
        />{" "}
        <ProjectItem
          url={
            "https://codepen.io/rabbitearsdesign/pen/OJxPNqx/image/small.png"
          }
          link={"https://codepen.io/rabbitearsdesign/pen/OJxPNqx"}
        />{" "}
        <ProjectItem
          url={
            "https://codepen.io/rabbitearsdesign/pen/zYExqXg/image/small.png"
          }
          link={"https://codepen.io/rabbitearsdesign/pen/zYExqXg"}
        />
      </div>
    </div>
  );
}

export default ProjectLayout;
