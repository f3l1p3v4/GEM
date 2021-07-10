import React, { useState } from "react";

import "./styles.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setName("");
    setEmail("");
    setAssunto("");
    setMessage("");

    alert("Sua mensagem foi enviado com sucesso!!!");
  }

  return (
    <>
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <h1>Fale conosco!</h1>
          <p>
            Se tiver alguma duvida é só pergundar! A equipe da{" "}
            <strong>DevLoad</strong> te ajudará o mais rápido possível 😊 nos
            conte o que achou da DevLoad, para podermos melhorar ainda mais.
          </p>
          <input
            type="text"
            placeholder="Nome Completo*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Assunto*"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
