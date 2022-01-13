import React, { useEffect, useState } from "react";
// COMPONENTS
import Heading2 from "../ui/headers/Heading2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Photo from "./photo/Photo";
import UploadForm from "../uploadForm/UploadForm";
// HOOKS
import useFirestore from "../../hooks/use-firestore";
// CSS
import classes from "./ArtGallery.module.css";

function ArtGallery(props) {
  const { setModalIsShown, setSelectedImg } = props;

  const { docs } = useFirestore("images");

  return (
    <section className={classes.artGallery}>
      <Heading2>Daily Art</Heading2>
      <h1>I create a piece of digital every day, check it out...</h1>

      <aside className={classes.flex}>
        {docs &&
          docs.map((doc) => (
            <Photo
              setModalIsShown={setModalIsShown}
              setSelectedImg={setSelectedImg}
              key={doc.id}
              src={doc.url}
            />
          ))}
      </aside>
    </section>
  );
}

export default ArtGallery;
