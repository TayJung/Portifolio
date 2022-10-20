import Styled from "styled-components";

export const Container = Styled.section`
width:100%;
height:80vh;
display:flex;
justify-content:space-between;
align-items:center;
@media only screen and (min-width: 320px) and (max-width: 800px){
  flex-direction:column;
  height:85vh; 
}
`;

export const Box = Styled.section`
width:80%;
height:40vh;
display:flex;
align-items:center;
flex-direction:column;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:100%;
  height:50vh;
  justify-content:space-evenly;
}
`;

export const Title = Styled.h2`
color:#fff;
text-transform:uppercase;
font-size:2.8em;
-webkit-text-stroke: 0.3vw #00CE9E;
@media only screen and (min-width: 320px) and (max-width: 800px){
  font-size:1.3em;
}
`;

export const H2 = Styled.h2`
color:#00CE9E;
font-size:2em;
@media only screen and (min-width: 320px) and (max-width: 800px){
  font-size:1em;
}
`;
export const Image = Styled.img`
width:17vw;
height:82vh;
object-fit:cover;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:28vw;
  height:40vh;
}
`;

export const Figure = Styled.figure`

width:100%;
height:100%;
@media only screen and (min-width: 320px) and (max-width: 800px){
width:50%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
}

`;

export const Link = Styled.a`
margin-top:1em;
width:15vw;
height:7vh;
border-radius:1em;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
text-decoration:none;
color:#fff;
background:#00CE9E;
font-weight:bold;
&:hover{
  background:#4fed51;;
  color:#000;
  border:solid #fff 2px;
}
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:55vw;
}
`;

export const BoxLink = Styled.div`
width:20vw;
height:15vh;
display:flex;
justify-content:center;
align-items:center;
@media only screen and (min-width: 320px) and (max-width: 800px){

width:100%;
}
`;

export const BoxRedes = Styled.div`
width:50vw;
height:60vh;
display:flex;
justify-content:center;
align-items:flex-end;
@media only screen and (min-width: 320px) and (max-width: 800px){
  display:none
}
`;

export const A = Styled.a`
text-decoration:none;

>svg{
  color:#fff;
  width:2em;
  font-size:1.5em;
  &:hover{
    color:#00CE9E;
  }
  @media only screen and (min-width: 320px) and (max-width: 800px){

  }
}
`;

export const BoxTwo = Styled.section`
display:flex;
align-items:center;
width:18%;
height:84vh;

 @media only screen and (min-width: 320px) and (max-width: 800px){
  justify-content:space-between;
  width:100%;
  height:40vh;
 }
`;
export const BoxRedesResponsive = Styled.div`
display:none;

 @media only screen and (min-width: 320px) and (max-width: 800px){
  height:10vh;
  width:50vw;
  display:flex;
  justify-content:center;
  align-items:flex-end;
}
`;
