import React, { useState } from "react";
import Section from "../components/Section";
import { data } from "../Data/Seeddata";
import Resource from "../components/DisplayResource";
import styled from "styled-components";

const Input = styled.input`
  margin: 2rem;
  height: 1.5rem;
  width: 10rem;

  display: "flex";
`;

const Row = styled.div`
  width: 100%;
  display: flex;
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
      <Row>
        <Input value={search} onChange={handleChange} />
      </Row>
      <Row>
        <Section>
          {filteredResources.map((resource) => (
            <Resource resource={resource} />
          ))}
        </Section>
      </Row>
    </>
  );
}

export default Homepage;
