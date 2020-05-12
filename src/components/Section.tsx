import React, { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`

  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }

`;

const StyledSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 0;
  animation: ${fadeIn} 0.2s ease-in;
`;

interface Props {
  children: ReactNode;
}

function Section({ children }: Props) {
  return <StyledSection>{children}</StyledSection>;
}

export default Section;
