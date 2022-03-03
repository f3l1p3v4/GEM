import React from "react";
import { useHistory } from "react-router-dom";

import { FaLongArrowAltLeft } from "react-icons/fa";

import classJSON from "../../data/class.json";

import "./styles.css";

const List = () => {
  const history = useHistory();

  function back() {
    history.push("/");
  }

  return (
    <>
      <section className="class-wrapper">
        <div className="class-content">
          <button onClick={back}>
            <FaLongArrowAltLeft />
            Voltar
          </button>
          <main>
            <h1>Plano de estudo - GEM 2022</h1>
            <span>
              <strong>Programação Grupo 01</strong>
            </span>
            <table>
              <thead>
                <tr>
                  <td>
                    <b>Data</b>
                  </td>
                  <td>
                    <b>Aula</b>
                  </td>
                  <td>
                    <b>Mód</b>
                  </td>
                  <td>
                    <b>Assunto</b>
                  </td>
                  <td>
                    <b>Pág</b>
                  </td>
                  <td>
                    <b>Ex</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                {classJSON.map((classData) => (
                  <tr key={classData.id}>
                    <td>{classData.date}</td>
                    <td>{classData.class}</td>
                    <td>{classData.module}</td>
                    <td>{classData.subject}</td>
                    <td>{classData.page}</td>
                    <td>{classData.exercises}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </section>
    </>
  );
};

export default List;
