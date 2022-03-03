import React from "react";
import { useHistory } from "react-router-dom";

import { FaLongArrowAltLeft } from "react-icons/fa";

import ScreenImg from "../../assets/moodle/screen.png";
import SiteImg from "../../assets/moodle/site.png";
import LoginImg from "../../assets/moodle/login.png";

import "./styles.css";

const List = () => {
  const history = useHistory();

  function back() {
    history.push("/");
  }

  return (
    <section className="moodle-wrapper">
      <div className="moodle-content">
        <button onClick={back}>
          <FaLongArrowAltLeft />
          Voltar
        </button>
        <main>
          <h1>Configurações do Moodle</h1>
          <span>
            <strong>Importante: </strong>
            Antes de seguir os passos abaixo o irmão primeiro deve fazer o
            cadastro, se o cadastro já foi feito então é só proseguir.
          </span>
          <ul>
            <li>
              <h2>Links para baixar o Moodle</h2>
              <a
                href="https://play.google.com/store/apps/details?id=com.moodle.moodlemobile"
                className="link"
              >
                <strong style={{ color: "#787878" }}>Para Android:</strong>{" "}
                Baixe aqui
              </a>
              <p className="link">
                <strong>Para IOS:</strong> Baixe aqui
              </p>
            </li>
            <li>
              <h2>Depois de baixado o Moodle</h2>
              <p>
                Se o irmão(a) já baixou o Moodle coloque este link{" "}
                <span className="link">http://ccb.mus.br </span> no campo
                Endereço do site da primeira tela, como na imagem abaixo:
              </p>
              <img src={ScreenImg} alt="primeira tela do app Moodle" />
            </li>
            <li>
              <h2>Depois de digitar o site</h2>
              <p>
                Agora click no botão Ligar-se ao seu site, como na imagem
                abaixo:
              </p>
              <img src={SiteImg} alt="primeira tela do app Moodle" />
            </li>
            <li>
              <h2>Entrando no Moodle</h2>
              <p>
                Para entrar no Moodle no campo identificação do usuário digite o{" "}
                <span className="link">CPF</span> que foi cadastrado, e no campo
                senha digite <span className="link">ccb</span>, lembrando que
                para todos os irmão a senha é ccb.
              </p>
              <img src={LoginImg} alt="primeira tela do app Moodle" />
            </li>
            <li>
              <h2>Deus Abençoe</h2>
              <p>
                Irmãos se mesmo cadastrado e ainda não conseguir entrar no site
                entre em contato com o Encarregado ou os instrutores.
              </p>
            </li>
          </ul>
        </main>
      </div>
    </section>
  );
};

export default List;
