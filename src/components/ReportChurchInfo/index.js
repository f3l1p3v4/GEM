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

    setCults(churchsLS.cults);

    setChurch(churchsLS);

    console.log("teste info church");
  }, []);

  function back() {
    history.push("/");
  }

  return (
    <section className="church-wrapper">
      <div className="church-content" key={church.id}>
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
          <h1>{church.ordinary}</h1>
          <ul>
            <li>
              <h2>Localização</h2>
              <p>
                <strong>Logradouro:</strong> {church.address}
              </p>
              <p>
                <strong>CEP:</strong> {church.cep}
              </p>
              <p>
                <strong>Cidade:</strong> {church.city}
              </p>
              <p>
                <strong>Bairro:</strong> {church.district}
              </p>
            </li>
          </ul>
        </main>
        <main>
          <ul>
            <li>
              <h2>Dias de Culto</h2>
              <p>{church.day_cult}</p>
              <strong>Cultos:</strong>
              {cults.map((cult) => (
                <p key={cult} style={{ paddingLeft: 50 }}>
                  {cult}
                </p>
              ))}
              <p>
                <strong>Reunião de Jovens e menores:</strong>{" "}
                {church.meeting_young}
              </p>
            </li>
          </ul>
        </main>
      </div>
    </section>
  );
};

export default List;
