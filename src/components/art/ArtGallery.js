import React, { useEffect, useState } from "react";
// COMPONENTS
import Heading2 from "../ui/headers/Heading2";
import Photo from "./photo/Photo";
import LazyImg from "./lazyImg/LazyImg";
// HOOKS
import useFirestore from "../../hooks/use-firestore";
// CSS
import classes from "./ArtGallery.module.css";

function ArtGallery(props) {
  const { setModalIsShown, setSelectedImg } = props;

  const { docs } = useFirestore("images");

  return (
    <section className={classes.artGallery}>
      <Heading2>{docs.length} Days</Heading2>

      <p>
        I create these images 7 days a week 365 days per year. They are done
        from start to finish each day, and yes, that might remind you of
        somebody...
      </p>

      <aside className={classes.flex}>
        {docs &&
          docs.map((doc) => (
            // <Photo
            //   setModalIsShown={setModalIsShown}
            //   setSelectedImg={setSelectedImg}
            //   key={doc.id}
            //   src={doc.url}
            // />
            <LazyImg
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
