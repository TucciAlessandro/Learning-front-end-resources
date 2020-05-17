import React from "react";
import { Resource } from "../Data/Seeddata";
import styled from "styled-components";
import Navbar from "./Navbar";
import FadeIn from "./FadeIn";
import Paragraph from "./Paragraph";
import Button from "./Button";

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
  height: 100%;
  /* min-height: 30rem; */
  width: 80%;
`;

const StyledParagraph = styled(Paragraph)`
  width: 80%;
  margin-bottom: 2rem;
  color: white;
  font-family: "Manrope", sans-serif;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 45rem;
`;

const StyledButton = styled(Button)`
  color: #2c3e50;
  text-decoration: none;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Suggestions = styled.p`
  font-family: "Manrope", sans-serif;
  color: white;
  margin-left: 2rem;
`;

interface Props {
  resource: Resource;
}

function DisplaySingleArticle({ resource }: Props) {
  const handleClick = () => window.open(resource.resourceUrl, "_blank");
  console.log(resource.resourceUrl);

  return (
    <>
      <Navbar>
        <FadeIn direction="right" duration={2} delay={1} distance={150}>
          <Header>{resource.name}</Header>
        </FadeIn>
      </Navbar>
      <StyledSingleResource>
        <StyledParagraph>{resource.description}</StyledParagraph>
        <ButtonRow>
          <StyledButton color="primary" size="large" onClick={handleClick}>
            Let's go to the source!
          </StyledButton>
        </ButtonRow>
        <Row>
          <Iframe src={resource.resourceUrl}></Iframe>
        </Row>
        <Suggestions>
          THERE GOES THE SUGGESTIONS OR CODEPEN SECTIONS!
        </Suggestions>
        <Suggestions>COMMENTS GO HERE!</Suggestions>
      </StyledSingleResource>
    </>
  );
}

export default DisplaySingleArticle;
