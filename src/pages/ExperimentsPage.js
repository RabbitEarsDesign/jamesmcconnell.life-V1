import React from "react";
import { useParams, Outlet } from "react-router";
// COMPONENTS
import LinkElement from "../components/ui/LinkElement";
import ArtGallery from "../components/art/ArtGallery";
import Experiments from "../components/experiments/Experiments";
import Clock from "../components/clock/Clock";
import Heading1 from "../components/ui/headers/Heading1";
function ExperimentsPage(props) {
  const params = useParams();
  console.log(params.experiments);
  return (
    <div id="test">
      <Heading1>The Lab</Heading1>
      {props.children}
      <Clock />
      <LinkElement path={"/experiments/details"}>
        Half-baked projects and art gallery
      </LinkElement>
      <Outlet />
    </div>
  );
}

export default ExperimentsPage;
