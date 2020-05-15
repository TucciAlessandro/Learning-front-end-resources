import React, { useState, ReactNode } from "react";
import styled from "styled-components";

const StyledSideNavBar = styled.nav<SideNavBarProps>`
position: fixed;
  width: 10%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* transform: ${(props) =>
    props.showing ? "translateX(100%)" : "translateX(0px)"}; */
`;

interface SideNavBarProps {
  showing?: boolean;
  children: ReactNode;
}

const SideNavBar = ({ showing, children }: SideNavBarProps) => {
  return <>{showing && <StyledSideNavBar>{children}!</StyledSideNavBar>};</>;
};
export default SideNavBar;
