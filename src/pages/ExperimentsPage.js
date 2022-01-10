import React from "react";
import { useParams } from "react-router";
// COMPONENTS
import ArtGallery from "../components/art/ArtGallery";
import Clock from "../components/clock/Clock";
import Heading1 from "../components/ui/headers/Heading1";
import DrawingBoard from "../components/drawingBoard/DrawingBoard";
import ProjectLayout from "../components/layout/projectLayout/ProjectLayout";

function ExperimentsPage(props) {
  const params = useParams();
  console.log(params.experiments);
  return (
    <div>
      <Heading1>The Lab</Heading1>
      {props.children}
      <Clock />
      {/* <DrawingBoard /> */}
      <ProjectLayout />
      <ArtGallery />
    </div>
  );
}

export default ExperimentsPage;
