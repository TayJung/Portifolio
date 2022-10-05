import Styled from "styled-components";

export const ContainerContact = Styled.section`
width:100%;
height:80vh;
display:flex;
align-items:center;
justify-content:center
`;

export const BoxForm = Styled.div`
width:50%;
height:60vh;
display:flex;
align-items:center;
justify-content:center;
`;

export const Title = Styled.h2`
color:rgba(0, 206, 158, 1);
margin-bottom:5rem;
font-size:2em;
line-height:80%;
text-transform:uppercase;

-webkit-box-reflect:below 0px linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0,0.4))
`;

export const Form = Styled.form`
display:flex;
flex-direction:column;
align-items:flex-start;
width:50%;
font-size:1.1em;
`;

export const Input = Styled.input`
width:100%;
height:6vh;
padding:.6em;
outline:none;
border-radius:.3em;
border:1px solid rgb(220, 220, 220);
background:#D3D3D3;

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

&:hover{
  background:rgba(0, 206, 158, 1);
  transition: 1s;
}

&:focus{
  border:2px solid rgba(0, 206, 158, 1);
`;

export const BoxImage = Styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:center;
`;
export const Image = Styled.img`
border-radius:100%;
width:30vw;
-webkit-box-shadow: 3px 0px 21px 6px rgba(152,251,152,0.9); 
box-shadow: 3px 0px 21px 6px rgba(152,251,152,0.9);


`;
