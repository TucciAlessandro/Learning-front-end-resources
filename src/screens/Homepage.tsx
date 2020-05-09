import React, { useState } from "react";
import Section from "../components/Section";
import { data } from "../Data/Seeddata";
import Resource from "../components/DisplayResource";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Input = styled.input`
  /* margin: 2rem; */
  height: 1.5rem;
  width: 10rem;
  border: none;
  color: white;
  /* border-radius: 5px; */
  background-color: transparent;
  border-bottom: 2px solid #fafafa;

  &:focus {
    outline: none;
    /* border-bottom: 2px solid #fafafa; */
  }

  &::placeholder {
    color: white;
    text-transform: uppercase;
  }
  transition: all 0.3s ease-in-out;

  display: "flex";
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 1.5rem;
  border-bottom: 2px solid #fafafa;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  color: #fafafa;
  margin: 0.3rem 0.2rem 0.1rem 0.2rem;
  /* border-bottom: 2px solid #fafafa; */

`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Col = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

function Homepage() {
  const [state, setState] = useState(data);
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const { resources } = state;

  const filteredResources = resources.filter(({ name }) =>
    name.toLocaleLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Section>
        <Row>
          <InputContainer>
            <SearchIcon icon={faSearch} />
            <Input
              value={search}
              onChange={handleChange}
              placeholder="Search..."
            />
          </InputContainer>
        </Row>
        <Col>
          {filteredResources.map((resource) => (
            <Resource resource={resource} />
          ))}
        </Col>
      </Section>
    </>
  );
}

export default Homepage;
