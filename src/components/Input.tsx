import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const StyledInput = styled.input`
  height: 1.5rem;
  width: 10rem;
  border: none;
  color: white;
  background-color: transparent;
  border-bottom: 2px solid #fafafa;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
    text-transform: uppercase;
  }
  transition: all 0.3s ease-in-out;
  display: "flex";
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 1.5rem;
  border-bottom: 2px solid #fafafa;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #fafafa;
  margin: 0.1rem 0.2rem 0.1rem 0.2rem;
`;

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  leftIcon?: IconDefinition;
  rightIcon?: IconDefinition;
  onLeftIconClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
}

function Input({
  value,
  handleChange,
  leftIcon,
  onLeftIconClick,
  rightIcon,
}: Props) {
  const handleLeftIconClick = (event: React.MouseEvent<SVGSVGElement>) => {
    console.log("ciao");
    onLeftIconClick && onLeftIconClick(event);
  };
  return (
    <InputContainer>
      {leftIcon && <Icon icon={leftIcon} onClick={handleLeftIconClick} />}
      <StyledInput
        value={value}
        onChange={handleChange}
        placeholder="Search..."
      />
      {rightIcon && <Icon icon={rightIcon} />}
    </InputContainer>
  );
}

export default Input;
