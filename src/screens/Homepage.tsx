import React, { useState } from "react";
import Section from "../components/Section";
import { data } from "../Data/Seeddata";
import Resource from "../components/DisplayResource";
import styled from "styled-components";

import Input from "../components/Input";
import Navbar from "../components/Navbar";

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
    <Section>
      <Navbar>
        <Row>
          <Input value={search} handleChange={handleChange} />
        </Row>
      </Navbar>
      <Col>
        {filteredResources.map((resource) => (
          <Resource resource={resource} />
        ))}
      </Col>
    </Section>
  );
}

export default Homepage;
