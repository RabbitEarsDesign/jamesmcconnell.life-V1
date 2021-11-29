import React from "react";
// COMPONENTS
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
// CSS
import classes from "./Layout.module.css";
function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
