import React, { useState } from "react";

import "./styles.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    let messageCurrent = encodeURI(`Olá, ${message}`);

    window.location.replace(
      `https://wa.me/+5567992656801?text=${messageCurrent}`
    );

    alert("Sua mensagem foi enviado com sucesso!!!");
  }

  return (
    <>
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <h1>Fale conosco!</h1>
          <p>
            Se tiver alguma duvida ou tiver alguma sujestão é só nos mandar uma
            mensagem!
          </p>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Mensagem*"
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
