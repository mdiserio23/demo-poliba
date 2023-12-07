//import dell'hook useState da react
import React, { useState } from "react";
//import del componente da riutilizzare
import Button from "../../components/Button/Button";
import "./CounterContainer.css";

const CounterContainer = () => {
  //mi dichiaro uno stato con l'hook useState, in cui ho una variabile di stato count e la sua funzione di setting
  //inizializzo la viariabile di stato passando all'useState come parametro 0
  const [count, setCount] = useState(0);

  /**
   * funzione per incrementare
   * chiamo la funzione di stato setCount che mi incremente la variabile di stato a +1
   */
  const increment = () => setCount(count + 1);
  /**
   * funzione per decrementare
   * chiamo la funzione di stato setCount che mi decrementa la variabile di stato a -1
   */
  const decrement = () => setCount(count - 1);
  /**
   * funzione per reset
   * chiamo la funzione di stato setCount che mi setta la variabile di stato a 0
   */
  const reset = () => setCount(0);

  return (
    <div className="CounterContainer">
      <h2>Contatore: {count}</h2>
      {/**
       * nel JSX inserisco il componente Button, passandogli come attributo le props di cui ha bisogno
       * label, per la label del tasto
       * onClick, passo la funzione che viene chiamata dal componente al click sul tasto
       */}
      <Button label="Incrementa" onClick={increment} />
      <Button label="Decrementa" onClick={decrement} />
      <Button label="Azzera" onClick={reset} />
    </div>
  );
};

export default CounterContainer;
