// COMPONENTS
import Button from "../ui/Button";
// CSS
import classes from "./Project.module.css";

const Project = (props) => {
  return (
    <aside className={classes.project}>
      <div className={classes.img}>
        <img src={props.img} alt="Project" />
      </div>
      <div className={classes.details}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>

        <Button url={props.github} target="blank">
          View On Github
        </Button>
        <Button url={props.url} target="blank">
          Visit Site
        </Button>
      </div>
    </aside>
  );
};

export default Project;
