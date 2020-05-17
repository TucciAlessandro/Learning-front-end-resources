import React, { useState } from "react";
import Section from "../components/Section";
import { data } from "../Data/Seeddata";
import DisplayResource from "../components/DisplayResource";
import styled from "styled-components";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { useMyThemeContext } from "../context/ThemeContexts";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";

const Col = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

function Homepage() {
  const [state, setState] = useState(data);
  const [search, setSearch] = useState("");
  const { toggleTheme } = useMyThemeContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const { resources } = state;

  const filteredResources = resources.filter(({ name }) =>
    name.toLocaleLowerCase().includes(search.toLowerCase())
  );
  return (
    <Section>
      <Navbar>
        <Input
          value={search}
          handleChange={handleChange}
          leftIcon={faSearch}
          onLeftIconClick={() => console.log("ciao from outside")}
        />
        <Button size="small" color="secondary" onClick={toggleTheme}>
          Swap Theme!
        </Button>
      </Navbar>
      <Col>
        {filteredResources.map((resource) => (
          <DisplayResource resource={resource} />
        ))}
      </Col>
    </Section>
  );
}

export default Homepage;
