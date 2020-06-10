import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import { data } from "../Data/Seeddata";
import DisplayResource from "../components/DisplayResource";
import styled from "styled-components";
import useEventListener from "../hooks/useEventListener";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { useMyThemeContext } from "../context/ThemeContexts";
import { faSearch, faIcons, faBars } from "@fortawesome/free-solid-svg-icons";
import SideNavBar from "../components/SideNavBar";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDataContext } from "../context/DataContext";

const Col = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  outline: none;
  color: black;
  border-bottom: 1px solid white;
`;

function Homepage() {
  const [search, setSearch] = useState("");
  const { toggleTheme } = useMyThemeContext();
  const [showingSide, setShowingSide] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { getAllResources } = useDataContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  useEventListener("resize", () => setScreenSize(window.innerWidth));

  const toggleSideNavbar = () => setShowingSide(!showingSide);

  const filteredResources = getAllResources();
  console.log(filteredResources);
  // const filteredResources = allResources.filter(({ name }) =>
  //   name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <Section>
      {screenSize >= 1200 && (
        <Navbar>
          <Input
            value={search}
            handleChange={handleChange}
            leftIcon={faSearch}
            onLeftIconClick={() => console.log("ciao from outside")}
          />
          <Button size={"medium"} color={"danger"} onClick={toggleTheme}>
            Swap Theme
          </Button>
        </Navbar>
      )}
      <div>
        <Button size={"large"} color={"danger"} onClick={toggleSideNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </div>
      {showingSide && (
        <SideNavBar showing={showingSide} onClose={toggleSideNavbar}>
          <StyledLink to="/">HOMEPAGE</StyledLink>
          <StyledLink to="/resources">RESOURCES</StyledLink>
        </SideNavBar>
      )}
      <Col>
        {filteredResources.map((resource) => (
          <DisplayResource resource={resource} />
        ))}
      </Col>
    </Section>
  );
}

export default Homepage;
