// IMAGES
import moment from "./moment.png";
import red from "./red.png";
import fliklists from "./fliklists.png";
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
        img={fliklists}
        title="FlikLists"
        url="https://fliklists.web.app"
        github="https://github.com/RabbitEarsDesign/FlikLists-v6"
        description="FlikLists.com is my first attempt to build a full scale React application on my own. As a fan of movies and cinema I wanted to create a place for people to keep track of movies they want to see so that they have a simple way of remembering them. I implemented login/signup features with the help of Google Firebase. Users can change their password on the website and every user has a unique list of movies they have saved. FlikLists.com was a great oppertunity to work with context inside of React as well as implementing routing and protected routes"
      />
      <Project
        img={red}
        title="RabbitEarsDesign.com"
        url="https://rabbitearsdesign.com"
        github="https://github.com/RabbitEarsDesign/portfolio_v3"
        description="Rabbit Ears Design is the website for my freelance business. Upon first designing the site it was important to convey a sense of modernity and style that represents my business well. This was the first real website I launched and it served as a place to learn alot of unique css tips and tricks. The image carousels were built using Splide.js and Swiper.js, both are useful libraries. RabbitEarsDesign.com prioratizes accessibility and performance."
      />
      <Project
        img={moment}
        title="MomentSkisGallery.com"
        url="https://momentskisgallery.com"
        github="https://github.com/RabbitEarsDesign/moment_skis_gallery"
        description="Moment Skis Gallery is a virtual museum built to showcase all of the unique ski topsheet graphics designed by Moment Skis since their founding over a decade ago. This is a project built entirely for personal enjoyment and is updated periodically when time allows. Ultimately it will be a place to learn about each ski and follow the history of the company as they continue designing rad art on skis. Click the link to explore for yourself!"
      />
    </section>
  );
};

export default ProjectGallery;
