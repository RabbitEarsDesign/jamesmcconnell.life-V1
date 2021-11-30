import React from "react";
// COMPONENTS
import Landing from "../components/landing/Landing";
import ProjectGallery from "../components/projects/ProjectGallery";
import Directory from "../components/directory/Directory";

function HomePage() {
  return (
    <div>
      <Landing />
      <ProjectGallery />
      <Directory />
    </div>
  );
}

export default HomePage;
