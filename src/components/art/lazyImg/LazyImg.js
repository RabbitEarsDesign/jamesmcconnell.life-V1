import React from "react";
// Lazyload
import LazyLoad from "react-lazyload";

// CSS
import classes from "./LazyImg.module.css";

function LazyImg(props) {
  const { src, setModalIsShown, setSelectedImg } = props;

  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  const showModalHandler = () => {
    props.setModalIsShown(true);
    setSelectedImg(props.src);
  };

  return (
    <div className={classes.lazyImg} onClick={showModalHandler}>
      <div ref={refPlaceholder} className={classes.placeholder} />
      <LazyLoad>
        <img
          src={src}
          alt="daily digital art"
          onLoad={removePlaceholder}
          onError={removePlaceholder}
        />
      </LazyLoad>
    </div>
  );
}

export default LazyImg;
