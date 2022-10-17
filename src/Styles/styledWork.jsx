import Styled from "styled-components";

export const Box = Styled.div`
width:100%;
height:15vh;

display:flex;
justify-content:space-around;
align-items:center;
@media only screen and (min-width: 320px) and (max-width: 800px){

}
`;

export const H2 = Styled.h2`
margin-top:2em;
color:rgba(0, 206, 158, 1);
margin-bottom:5rem;
font-size:2.5em;
line-height:80%;
text-transform:uppercase;
letter-spacing:0.1em;

-webkit-box-reflect:below 0px linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0,0.4));
@media only screen and (min-width: 320px) and (max-width: 800px){
  font-size:2em;
  margin-top:3em;
`;

export const Container = Styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
`;

export const BoxCards = Styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  gap:4em;
  padding: 5em;
`;

export const Card = Styled.div`
  border: 2px solid #5904ed;
  padding: 1.3em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction:column;
  width: 25vw;
  height: 55vh;
  @media only screen and (min-width: 320px) and (max-width: 800px){
    width: 60vw;
  height: 75vh;
  }
`;

export const CardImage = Styled.img`
  transform: translateZ(25px);
  border: 1px solid #4bc8eb;
  border-radius: 1em;
  width: 20vw;
  height: 20vh;
  @media only screen and (min-width: 320px) and (max-width: 800px){
    width: 40vw;
  height: 20vh;
  }
`;

export const CardTitle = Styled.h3`
  transform: translateZ(155px);
  color:#fff;
  width: 100%;
  height: 8vh;
  border:silid red;
  display: flex; 
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 320px) and (max-width: 800px){

  }
`;

export const CardBody = Styled.div`
  transform: translateZ(55px);
  padding: 1.5em;
  border-radius:1em;
  border: 2px solid #ff00ff;
  font-size: 0.8em;
  color: #fff;
    @media only screen and (min-width: 320px) and (max-width: 800px){
      width: 50vw;
      height: 35vh;
      font-size: 0.7em;
    }
`;

export const A = Styled.a`
  display: flex; 
  justify-content: center;
  align-items: center;
  color:#4bc8eb;
  cursor:pointer;
`;

export const Link = Styled.a`
text-decoration:none;
`;
