import { NavLink } from "react-router-dom";
// IMAGES
import logo from "./logo.png";
// CSS
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className={classes.btn}>
            <NavLink to="/experiments">The Lab</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
