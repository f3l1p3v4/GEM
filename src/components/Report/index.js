import React, { useState } from "react";

import List from "../List";

import "./styles.css";

export default function Report() {
  const [period, setPeriod] = useState("");
  const [day, setDay] = useState("");
  const [type, setType] = useState("");
  const [data, setdata] = useState("");
  const [message, setMessage] = useState("Todas igrejas de Campo Grande MS");

  const listType = [
    { id: 1, name: "Tipo de Culto" },
    { id: 2, name: "Culto Oficial" },
    { id: 3, name: "RJM" }
  ];

  const listPeriod = [
    { id: 1, name: "Período do Culto" },
    { id: 2, name: "Manhã" },
    { id: 3, name: "Tarde" },
    { id: 4, name: "Noite" }
  ];

  const listDay = [
    { id: 1, name: "Dia do Culto" },
    { id: 2, name: "Segunda" },
    { id: 3, name: "Terça" },
    { id: 4, name: "Quarta" },
    { id: 5, name: "Quinta" },
    { id: 6, name: "Sexta" },
    { id: 7, name: "Sábado" },
    { id: 8, name: "Domingo" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (type === "" || type === "Tipo de Culto") &&
      (period === "" || period === "Período do Culto") &&
      (day === "" || day === "Dia do Culto")
    ) {
      setMessage(
        "Favor Selecione Tipo de Culto, Período e Dia que deseja congregar!!!🙏🙏🙏"
      );
      setdata("");
    } else if (
      (type !== "" || type !== "Tipo de Culto") &&
      (period === "" || period === "Período do Culto") &&
      (day === "" || day === "Dia do Culto")
    ) {
      setMessage(
        "Favor Selecione o Período e Dia que deseja congregar!!!🙏🙏🙏"
      );
      setdata("");
    } else if (
      (type === "" || type === "Tipo de Culto") &&
      (period !== "" || period !== "Período do Culto") &&
      (day === "" || day === "Dia do Culto")
    ) {
      setMessage(
        "Favor Selecione Tipo de Culto e Dia que deseja congregar!!!🙏🙏🙏"
      );
      setdata("");
    } else if (
      (type === "" || type === "Tipo de Culto") &&
      (period === "" || period === "Período do Culto") &&
      (day !== "" || day !== "Dia do Culto")
    ) {
      setMessage(
        "Favor Selecione Tipo de Culto e Período que deseja congregar!!!🙏🙏🙏"
      );
      setdata("");
    } else if (
      (type !== "" || type !== "Tipo de Culto") &&
      (period !== "" || period !== "Período do Culto") &&
      (day === "" || day === "Dia do Culto")
    ) {
      setMessage("Favor Selecione o Dia que deseja congregar!!!🙏🙏🙏");
      setdata("");
    } else if (
      (type === "" || type === "Tipo de Culto") &&
      (period !== "" || period !== "Período do Culto") &&
      (day !== "" || day !== "Dia do Culto")
    ) {
      setMessage("Favor Selecione Tipo de Culto que deseja congregar!!!🙏🙏🙏");
      setdata("");
    } else if (
      (type !== "" || type !== "Tipo de Culto") &&
      (period === "" || period === "Período do Culto") &&
      (day !== "" || day !== "Dia do Culto")
    ) {
      setMessage("Favor Selecione o Período que deseja congregar!!!🙏🙏🙏");
      setdata("");
    } else {
      const dataCurrent = {
        period: period,
        day: day,
        type: type
      };

      setdata(dataCurrent);
      setMessage("");
    }
  };

  return (
    <>
      <div className="report-container">
        <div className="report-content">
          <h1>Selecione qual igreja de Campo Grande MS deseja congregar.</h1>
          <strong>Deus Abençoe!!!</strong>
          <form onSubmit={handleSubmit}>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              {listType.map((item, index) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <select value={period} onChange={(e) => setPeriod(e.target.value)}>
              {listPeriod.map((item, index) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <select value={day} onChange={(e) => setDay(e.target.value)}>
              {listDay.map((item, index) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <button className="button" type="submit">
              Pesquisar
            </button>
          </form>
        </div>
        <List data={data} message={message} />
      </div>
    </>
  );
}
