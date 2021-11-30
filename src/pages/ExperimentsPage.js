import React from "react";

// COMPONENTS
import LinkElement from "../components/ui/LinkElement";
import ArtGallery from "../components/art/ArtGallery";
import Clock from "../components/clock/Clock";
function ExperimentsPage() {
  return (
    <div>
      <Clock />
      <LinkElement path={"/experiments/details"}>
        Half-baked projects and art gallery
      </LinkElement>
    </div>
  );
}

export default ExperimentsPage;
