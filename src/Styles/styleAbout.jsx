import Styled from "styled-components";
import Img from "../Assets/ImageAbout/image.jpg";

export const Container = Styled.section`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:80vh;
  @media only screen and (min-width: 320px) and (max-width: 500px){
    flex-direction:column;
    height:130vh;
  }
`;

export const Box = Styled.div`
display:flex;
justify-content:center;
align-items:center;
width:50%;
height:100%;
overflow:hidden;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:100%;  
}

`;

export const Image = Styled.img`
width:15vw;
height:83vh;
margin-top:8em;
transform: translateZ(40px) scale(0.9);
@media only screen and (min-width: 320px) and (max-width: 500px){
  width:35vw;
  height:65vh;
  margin-top:0em;
}
`;

export const Figure = Styled.figure`
width:90%;
height:60vh;
display:flex;
justify-content:center;
align-items:center;
background-image: url(${Img});
background-size: contain;
background-repeat: no-repeat;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:100%;
  height:90%;
}
`;

export const BoxTwo = Styled.div`
display:flex;
justify-content:space-evenly;
flex-direction:column;
align-items:center;
width:50%;
height:100%;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:100%;
 
}
`;

export const H2 = Styled.h2`
color:rgba(0, 206, 158, 1);
margin-bottom:5rem;
font-size:2em;
line-height:80%;
text-transform:uppercase;

-webkit-box-reflect:below 0px linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0,0.4));
@media only screen and (min-width: 320px) and (max-width: 800px){
  font-size:1.5em;
  margin-bottom:0;
}
`;

export const Article = Styled.article`
width:80%;
height:30vh;
@media only screen and (min-width: 320px) and (max-width: 800px){
  height:40vh;
  width:90%;
 
}
`;

export const P = Styled.p`
color:#fff;
font-size:1.1em;
@media only screen and (min-width: 320px) and (max-width: 800px){
  font-size:0.8em
}
`;
