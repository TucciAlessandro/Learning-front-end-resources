import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../Data/Seeddata";
import DisplayResource from "../components/DisplayResource";

function Resource() {
  const [state, setState] = useState(data);
  const { resources } = state;
  let { id } = useParams();
  const resourceToDisplay = resources.find((resource) => resource.id ===  id);
  console.log(resourceToDisplay)
  return (
    <>
      {/* <DisplayResource {resourceToDisplay}/> */}
    </>
  );
}

export default Resource;
