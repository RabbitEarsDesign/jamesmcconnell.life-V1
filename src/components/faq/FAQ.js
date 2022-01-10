import React from "react";
// CSS
import classes from "./FAQ.module.css";

const FAQ = (props) => {
  return (
    <div className={classes.faq}>
      <h3 className={classes.faqTitle}>{props.question}</h3>
      <p>{props.answer}</p>
      <button>
        <i className="fas fa-chevron-down"></i>
        <i className="fa fa-times"></i>
      </button>
    </div>
  );
};

export default FAQ;
