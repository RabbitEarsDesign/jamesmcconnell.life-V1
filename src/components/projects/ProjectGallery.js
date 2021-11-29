// IMAGES
import moment from "./moment.png";
import red from "./red.png";
// COMPONENTS
import Project from "./Project";
import Heading1 from "../ui/headers/Heading1";
// CSS
import classes from "./ProjectGallery.module.css";

const ProjectGallery = () => {
  return (
    <section className={classes.projectGallery} id="projects">
      {/* <h1>Projects</h1> */}
      <Heading1>Recent Projects</Heading1>
      <Project
        img={"https://source.unsplash.com/random/800x600"}
        title="FlikLists.com"
        url="https://google.com"
        github="https://google.com"
      />
      <Project
        img={red}
        title="RabbitEarsDesign.com"
        url="https://rabbitearsdesign.com"
        github="https://google.com"
      />
      <Project
        img={moment}
        title="MomentSkisGallery.com"
        url="https://momentskisgallery.com"
        github="https://google.com"
      />
    </section>
  );
};

export default ProjectGallery;
