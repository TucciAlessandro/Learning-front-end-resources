import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 0;
`;

interface Props {
  children: ReactNode;
}

function Section({ children }: Props) {
  return <StyledSection>{children}</StyledSection>;
}

export default Section;
