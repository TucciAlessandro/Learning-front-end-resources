import React from "react";
import { Resource } from "../Data/Seeddata";
import styled from "styled-components";
import Navbar from "./Navbar";
import FadeIn from "./FadeIn";

const StyledSingleResource = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  margin: 5rem 3rem;
`;

const Header = styled.h1`
  font-family: "Manrope", sans-serif;
  letter-spacing: 2px;
  margin-block-end: 0;
  margin-block-start: 0;
  color: white;
`;

const Iframe = styled.iframe`
  border: 1px solid black;
  height: 50%;
  min-height: 30rem;
  width: 60%;
`;

const Paragraph = styled.p`
  width: 80%;
  margin-top: 2rem;
  color: white;
  font-family: "Manrope", sans-serif;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const Suggestions = styled.p`
  font-family: "Manrope", sans-serif;
  color: white;
  margin-left: 2rem;
`;

interface Props {
  resource: Resource;
}

function DisplaySingleVideo({ resource }: Props) {
  return (
    <>
      <Navbar>
        <FadeIn direction="right" duration={2} delay={1} distance={150}>
          <Header>{resource.name}</Header>
        </FadeIn>
      </Navbar>
      <StyledSingleResource>
        <Row>
          <Iframe
            src={resource.resourceUrl}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></Iframe>
          <Suggestions>
            {" "}
            THERE GOES THE SUGGESTIONS OR CODEPEN SECTIONS!
          </Suggestions>
        </Row>
        <Paragraph>{resource.description}</Paragraph>
        <Suggestions>COMMENTS GO HERE!</Suggestions>
      </StyledSingleResource>
    </>
  );
}

export default DisplaySingleVideo;
