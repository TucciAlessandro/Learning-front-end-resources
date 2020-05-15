import React, { useState } from "react";
import Section from "../components/Section";
import { data } from "../Data/Seeddata";
import DisplayResource from "../components/DisplayResource";
import styled from "styled-components";

import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { useMyThemeContext } from "../context/ThemeContexts";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SideNavBar from "../components/SideNavBar";
import Button from "../components/Button";

const Col = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Buttons = styled.button`
  background-color: #2c3e50;
  color: white;
  border-radius: 6px;
  border: 1px solid #2c3e50;
  font-size: 16px;
  /* padding: 15px 30px; */
  text-decoration: none;
  &:focus {
    outline: none;
    border: 1px solid white;
  }
  &:hover {
    border: 1px solid white;
    transform: translateY(-0.3rem);
  }
  transition: all 0.3s ease-in-out;
`;

function Homepage() {
  const [state, setState] = useState(data);
  const [search, setSearch] = useState("");
  const { toggleTheme } = useMyThemeContext();
  const [showingSide, setShowingSide] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const showSideNavbar = () => setShowingSide(!showingSide);
  const { resources } = state;

  const filteredResources = resources.filter(({ name }) =>
    name.toLocaleLowerCase().includes(search.toLowerCase())
  );

  return (
    <Section>
      <SideNavBar showing={showingSide}>a</SideNavBar>
      <Navbar>
        <Input
          value={search}
          handleChange={handleChange}
          leftIcon={faSearch}
          onLeftIconClick={() => console.log("ciao from outside")}
        />
        <Buttons onClick={toggleTheme}>Swap Theme</Buttons>
        <Button size={"small"} color={"secondary"} onClick={showSideNavbar}>
          SideNavbar!
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
