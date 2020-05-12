import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../Data/Seeddata";
import DisplaySingleVideo from "../components/DisplaySingleVideo";
import DisplaySingleArticle from "../components/DisplaySingleArticle";
import Section from "../components/Section";

function Resource() {
  const [state, setState] = useState(data);

  let { id } = useParams();

  const { resources } = state;
  const resourceToDisplay = resources.find((resource) => resource.id === id);

  return (
    <Section>
      {resourceToDisplay && resourceToDisplay.type === "video" ? (
        <DisplaySingleVideo resource={resourceToDisplay} />
      ) : (
        resourceToDisplay && (
          <DisplaySingleArticle resource={resourceToDisplay} />
        )
      )}
    </Section>
  );
}

export default Resource;
