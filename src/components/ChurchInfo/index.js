import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

import "./styles.css";

const List = () => {
  const [church, setChurch] = useState("");
  const [cults, setCults] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let churchsLS = JSON.parse(localStorage.getItem("church"));

    setCults(churchsLS.cultos);

    setChurch(churchsLS);

  }, []);

  function back() {
    history.push("/");
  }

  return (
    <>
      <section id="church-info">
        <div className="content-church-info" key={church.id}>
          <div className="church-btn">
            <button onClick={back}>
              <FaLongArrowAltLeft />
              Voltar
            </button>
            <div>
              <a href={church.maps} target="_blank" rel="noreferrer">
                <SiGooglemaps />
                <p>Ver rotas</p>
              </a>
            </div>
          </div>
          <main>
            <h1>{church.comun}</h1>
            <ul>
              <li>
                <h2>Localização</h2>
                <p>
                  <strong>Logradouro:</strong> {church.logradouro}
                </p>
                <p>
                  <strong>CEP:</strong> {church.cep}
                </p>
                <p>
                  <strong>Cidade:</strong> {church.cidade}
                </p>
                <p>
                  <strong>Bairro:</strong> {church.bairro}
                </p>
                <p>
                  <strong>Informação Patrimonial:</strong> {church.patrimonial}
                </p>
              </li>
            </ul>
          </main>
          <main>
            <ul>
              <li>
                <h2>Dias de Culto</h2>
                <p>{church.["dias-cultos"]}</p>
                <strong>Cultos:</strong>
                {cults.map((cult) => (
                  <p key={cult} style={{ paddingLeft: 50 }}>
                    {cult}
                  </p>
                ))}
                <p>
                  <strong>Reunião de Jovens e menores:</strong> {church.["reuniao-jovens"]}
                </p>
              </li>
            </ul>
          </main>
          <main>
            <ul>
              <li>
                <h2>Ministério</h2>
                <p><strong>Ancião:</strong> {church.anciao}</p>
                <p>
                  <strong>Cooperador do Ofício Ministerial:</strong> {church.["cooperador-oficial"]}
                </p>
                <p>
                  <strong>Diácono:</strong> {church.diacono}
                </p>
                <p>
                  <strong>Cooperador de Jovens e Menores:</strong> {church.["cooperador-jovens"]}
                </p>
              </li>
            </ul>
          </main>
        </div>
      </section>
    </>
  );
};

export default List;
