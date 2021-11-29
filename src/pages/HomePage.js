import React from "react";
// COMPONENTS
import Landing from "../components/landing/Landing";
import ProjectGallery from "../components/projects/ProjectGallery";
import ArtGallery from "../components/art/ArtGallery";

function HomePage() {
  return (
    <div>
      <Landing />
      <ProjectGallery />
      {/* <ArtGallery /> */}
    </div>
  );
}

export default HomePage;
