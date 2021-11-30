import React from "react";
// COMPONENTS
import LinkElement from "../ui/LinkElement";
import Emoji from "../emoji/Emoji";
// CSS
import classes from "./DirectoryCard.module.css";
function DirectoryCard(props) {
  return (
    <div className={classes.card}>
      <Emoji symbol={props.emoji} />
      <h1>{props.title}</h1>
      <LinkElement path={props.path}>{props.linkTitle}</LinkElement>
    </div>
  );
}

export default DirectoryCard;
