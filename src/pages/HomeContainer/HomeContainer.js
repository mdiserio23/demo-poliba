import React from "react";
//import dell'hook useNavigate dalla libreria react-router-dom
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import ROUTES from "../../utils/routes";

const HomeContainer = () => {
  //assegno il comportamento dell'hook useNavigate ad una variabile navigate (per una questione di leggibilità)
  const navigate = useNavigate();

  //creo una funzione in cui al suo interno richiamo la navigate, passandogli la rotta da visitare
  const onGoToCounterClickHandler = () => navigate(ROUTES.COUNTER);

  return (
    <div>
      <h2>Benvenuto</h2>
      {/**
       * nel JSX inserisco il componente Button, passandogli come attributo le props di cui ha bisogno
       * label, per la label del tasto
       * onClick, passo la funzione onGoToCounterClickHandler che viene chiamata dal componente al click sul tasto
       */}
      <Button label="Vai al Contatore" onClick={onGoToCounterClickHandler} />
    </div>
  );
};
export default HomeContainer;
