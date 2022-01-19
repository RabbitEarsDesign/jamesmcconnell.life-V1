// Currently not using this component but it can be useful when lazy load is not needed

import React from "react";
// CSS
import classes from "./Photo.module.css";

// @todo eventually want to get info such as way to download img and enter email for download
function Photo(props) {
  const { src, setModalIsShown, setSelectedImg } = props;

  const showModalHandler = () => {
    props.setModalIsShown(true);
    setSelectedImg(props.src);
  };

  return (
    <div className={classes.photo} onClick={showModalHandler}>
      <img src={src} alt="daily digital art" loading="lazy" />
    </div>
  );
}

export default Photo;
