import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as S from "../Styles/styleContact";
import Image from "../Assets/ImageHeader/logoResponsive.png";

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
          <S.Input type="text" name="user_name" placeholder="Type your name" />
          <S.Label>Email</S.Label>
          <S.Input
            type="email"
            name="user_email"
            placeholder="Type your e-mail"
          />
          <S.Label>Message</S.Label>
          <S.Textarea name="message" placeholder="Type your message" />
          <S.Btn type="submit" value="Send" />
        </S.Form>
      </S.BoxForm>
      <S.BoxImage>
        <S.Image src={Image} />
      </S.BoxImage>
    </S.ContainerContact>
  );
}
