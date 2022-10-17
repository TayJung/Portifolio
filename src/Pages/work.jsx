import React from "react";
import * as S from "../Styles/styledWork";
import AnimationWork from "./animationWork";
import "../styles.css";
import Tilt from "react-parallax-tilt";
import Dice from "../Assets/ImageWork/diceRoll.PNG";
import Pokebola from "../Assets/ImageWork/pokebola.PNG";
import HarryPotter from "../Assets/ImageWork/harryPotter.PNG";
import DogPage from "../Assets/ImageWork/dogPage.PNG";
import Lol from "../Assets/ImageWork/lol.PNG";
import StarWars from "../Assets/ImageWork/starWars.PNG";
import Ods from "../Assets/ImageWork/ods.PNG";

export default function Work() {
  return (
    <S.Container>
      <S.Box>
        <S.H2>Works</S.H2>
        <AnimationWork />
      </S.Box>
      <S.BoxCards>
        <Tilt
          className="tilt"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.2}
          gyroscope={true}
        >
          <S.Card>
            <a href="https://tayjung.github.io/Dice-Roll/" target="_blank">
              <S.CardImage src={Dice} alt="dice roll" />
            </a>

            <S.Link href="https://tayjung.github.io/Dice-Roll/" target="_blank">
              <S.CardTitle>Dice Roll</S.CardTitle>
            </S.Link>

            <S.CardBody>
              <p>
                Aplicação de Rolar Dados onde utilizo HTML5, CSS3 e JavaScript
                para executar o projeto
              </p>
              <p>
                Para ver o repositório clique na imagem ou no nome se quiser ver
                a aplicação funcionando
              </p>
            </S.CardBody>
          </S.Card>
        </Tilt>

        <Tilt
          className="tilt"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.2}
          gyroscope={true}
        >
          <S.Card>
            <a href="https://github.com/TayJung/Pokebola" target="_blank">
              <S.CardImage src={Pokebola} alt="Pokebola" />
            </a>

            <S.Link href="https://tayjung.github.io/Pokebola/" target="_blank">
              <S.CardTitle>Pokebola</S.CardTitle>
            </S.Link>

            <S.CardBody>
              <p>Aplicação feita em HTML5 e CSS3 consentrada em position.</p>
              <p>
                Para ver o repositório clique na imagem ou no nome se quiser ver
                a aplicação funcionando
              </p>
            </S.CardBody>
          </S.Card>
        </Tilt>

        <Tilt
          className="tilt"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.2}
          gyroscope={true}
        >
          <S.Card>
            <a href="https://github.com/TayJung/HarryPotterApi" target="_blank">
              <S.CardImage src={HarryPotter} alt="Harry Potter" />
            </a>

            <S.Link href="https://csb-565qko.vercel.app/" target="_blank">
              <S.CardTitle>Harry Potter</S.CardTitle>
            </S.Link>

            <S.CardBody>
              <p>Aplicação feita em React.js com o consumo de API em Hooks.</p>
              <p>
                Para ver o repositório clique na imagem ou no nome se quiser ver
                a aplicação funcionando
              </p>
            </S.CardBody>
          </S.Card>
        </Tilt>

        <Tilt
          className="tilt"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.2}
          gyroscope={true}
        >
          <S.Card>
            <a href="https://github.com/TayJung/PageDog" target="_blank">
              <S.CardImage src={DogPage} alt="Dog Page" />
            </a>

            <S.Link
              href="https://csb-0iduon-46jk9cm2p-tayjung.vercel.app/"
              target="_blank"
            >
              <S.CardTitle>Dog Page</S.CardTitle>
            </S.Link>

            <S.CardBody>
              <p>Aplicação feita em React.js com o consumo de API em Hooks.</p>
              <p>
                Para ver o repositório clique na imagem ou no nome se quiser ver
                a aplicação funcionando
              </p>
            </S.CardBody>
          </S.Card>
        </Tilt>

        <Tilt
          className="tilt"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.2}
          gyroscope={true}
        >
          <S.Card>
            <a
              href="https://github.com/TayJung/desafio-League-of-legends"
              target="_blank"
            >
              <S.CardImage src={Lol} alt="League of Legends" />
            </a>

            <S.Link
              href="https://tayjung.github.io/desafio-League-of-legends/"
              target="_blank"
            >
              <S.CardTitle>League of Legends</S.CardTitle>
            </S.Link>

            <S.CardBody>
              <p>
                Clone do login da LOL. Aplicação feita em HTML5, CSS3 e
                JavaScript.
              </p>
              <p>
                Para ver o repositório clique na imagem ou no nome se quiser ver
                a aplicação funcionando
              </p>
            </S.CardBody>
          </S.Card>
        </Tilt>

        <Tilt
          className="tilt"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.2}
          gyroscope={true}
        >
          <S.Card>
            <a href="https://github.com/TayJung/Star-Wars" target="_blank">
              <S.CardImage src={StarWars} alt="Star Wars" />
            </a>

            <S.Link href="https://tayjung.github.io/Star-Wars/" target="_blank">
              <S.CardTitle>Star Wars</S.CardTitle>
            </S.Link>

            <S.CardBody>
              <p>Aplicação feita em HTML5 e CSS3.</p>
              <p>
                Para ver o repositório clique na imagem ou no nome se quiser ver
                a aplicação funcionando
              </p>
            </S.CardBody>
          </S.Card>
        </Tilt>

        <Tilt
          className="tilt"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.2}
          gyroscope={true}
        >
          <S.Card>
            <a href="https://github.com/TayJung/ods" target="_blank">
              <S.CardImage src={Ods} alt="ods" />
            </a>

            <S.Link
              href="https://csb-pl0hik-lixdtz4yt-tayjung.vercel.app/"
              target="_blank"
            >
              <S.CardTitle>ODS</S.CardTitle>
            </S.Link>

            <S.CardBody>
              <p>
                Aplicação feita em React.js sobre objetivos de desenvolvimento
                sustentável, onde foi aplicado Dark Theme.
              </p>
              <p>
                Para ver o repositório clique na imagem ou no nome se quiser ver
                a aplicação funcionando
              </p>
            </S.CardBody>
          </S.Card>
        </Tilt>
      </S.BoxCards>
    </S.Container>
  );
}
