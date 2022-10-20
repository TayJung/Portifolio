import React from "react";
import Img from "../Assets/ImageHeader/logoResponsive.png";
import Styled, { keyframes } from "styled-components";

const Rings = keyframes`
0%{
  transform: rotate(0deg);
  box-shadow: 1px 5px 2px #00FF7F;

}

50%{
  transform: rotate(180deg);
  box-shadow: 1px 5px 2px #5904ed;

}

100%{
  transform: rotate(360deg);
  box-shadow: 1px 5px 2px  #4bc8eb;

}
`;

const Image = keyframes`
50%{
  filter:opacity(0) drop-shadow(0 0 0 black)
}
`;

export default function LogoAnimation() {
  return (
    <Figure>
      <Logo src={Img} alt="" />
    </Figure>
  );
}

const Logo = Styled.img`
border-radius:50%;
width:25vw;
height:51.8vh;
animation:${Image} 10s ease-in-out infinite;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:100%;
  height:100%;
}
`;

const Figure = Styled.figure`
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
width:21.5em;
height:21.5em;
position:absolute;

&:before{
  content:'';
  position:absolute;
  left:0;
  top:0;
  right:0;
  botton:0;
  width:100%;
  height:100%;
  border-radius:50%;
  box-shadow:0 0 5px rgba(255, 255, 255, .3);
  animation: ${Rings} 5s linear infinite;
}  

@media only screen and (min-width: 320px) and (max-width: 800px){
width:15.9em;
height:15.9em;
}
`;
