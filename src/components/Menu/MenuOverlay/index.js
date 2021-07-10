import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const MenuOverlay = (props) => {
  let overlayClasses = "menu-overlay";
  if (props.show) {
    overlayClasses = "menu-overlay open";
  }
  return (
    <nav className={overlayClasses}>
      <ul>
        <li onClick={props.click}>
          <Link to="/">Início</Link>
        </li>
        <li onClick={props.click}>
          <Link to="/relatorio">Relatório</Link>
        </li>
        <li onClick={props.click}>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuOverlay;
