import React, { ReactNode } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const NavbarAnimation = keyframes`
from {
  top: -20px;
}
to{
  top: 0px;
}`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border-bottom: 2px solid #fafafa;
`;
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 5%;
  animation: ${NavbarAnimation} 1s ease-in-out;
`;

const StyledNavbar = styled.nav`
  position: static;
  width: 100%;
  height: 100%;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Hr = styled.hr`
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
    <Wrapper>
      <StyledNavbar>
        <Row>
          <StyledLink to="/">
            <StyledLogo>UTILITIESPICKER</StyledLogo>
          </StyledLink>
          {children}
        </Row>
      </StyledNavbar>
      <Hr />
    </Wrapper>
  );
}

export default Navbar;
