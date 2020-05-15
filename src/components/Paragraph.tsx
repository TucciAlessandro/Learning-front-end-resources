import React, { ReactNode } from "react";
import styled from "styled-components";

interface ParagraphProps {
  children: string;
  limit?: number;
}
const StyledParagraph = styled.p`
  width: 40%;
  color: white;
  font-family: "Manrope", sans-serif;
`;

const Paragraph = ({ children, limit = 1000 }: ParagraphProps) => {
  return <StyledParagraph>{children.substring(0, limit)}</StyledParagraph>;
};

export default Paragraph;
