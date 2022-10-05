import React from "react";
import * as S from "../Styles/styleHome";
import Typical from "react-typical";
import TextAnimation from "../Pages/textAnimation";
import Image from "../Assets/ImageHome/tay.png";

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
      </S.Box>
      <>
        <S.Image src={Image} alt="" />
      </>
    </S.Container>
  );
};
export default Home;
