import React, { ReactNode } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";

const NavbarAnimation = keyframes`
from {
  top: -20px;
}
to{
  top: 0px;
}`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
// const Wrapper = styled.div`
//   position: fixed;
//   width: 100%;
//   height: 5%;
//   animation: ${NavbarAnimation} 0.5s ease-in-out;
// `;

const StyledNavbar = styled.nav`
  position: fixed;
  width: 100%;
  height: 5%;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Hr = styled.hr`
  position: fixed;
  top: 5%;
  width: 100%;
  border: 0;
  height: 0;
  margin: 0;
  border-top: 2px solid #fafafa;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;

const StyledLogo = styled.h1`
  margin: 0;
  color: white;
  font-family: "Manrope", sans-serif;
`;

interface Props {
  children: ReactNode;
}

function Navbar({ children }: Props) {
  return (
    <>
      <StyledNavbar>
        <Row>
          <StyledLink to="/">
            <StyledLogo>UTILITIESPICKER</StyledLogo>
          </StyledLink>
          {children}
        </Row>
      </StyledNavbar>
      <Hr />
    </>
  );
}

export default Navbar;
