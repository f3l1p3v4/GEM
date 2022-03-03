import React from "react";
import { Link } from "react-router-dom";

import { GiMusicalScore } from "react-icons/gi";
import { BiBookBookmark, BiMobileAlt } from "react-icons/bi";
import { AiOutlineForm } from "react-icons/ai";

import "./styles.css";

const HomeServices = () => {
  return (
    <section className="services-wrapper">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSc0AmbTgF3O7USZus8AYnNsMsGJ5tSl6g12TjR5gaUKI0o1zA/viewform"
        title="Cadastro para aula de música"
        className="services-card"
      >
        <AiOutlineForm />
        <p>Registrar</p>
      </a>
      <Link to="/moodle" className="services-card">
        <BiMobileAlt />
        <p>Moodle</p>
      </Link>
      <Link to="music" className="services-card">
        <GiMusicalScore />
        <p>Métodos</p>
      </Link>
      <Link to="aulas" className="services-card">
        <BiBookBookmark />
        <p>Aulas</p>
      </Link>
    </section>
  );
};

export default HomeServices;
