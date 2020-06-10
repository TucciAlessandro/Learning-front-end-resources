import React, { useState, ReactNode } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
display: flex;
size: 1rem;
flex-direction: column;
justify-content: flex-start;
`
const StyledSideNavBar = styled.nav<StyledSideNavBarProps>`
  position: fixed;
  width: 10rem;
  height: 100%;
  background-color: papayawhip;
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  /* justify-content: center; */
  animation: ${(props) => (props.showing ? slideInRight : slideInLeft)} 0.5s
    ease-in-out forwards;
`;

interface SideNavBarProps {
  showing?: boolean;
  children: ReactNode;
  onClose?: () => void;
}

interface StyledSideNavBarProps {
  showing: boolean;
}

const SideNavBar = ({
  onClose,
  showing = false,
  children,
}: SideNavBarProps) => {
  return (
    <>
      <StyledSideNavBar showing={showing}>
        <StyledFontAwesomeIcon icon={faTimes} onClick={onClose} />
        {children}
      </StyledSideNavBar>
    </>
  );
};
export default SideNavBar;
