import React from "react";
import { Link } from "react-router-dom";

import datas from "../../data/church.json";

import "./styles.css";

const ReportList = (props) => {
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
    <section className="list-wrapper">
      <h1>{messageCurrent}</h1>
      <div className="list-content">
        {igrejas.map((info) => (
          <main key={info.id}>
            <ul>
              <li>
                <div>
                  <Link
                    to={{
                      pathname: `/relatorio/${info.ordinary}`
                    }}
                    onClick={() => getChurchInfo(info)}
                  >
                    <h2>{info.ordinary}</h2>
                    <p>
                      <strong>Cultos: </strong>
                      {info.day_cult}
                    </p>
                  </Link>
                </div>
                <Link
                  to={{
                    pathname: `/relatorio/${info.ordinary}`
                  }}
                  onClick={() => getChurchInfo(info)}
                  className="list-wrapper-maps"
                >
                  <p>Saber mais</p>
                </Link>
              </li>
            </ul>
          </main>
        ))}
      </div>
    </section>
  );
};

export default ReportList;
