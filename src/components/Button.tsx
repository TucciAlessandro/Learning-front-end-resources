import React, { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps {
  size?: string;
  color: Variant;
  children: ReactNode;
}

type Variant = "primary" | "secondary" | "danger";

// const buttonSizes: any = {
//   sm: "5px 10px",
//   md: "10px 20px",
//   lg: "15px 30px",
// };

const getBackground = (variant: Variant, props: any) => {
  const getVariant = (variant: Variant) => {
    switch (variant) {
      case "primary":
        return props.theme.buttonVariant[variant];

      case "secondary":
        return props.theme.buttonVariant[variant];

      case "danger":
        return props.theme.buttonVariant[variant];

      default:
        return "";
    }
  };
  return getVariant(variant);
};

const getSize = (size: string | undefined = "medium") => {
  switch (size) {
    case "small":
      return `5px 10px`;
    case "medium":
      return `10px 20px`;
    case "large":
      return `15px 30px`;
  }
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => getBackground(props.color, props)};
  color: white;
  border-radius: 6px;
  border: 1px solid #2c3e50;
  font-size: 16px;
  padding: ${(props) => getSize(props.size)};
  text-decoration: none;
  &:focus {
    outline: none;
    border: 1px solid white;
  }
  &:hover {
    border: 1px solid white;
    transform: translateY(-0.3rem);
  }
  transition: all 0.3s ease-in-out;
`;

const Button = ({
  size,
  color,
  children,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton size={size} color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
