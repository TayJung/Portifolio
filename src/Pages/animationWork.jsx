import React from "react";
import styled, { keyframes } from "styled-components";

export default function AnimationWork() {
  return (
    <Rings>
      <div></div>
      <div></div>
      <div></div>
    </Rings>
  );
}
const Animation = keyframes`
0%{
  transform: rotateZ(20deg)
}
100%{
  transform: rotateZ(100deg) rotateY(360deg)
}
`;
const AnimationTwo = keyframes`
0%{
  transform: rotateZ(100deg) 
}
100%{
  transform: rotateZ(0deg) rotateX(360deg)
}
`;

const AnimationThree = keyframes`
0%{
  transform: rotateZ(100deg) rotateX(-360deg)
100%{
  transform: rotateZ(-100deg) rotateX(360deg)
}
`;

const Rings = styled.section`
  position: relative;
  width: 6em;
  height: 6em;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 320px) and (max-width: 800px) {
    width: 4em;
    height: 4em;
  }

  div {
    position: absolute;
    border-radius: 50%;
    border: 5px solid #f13a8f;
    @media only screen and (min-width: 320px) and (max-width: 800px) {
      border: 3px solid #f13a8f;
    }
  }

  div:nth-child(1) {
    width: 100%;
    height: 100%;
    border: 7px solid #f13a8f;
    animation-name: ${Animation};
    animation-duration: 2s;
    animation-fill-mode: linear;
    animation-iteration-count: infinite;
    @media only screen and (min-width: 320px) and (max-width: 800px) {
      border: 5px solid #f13a8f;
    }
  }

  div:nth-child(2) {
    width: calc(100% * 0.65);
    height: calc(100% * 0.65);
    border: 4px solid #4bc8eb;
    animation-name: ${AnimationTwo};
    animation-duration: 1s;
    animation-fill-mode: linear;
    animation-iteration-count: infinite;
    @media only screen and (min-width: 320px) and (max-width: 800px) {
      border: 4px solid #4bc8eb;
    }
  }

  div:nth-child(3) {
    width: calc(100% * 0.1);
    height: calc(100% * 0.1);
    border: 2px solid #36f372;
    animation-name: ${AnimationThree};
    animation-duration: 1.5s;
    animation-fill-mode: linear;
    animation-iteration-count: infinite;
  }
`;
