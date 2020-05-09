import React from "react";
import { Resource } from "../Data/Seeddata";

interface Props {
  resource: Resource;
}

function DisplayResource({
  resource: { resourceUrl, name, description },
}: Props) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <iframe
        width="560"
        height="315"
        src={resourceUrl}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}

export default DisplayResource;
