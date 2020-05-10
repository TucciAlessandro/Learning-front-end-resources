import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const StyledInput = styled.input`
  /* margin: 2rem; */
  height: 1.5rem;
  width: 10rem;
  border: none;
  color: white;
  /* border-radius: 5px; */
  background-color: transparent;
  border-bottom: 2px solid #fafafa;

  &:focus {
    outline: none;
    /* border-bottom: 2px solid #fafafa; */
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

const SearchIcon = styled(FontAwesomeIcon)`
  color: #fafafa;
  margin: 0.3rem 0.2rem 0.1rem 0.2rem;
  /* border-bottom: 2px solid #fafafa; */
`;

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
function Input({ value, handleChange }: Props) {
  return (
    <InputContainer>
      <SearchIcon icon={faSearch} />
      <StyledInput
        value={value}
        onChange={handleChange}
        placeholder="Search..."
      />
    </InputContainer>
  );
}

export default Input;
