import Styled from "styled-components";

export const Container = Styled.section`
width:100%;
height:80vh;

display:flex;
justify-content:space-between;
align-items:center;
`;

export const Box = Styled.div`
width:80%;
height:40vh;

display:flex;

align-items:center;
flex-direction:column;
`;

export const Title = Styled.h2`
color:#fff;
text-transform:uppercase;
font-size:2.8em;
-webkit-text-stroke: 0.3vw #00CE9E;
`;

export const H2 = Styled.h2`
color:#00CE9E;
font-size:2em;
`;
export const Image = Styled.img`
width:20vw;
`;
