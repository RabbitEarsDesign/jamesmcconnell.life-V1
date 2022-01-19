import React, { useState } from "react";

// COMPONENTS
import ArtGallery from "../components/art/ArtGallery";
import Modal from "../components/modal/Modal";
import Button from "../components/ui/Button";

function ArtPage() {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [selectedImg, setSelectedImg] = useState({
    src: null,
    fileNum: null,
  });
  const [docs, setDocs] = useState([]);

  // const setDocsHandler = (docs) => {
  //   setDocs(docs);
  // };

  return (
    <div>
      {modalIsShown && (
        <Modal setModalIsShown={setModalIsShown} selectedImg={selectedImg.src}>
          <img src={selectedImg.src} alt="daily img" />
          <p>
            You can download the image{" "}
            <a href={selectedImg.src} target="_blank" rel="noreferrer">
              here
            </a>
          </p>
        </Modal>
      )}
      <ArtGallery
        setModalIsShown={setModalIsShown}
        setSelectedImg={setSelectedImg}
        // setDocs={setDocsHandler}
      />
    </div>
  );
}

export default ArtPage;
