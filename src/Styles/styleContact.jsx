import Styled from "styled-components";

export const ContainerContact = Styled.section`
width:100%;
height:80vh;
display:flex;
align-items:center;
justify-content:center;
@media only screen and (min-width: 320px) and (max-width: 800px){
flex-direction:column;
justify-content:space-around;
height:230vh;

}
`;

export const BoxForm = Styled.div`
width:50%;
height:60vh;
display:flex;
align-items:center;
justify-content:center;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:100%;

}
`;

export const Title = Styled.h2`
color:rgba(0, 206, 158, 1);
margin-bottom:5rem;
font-size:2em;
line-height:80%;
text-transform:uppercase;
letter-spacing:0.1em;

-webkit-box-reflect:below 0px linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0,0.4));

@media only screen and (min-width: 320px) and (max-width: 800px){
  font-size:1.4em;
  margin-top:2.5em;
  margin-bottom:2em;
}
`;

export const Form = Styled.form`
display:flex;
flex-direction:column;
align-items:flex-start;
width:50%;
font-size:1.1em;
@media only screen and (min-width: 320px) and (max-width: 800px){
width:80%;

}
`;

export const Input = Styled.input`
width:100%;
height:6vh;
padding:.6em;
outline:none;
border-radius:.3em;
border:1px solid rgb(220, 220, 220);
background:#D3D3D3;
box-shadow:2px 3px 5px rgba(255, 255, 255, .3);
&:hover{
  border:2px solid rgba(0, 206, 158, 1);
}

&:focus{
  border:2px solid rgba(0, 206, 158, 1);
}
`;

export const Textarea = Styled.textarea`
max-width:100%;
min-width:100%;
width:100%;
max-height:18vh;
min-height:18vh;
padding:.6em;
outline:none;
border-radius:.3em;
border:1px solid rgb(220, 220, 220);
background:#D3D3D3;
box-shadow:2px 3px 5px rgba(255, 255, 255, .3);
&:hover{
  border:2px solid rgba(0, 206, 158, 1);
}

&:focus{
  border:2px solid rgba(0, 206, 158, 1);
`;

export const Label = Styled.label`
margin-top:1rem;
color:#fff
`;

export const Btn = Styled.input`
margin-top:2rem;
cursor:pointer;
background: rgb(249, 105. 14);
color:#000;
border:none;
width:100%;
height:6vh;
border-radius:5px;
background:#D3D3D3;
font-size:1.2em;
font-weight:bold;
box-shadow:2px 2px 5px rgba(255, 255, 255, .3);

&:hover{
  background:rgba(0, 206, 158, 1);
  transition: 1s;
}

&:focus{
  border:2px solid rgba(0, 206, 158, 1);
`;

export const Box = Styled.section`
width:50%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:100%;
  height:120vh;
  justify-content:center;
  
}
`;

export const BoxImage = Styled.div`
width:100%;
height:60vh;
display:flex;
align-items:center;
justify-content:center;
@media only screen and (min-width: 320px) and (max-width: 800px){
  /* border:solid white; */
}
`;

export const BoxContact = Styled.div`
width:100%;
height:20vh;
/* border:solid white; */
display:flex;
align-items:center;
justify-content:space-evenly;
color: white;
@media only screen and (min-width: 320px) and (max-width: 800px){
flex-direction:column;
height:40vh;
}
`;

export const Address = Styled.address`

width:40%;
height:13vh;
display:flex;
align-items:center;
justify-content:space-evenly;
flex-direction:column;
@media only screen and (min-width: 320px) and (max-width: 800px){
width:100%;
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

export const BoxRedes = Styled.div`
width:40%;
height:13vh;
display:flex;
align-items:center;
justify-content:space-evenly;
@media only screen and (min-width: 320px) and (max-width: 800px){
width:100%,

}
`;

/* -webkit-box-shadow: 3px 0px 21px 6px rgba(152,251,152,0.9); 
box-shadow: 3px 0px 21px 6px rgba(152,251,152,0.9); */
