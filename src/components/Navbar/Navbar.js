import React from "react";
//import del component LINK direttamente dalla react-router-dom library
import { Link } from "react-router-dom";
//import della const ROUTES che contiene tutte le stringhe che rappresentano le rotte
import ROUTES from "../../utils/routes";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          {/*utilizzo il componente Link, passandogli come attributo to la rotta di riferimento 
          e tra i tag Link la label dell'anchor*/}
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.COUNTER}>Contatore</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
