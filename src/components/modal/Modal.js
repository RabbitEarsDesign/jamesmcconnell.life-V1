import React from "react";
import ReactDOM from "react-dom";

// CSS
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={() => {
        props.setModalIsShown(false);
      }}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop setModalIsShown={props.setModalIsShown} />,
        portalEl
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </>
  );
};

export default Modal;
