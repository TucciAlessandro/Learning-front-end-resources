import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../Data/Seeddata";
import DisplaySingleResource from "../components/DisplaySingleResource";
import Section from "../components/Section";

function Resource() {
  const [state, setState] = useState(data);

  let { id } = useParams();

  const { resources } = state;
  const resourceToDisplay = resources.find((resource) => resource.id === id);

  console.log(resources[0].id);
  console.log(id);
  return (
    <Section>
      {resourceToDisplay && (
        <DisplaySingleResource resource={resourceToDisplay} />
      )}
    </Section>
  );
}

export default Resource;
