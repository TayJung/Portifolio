import React, { useState } from "react";
import Logo from "../Assets/ImageHeader/logo.png";
import LogoResponsive from "../Assets/ImageHeader/logoResponsive.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import * as S from "../Styles/styleHeader";
import About from "../Pages/aboult";
import Work from "../Pages/work";
import Contact from "../Pages/contact";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [visibily, setVisibily] = useState(false);

  const Modal = () => {
    return (
      <S.NavBarResposive>
        <IoClose />
        <ul>
          <li>
            <S.Links to="/">Home</S.Links>
          </li>
          <li>
            <S.Links to="/work">Work</S.Links>
          </li>
          <li>
            <S.Links to="/about">About</S.Links>
          </li>
          <li>
            <S.Links to="/contact">Contact me</S.Links>
          </li>
        </ul>
      </S.NavBarResposive>
    );
  };

  return (
    <BrowserRouter>
      <S.ContainerHeader>
        <Link to="/">
          <S.Logo src={LogoResponsive} alt="logo" />
        </Link>
        <Link to="/">
          <S.LogoRes src={LogoResponsive} alt="logo" />
        </Link>
        <S.MenuResponsivo>
          <S.Menu
            onClick={() => {
              setVisibily(!visibily);
            }}
          >
            {visibily === true ? " " : "≡"}
            {visibily && Modal()}
          </S.Menu>
        </S.MenuResponsivo>
        <>
          <S.NavBar>
            <S.ListNav>
              <S.List>
                <S.Links to="/">Home</S.Links>
              </S.List>
              <S.List>
                <S.Links to="/work">Work</S.Links>
              </S.List>
              <S.List>
                <S.Links to="/about">About</S.Links>
              </S.List>
              <S.List>
                <S.Links to="/contact">Contact me</S.Links>
              </S.List>
            </S.ListNav>
          </S.NavBar>
        </>
      </S.ContainerHeader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Header;
