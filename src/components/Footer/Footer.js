import React from "react";
import "./Footer.css";

/**
 * functional component Footer con destructuring dell'oggetto prop in title e contactInfo
 * @param {title, contactInfo} props
 * @returns
 */
const Footer = ({ title, contactInfo }) => {
  return (
    <footer className="Footer">
      <h2>{title}</h2>
      <p>Per info scrivimi mail a {contactInfo}</p>
    </footer>
  );
};
export default Footer;
