import React, { useState, ReactNode } from "react";
import styled, { keyframes } from "styled-components";

const slideInRight = keyframes`
  from {
    -webkit-transform: translateX(-10rem);
            transform: translateX(-10rem);
  }
  to {
    -webkit-transform: translateX(0rem);
            transform: translateX(0rem);
  }
`;

const slideInLeft = keyframes`
  from {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(-10rem);
            transform: translateX(-10rem);
  }
`;
const StyledSideNavBar = styled.nav<StyledSideNavBarProps>`
  position: fixed;
  width: 10rem;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  animation: ${(props) =>
    props.showing ? slideInRight : slideInLeft} 0.5s ease-in-out forwards;
  
`;

interface SideNavBarProps {
  showing?: boolean;
  children: ReactNode;
}

interface StyledSideNavBarProps {
  showing: boolean;
}

const SideNavBar = ({ showing = false, children }: SideNavBarProps) => {
  return (
    <>
      <StyledSideNavBar showing={showing}>{children}</StyledSideNavBar>
    </>
  );
};
export default SideNavBar;
