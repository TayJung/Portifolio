import Styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHeader = Styled.section`
width:100%;
height:15vh;
display:flex;
justify-content:space-around;

`;

export const MenuResponsivo = Styled.div`
display:none;
@media only screen and (min-width: 320px) and (max-width: 800px){
display:flex;
align-items:center;
justify-content:flex-end;
width:60%;
}
`;

export const NavBarResposive = Styled.nav`
border:solid;
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
right:0;
bottom:0;
z-index:5;
display:flex;
align-items:center;
justify-content:center;
backdrop-filter:blur(3px)
background: rgb(75,0,130);
background: linear-gradient(207deg, rgba(75,0,130,0.5) 15%, rgba(25,25,112,0.5) 59%, rgba(51,44,97,0.5) 90%);
transition:.5s;

> svg{
  position:absolute;
  top:1rem;
  right:1rem;
  color:#fff;
  font-size:1em;   
}

ul{
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  gap:2rem;
  li{
    font-size:0.6em;   
    list-style:none;    
  }
}
`;

export const Menu = Styled.button`
background:transparent;
border:none;
width:3em;
font-size:1.8em;
color:#fff;
`;
export const LogoRes = Styled.img`
display:none;
@media only screen and (min-width: 320px) and (max-width: 800px){
  display:flex;
  border-radius:100%;
  width:100%;
  height:14vh;
  padding-top:2vh;
}
`;

export const NavBar = Styled.nav`
width:80%;
display:flex;
align-items:center;
justify-content:flex-end;

@media only screen and (min-width: 320px) and (max-width: 800px){
  display:none;
}
`;

export const ListNav = Styled.ul`
display:flex;
align-items:center;
list-style:none;
width:80vh;
height:15vh;
justify-content:space-evenly;

`;

export const List = Styled.li`
width:20vh;
height:15vh;
display:flex;
justify-content:center;
align-items:center;

`;

export const Links = Styled(Link)`
position:relative;
color:#fff;
text-decoration:none;
font-size:1.2em;
width:18vh;
transition:.3s;
text-align:center;

&:after {
  content:'';  
  position:absolute; 
  border-bottom: #00FF7F solid 3px;
  width:100%;
  display:block;
  transition:.3s;
}

&:hover{
  color:#000;
  background:#00FF7F;
  transition:.3s;
}

`;

export const Logo = Styled.img`
border-radius:50%;
width:100%;
height:14vh;
padding-top:2vh;
@media only screen and (min-width: 320px) and (max-width: 800px){
  display:none;
}
`;
