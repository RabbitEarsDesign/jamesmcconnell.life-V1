import React, { useEffect, useState } from "react";
// CSS
import classes from "./Photo.module.css";
// @todo Create a hook const [] = useImg()
// @todo it will likely be need to useContext or REDUX to manage modal state
// @todo eventually want to get info such as way to download img and enter email for download
function Photo(props) {
  const { src, setModalIsShown, setSelectedImg } = props;

  const showModalHandler = () => {
    props.setModalIsShown(true);
    setSelectedImg(props.src);
  };

  return (
    <div className={classes.photo} onClick={showModalHandler}>
      <img src={props.src} alt="daily digital art" />
    </div>
  );
}

export default Photo;
