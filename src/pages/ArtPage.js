import React, { useState } from "react";

// COMPONENTS
import ArtGallery from "../components/art/ArtGallery";
import Modal from "../components/modal/Modal";

function ArtPage() {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  selectedImg && console.log("img selected");

  return (
    <div>
      {modalIsShown && (
        <Modal setModalIsShown={setModalIsShown} selectedImg={selectedImg}>
          <img src={selectedImg} alt="daily img" />
        </Modal>
      )}
      <ArtGallery
        setModalIsShown={setModalIsShown}
        setSelectedImg={setSelectedImg}
      />
    </div>
  );
}

export default ArtPage;
