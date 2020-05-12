import React from "react";
import { Resource } from "../Data/Seeddata";
import styled from "styled-components";
import Navbar from "./Navbar";
import FadeIn from "./FadeIn";
import { Redirect } from "react-router-dom";

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
  height: 120%;
  /* min-height: 30rem; */
  width: 60%;
`;

const Paragraph = styled.p`
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
  height: 100%;
`;

const Button = styled.button`
  background-color: white;
  color: #2c3e50;
  border-radius: 6px;
  border: 1px solid #2c3e50;
  font-size: 16px;
  padding: 15px 30px;
  text-decoration: none;
  &:focus {
    outline: none;
    border: 1px solid white;
  }
  &:hover {
    border: 1px solid white;
    transform: translateY(-0.5rem);
  }
  transition: all 0.3s ease-in-out;
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
        <Paragraph>{resource.description}</Paragraph>
        <ButtonRow>
          <Button onClick={handleClick}>Let's go to the source!</Button>
        </ButtonRow>
        <Row>
          <Iframe src={resource.resourceUrl}></Iframe>
          <Suggestions>
            THERE GOES THE SUGGESTIONS OR CODEPEN SECTIONS!
          </Suggestions>
        </Row>
        <Suggestions>COMMENTS GO HERE!</Suggestions>
      </StyledSingleResource>
    </>
  );
}

export default DisplaySingleArticle;
