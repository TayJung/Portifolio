import React from "react";
import Tilt from "react-parallax-tilt";
import Img from "../Assets/ImageAbout/family.png";
import * as S from "../Styles/styleAbout";

export default function About() {
  return (
    <S.Container>
      <S.Box>
        <S.Figure>
          <Tilt
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={900}
            transitionSpeed={2000}
            scale={1.1}
            gyroscope={true}
          >
            <S.Image src={Img} alt="pic" title="family" />
          </Tilt>
        </S.Figure>
      </S.Box>
      <S.BoxTwo>
        <S.H2>About</S.H2>
        <S.Article>
          <S.P>
            Meu Nome é Taíse mais algumas pessoas também me chamam de Tay tenho
            32 Anos, sou casada há 13 anos e sou mãe de uma menina de 8 anos.
            Atualmente escolhi mudar de carreira para Front End que é o que fez
            meu coração acelerar mais rápido na hora de escolher o meu novo
            caminho. Sou amante de livros e séries, e adoro passar tempo com
            minha família e meus animais de estimação.
          </S.P>
        </S.Article>
      </S.BoxTwo>
    </S.Container>
  );
}
