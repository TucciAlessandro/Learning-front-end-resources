import React, { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

type Direction = "left" | "right" | "up" | "down";

const getAnimation = (distance: number | string, direction?: Direction) => {
  const getTranslate = (dist: number | string, dir?: Direction): string => {
    switch (dir) {
      case "down":
        return `translateY(${distance}px);`;
      case "up":
        return `translateY(-${distance}px);`;
      case "left":
        return `translateX(-${distance}px);'`;
      case "right":
        return `translateX(${distance}px);`;

      default:
        return "";
    }
  };

  return keyframes`
    0% {
        opacity:0;
        transform: ${getTranslate(distance, direction)}}
    100% {
        opacity:1;
        transform: translateX(0)}
    }
    `;
};

interface FadeProps {
  distance: number | string;
  duration: number;
  direction?: Direction;
  delay?: number;
}
const Fade = styled.div<FadeProps>`
  animation: ${(props) => getAnimation(props.distance, props.direction)} 3s
    ease-in-out;
`;

interface Props {
  duration: number;
  delay: number;
  distance: number | string;
  direction?: Direction;
  children: ReactNode;
}

function FadeIn({ duration, delay, distance, direction, children }: Props) {
  console.log(distance, direction);
  return (
    <Fade direction={direction} distance={distance} duration={duration}>
      {children}
    </Fade>
  );
}

export default FadeIn;
