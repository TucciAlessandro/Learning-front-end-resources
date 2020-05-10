import React from "react";
import { Resource } from "../Data/Seeddata";
import styled from "styled-components";

const StyledResource = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40rem;
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
  width: 50%;
  align-self: flex-end;
  margin-top: 1.5rem;
`;

const Hr = styled.hr`
  width: 95%;
  border: 0;
  height: 0;
  border-top: 2px solid #2c3e50;
`;
const Paragraph = styled.p`
  width: 40%;
  color: white;
  font-family: "Manrope", sans-serif;
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
  min-height: 20rem;
  width: 40%;
  /* margin-top: 3rem; */
`;

const Button = styled.button`
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

function DisplayResource({
  resource: { resourceUrl, name, description },
}: Props) {
  return (
    <StyledResource>
      <Header>{name}</Header>
      <Hr />
      <Row>
        <Iframe
          src={resourceUrl}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></Iframe>
        <Paragraph>{description}</Paragraph>
      </Row>
      <ButtonRow>
        <Button>Do you like me?</Button>
        <Button>Do you like me?</Button>
        <Button>Do you like me?</Button>
      </ButtonRow>
    </StyledResource>
  );
}

export default DisplayResource;
