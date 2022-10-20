import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as S from "../Styles/styleContact";

import LogoAnimation from "../Pages/logoAnimation";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bozhb7j",
        "template_1mc5naf",
        form.current,
        "zZek1KW7wdnQTPqzy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <S.ContainerContact>
      <S.BoxForm>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Title>Contact me</S.Title>
          <S.Label>Name</S.Label>
          <S.Input type="text" name="user_name" placeholder="Type your name" required/>
          <S.Label>Email</S.Label>
          <S.Input
            type="email"
            name="user_email"
            placeholder="Type your e-mail"
            required
          />
          <S.Label>Message</S.Label>
          <S.Textarea name="message" placeholder="Type your message" 
          required/>
          <S.Btn type="submit" value="Send" />
        </S.Form>
      </S.BoxForm>
      <S.Box>
        <S.BoxImage>
          <LogoAnimation />
        </S.BoxImage>
        <S.BoxContact>
          <S.Address>
            <p>tay.jung29@gmail.com</p>
            <p>+55 51 99402 7072</p>
          </S.Address>
          <S.BoxRedes>
            <S.A
              href="https://www.instagram.com/tay.jung_code/"
              target="blank"
              alt="link do instagram"
              title="Instagram"
            >
              <BsInstagram />
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
        </S.BoxContact>
      </S.Box>
    </S.ContainerContact>
  );
}
