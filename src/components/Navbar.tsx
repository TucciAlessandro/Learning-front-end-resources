import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
  width: 100%;
  height: 5%;
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
    <>
      <StyledNavbar>
        <Row>
          <Link to="/">
            <StyledLogo>UTILITIESPICKER</StyledLogo>
          </Link>
          {children}
        </Row>
      </StyledNavbar>
      <Hr />
    </>
  );
}

export default Navbar;
