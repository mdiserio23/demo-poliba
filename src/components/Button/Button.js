//import della libreria react
import React from "react";
//import dello stile
import "./Button.css";
/**
 * functional component Button con destructuring dell'oggetto prop in label e onClick function
 * @param {label, onClick} props
 * @returns button
 */
const Button = ({ label, onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
