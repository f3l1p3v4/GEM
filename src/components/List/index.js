import React from "react";
import { Link } from "react-router-dom";
import { SiGooglemaps } from "react-icons/si";

import datas from "../../data/info.json";

import "./styles.css";

const List = (props) => {
  const infos = datas;
  let igrejas = infos;
  let novasIgrejas = [];
  let messageCurrent = props.message;

  function getChurchInfo(churchCurrent) {
    localStorage.setItem("church", JSON.stringify(churchCurrent));
    console.log("olá localStorage");
  }

  //Array Culto Oficial
  if (props.data.type === "Culto Oficial") {
    igrejas = [];
    if (props.data.period === "Manhã") {
      infos.forEach(function (el, i) {
        let infoCurrent = el.oficial.manha;

        infoCurrent.forEach(function (period, i) {
          if (period === props.data.day) {
            novasIgrejas.push(el);
          }
        });
      });
      igrejas = novasIgrejas;
      if (igrejas.length !== 0) {
        messageCurrent = `Todas igrejas que irá ter culto ${props.data.day} de Manhã!`;
      } else {
        messageCurrent = "Nenhum resultado para pesquisa";
      }
    } else if (props.data.period === "Tarde") {
      infos.forEach(function (el, i) {
        let infoCurrent = el.oficial.tarde;

        infoCurrent.forEach(function (period, i) {
          if (period === props.data.day) {
            novasIgrejas.push(el);
          }
        });
      });
      igrejas = novasIgrejas;
      if (igrejas.length !== 0) {
        messageCurrent = `Todas igrejas que irá ter culto ${props.data.day} de Tarde!`;
      } else {
        messageCurrent = "Nenhum resultado para pesquisa";
      }
    } else if (props.data.period === "Noite") {
      infos.forEach(function (el, i) {
        let infoCurrent = el.oficial.noite;

        infoCurrent.forEach(function (period, i) {
          if (period === props.data.day) {
            novasIgrejas.push(el);
          }
        });
      });
      igrejas = novasIgrejas;
      if (igrejas.length !== 0) {
        messageCurrent = `Todas igrejas que irá ter culto ${props.data.day} de Noite!`;
      } else {
        messageCurrent = "Nenhum resultado para pesquisa";
      }
    }
  }

  //Array RJM
  else if (props.data.type === "RJM") {
    igrejas = [];
    if (props.data.period === "Manhã") {
      infos.forEach(function (el, i) {
        let infoCurrent = el.RJM.manha;

        infoCurrent.forEach(function (period, i) {
          if (period === props.data.day) {
            novasIgrejas.push(el);
          }
        });
      });
      igrejas = novasIgrejas;
      if (igrejas.length !== 0) {
        messageCurrent = `Todas igrejas que irá ter reunião de jovens e menores ${props.data.day} de Manhã!`;
      } else {
        messageCurrent = "Nenhum resultado para pesquisa";
      }
    } else if (props.data.period === "Tarde") {
      messageCurrent = `Todas igrejas que irá ter culto ${props.data.day} de Tarde!`;
      infos.forEach(function (el, i) {
        let infoCurrent = el.RJM.tarde;

        infoCurrent.forEach(function (period, i) {
          if (period === props.data.day) {
            novasIgrejas.push(el);
          }
        });
      });
      igrejas = novasIgrejas;
      if (igrejas.length !== 0) {
        messageCurrent = `Todas igrejas que irá ter reunião de jovens e menores ${props.data.day} de Tarde!`;
      } else {
        messageCurrent = "Nenhum resultado para pesquisa";
      }
    } else if (props.data.period === "Noite") {
      messageCurrent = `Todas igrejas que irá ter culto ${props.data.day} de Noite!`;
      infos.forEach(function (el, i) {
        let infoCurrent = el.RJM.noite;

        infoCurrent.forEach(function (period, i) {
          if (period === props.data.day) {
            novasIgrejas.push(el);
          }
        });
      });
      igrejas = novasIgrejas;
      if (igrejas.length !== 0) {
        messageCurrent = `Todas igrejas que irá ter reunião de jovens e menores ${props.data.day} de Manhã!`;
      } else {
        messageCurrent = "Nenhum resultado para pesquisa";
      }
    }
  } else {
    console.log("Test" + props.data);
  }

  return (
    <>
      <section id="list">
        <h1>{messageCurrent}</h1>
        <div className="content-list">
          {igrejas.map((info) => (
            <main key={info.id}>
              <ul>
                <li>
                  <div>
                    <Link
                      to={{
                        pathname: `/informacoes/${info.comun}`
                      }}
                      onClick={() => getChurchInfo(info)}
                    >
                      <h2>{info.comun}</h2>
                      <p>
                        <strong>Cultos: </strong>
                        {info.["dias-cultos"]}
                      </p>
                    </Link>
                  </div>
                  <a
                    href={info.maps}
                    className="list-maps"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiGooglemaps />
                    <p className="list-maps-text">Ver rotas</p>
                  </a>
                </li>
              </ul>
            </main>
          ))}
        </div>
      </section>
    </>
  );
};

export default List;
