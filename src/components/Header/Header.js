import React from "react";
import "./Header.css"; // Importa il file di stile
/**
 * functional component Footer con destructuring dell'oggetto prop in title
 * @param {title} props
 * @returns
 */
const Header = ({ title }) => {
  return <h1 className="Header">{title}</h1>;
};

export default Header;
