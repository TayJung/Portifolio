import Styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700;800&display=swap');
*{
 
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: sans-serif;
}
body{
  width:100%;
  height:100vh;
  background: #000;
  &::-webkit-scrollbar{
    width: 1vw;
  }
  &::-webkit-scrollbar-track{
    background:#1C1C1C;
  }
  &::-webkit-scrollbar-thumb{
    background-color:#696969;
    border-radius:1em;
    border:3px solid #1C1C1C;
  }
}
`;
// background: #191970;
