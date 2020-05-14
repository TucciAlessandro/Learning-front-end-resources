import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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

const Icon = styled(FontAwesomeIcon)`
  color: #fafafa;
  margin: 0.1rem 0.2rem 0.1rem 0.2rem;
  /* border-bottom: 2px solid #fafafa; */
`;

type IconType = "search" | "ambulance";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  icon?: IconDefinition;
}

function Input({ value, handleChange, icon }: Props) {
  // const getIcon = (icon: IconType) => {
  //   switch (icon) {
  //     case "search":
  //       return faSearch;
  //     // case "ambulance":
  //     //   return faAmbulance;
  //     // case "address":
  //     //   return faAddressBook;
  //     default:
  //       return null;
  //   }
  // };
  // const iconToShow = getIcon(icon);
  return (
    <InputContainer>
      {icon && <Icon icon={icon} />}
      <StyledInput
        value={value}
        onChange={handleChange}
        placeholder="Search..."
      />
    </InputContainer>
  );
}

export default Input;
