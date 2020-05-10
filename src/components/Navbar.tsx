import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  width: 100%;
  height: 5%;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
`;
const Hr = styled.hr`
  width: 100%;
  border: 0;
  height: 0;
  margin: 0;
  border-top: 2px solid #fafafa;
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
        <StyledLogo>UTILITIESPICKER</StyledLogo>
        {children}
      </StyledNavbar>
      <Hr />
    </>
  );
}

export default Navbar;
