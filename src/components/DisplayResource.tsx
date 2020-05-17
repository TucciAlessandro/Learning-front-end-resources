import React from "react";
import { Resource } from "../Data/Seeddata";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Paragraph from "./Paragraph";

const StyledResource = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45rem;
  margin: 0 3rem;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
`;
const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  align-self: flex-end;
  margin-top: 1.5rem;
`;

const ModifiedLink = styled(Link)`
  /* width: 80%;
  height: 80%; */
`;

const Hr = styled.hr`
  width: 95%;
  border: 0;
  height: 0;
  border-top: 2px solid #2c3e50;
`;

const Header = styled.h1`
  font-family: "Manrope", sans-serif;
  letter-spacing: 2px;
  margin-block-end: 0;
  margin-block-start: 0;
  color: white;
`;
const Thumbnail = styled.img`
  border: 1px solid black;
  height: 100%;
  width: 100%;
`;
const Buttons = styled.button`
  background-color: #2c3e50;
  color: white;
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

interface Props {
  resource: Resource;
}

function DisplayResource({ resource }: Props) {
  let history = useHistory();

  const handleClick = () => {
    console.log(resource);
    history.push(`/resource/${resource.id}`);
    // console.log(name, resourceUrl, description, id);
  };
  return (
    <StyledResource>
      <FadeIn direction="right" duration={3} delay={1} distance={200}>
        <Header>{resource.name}</Header>
      </FadeIn>
      <Hr />
      <Row>
        <ModifiedLink to={`/resource/${resource.id}`}>
          <Thumbnail src={resource.thumbnail}></Thumbnail>
        </ModifiedLink>
        <Paragraph>{resource.description}</Paragraph>
      </Row>
      <ButtonRow>
        <Button size="large" color="primary">
          Do you like me?
        </Button>
        <Button size="large" color="primary" onClick={handleClick}>
          Want to see more?
        </Button>
        <Button size="large" color="primary">
          Leave a comment!
        </Button>
      </ButtonRow>
    </StyledResource>
  );
}

export default DisplayResource;
