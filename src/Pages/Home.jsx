import React from "react";
import * as S from "../Styles/styleHome";
import Typical from "react-typical";
import TextAnimation from "../Pages/textAnimation";
import Image from "../Assets/ImageHome/tay.png";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <S.Container>
      <S.Box>
        <S.Title>
          {" "}
          <Typical
            loop={Infinity}
            steps={["Taíse Jungthon", 1000, "Tay Jung", 1000]}
          />
        </S.Title>
        <S.H2>
          <TextAnimation />
        </S.H2>
        <S.BoxLink>
          <S.Link
            href="https://drive.google.com/file/d/1SI4ojJSCKYkJH5oWD2GqHFbcDQp6RkuB/view?usp=sharing"
            alt="curriculum download button"
            target="blank"
          >
            Download Curriculum
          </S.Link>
        </S.BoxLink>
        <S.BoxRedes>
          <S.A
            href="https://www.instagram.com/tay.jung_code/"
            target="blank"
            alt="link do instagram"
            title="Instagram"
          >
            <BsInstagram />{" "}
          </S.A>
          <S.A
            href="https://github.com/TayJung"
            target="blank"
            alt="link do github"
            title="Github"
          >
            <BsGithub />
          </S.A>
          <S.A
            href="https://www.linkedin.com/in/tayjung29/"
            target="blank"
            alt="link do linkedin"
            title="Linkedin"
          >
            <BsLinkedin />
          </S.A>
        </S.BoxRedes>
      </S.Box>
      <S.BoxTwo>
        <S.BoxRedesResponsive>
          <S.A
            href="https://www.instagram.com/tay.jung_code/"
            target="blank"
            alt="link do instagram"
            title="Instagram"
          >
            <BsInstagram />{" "}
          </S.A>
          <S.A
            href="https://github.com/TayJung"
            target="blank"
            alt="link do github"
            title="Github"
          >
            <BsGithub />
          </S.A>
          <S.A
            href="https://www.linkedin.com/in/tayjung29/"
            target="blank"
            alt="link do linkedin"
            title="Linkedin"
          >
            <BsLinkedin />
          </S.A>
        </S.BoxRedesResponsive>
        <S.Figure>
        <S.Image src={Image} alt="imagem de Taise Jungthon" title="Tay Jung" />
        </S.Figure>
        
      </S.BoxTwo>
    </S.Container>
  );
};
export default Home;
