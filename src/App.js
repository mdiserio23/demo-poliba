//import  BrowserRouter, Route, Routes dalla libreria react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
//importo i componenti Header Footer e Navbar
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
//importo le pages HomeContainer e CounterContainer
import HomeContainer from "./pages/HomeContainer/HomeContainer";
import CounterContainer from "./pages/CounterContainer/CounterContainer";
import ROUTES from "./utils/routes";

const App = () => {
  const title = "Demo React Poliba";
  const contactInfo = "maurizio.diserio@gmail.com";
  return (
    //BrowserRouter mi indica che qui ci sarà presenza di routing
    <BrowserRouter>
      <div className="App">
        {/**
         * ogni rotta mostrerà sempre il componente Header al quale viene passata la props title come attributo
         * e il componente Navabr
         */}
        <Header title={title} />
        <Navbar />
        {/**
         * raccolgo le rotte con il tag Routes di rect-rotuer-dom
         */}
        <Routes>
          {/**
           * il tag Route contiene la singola rotta
           * l'attributo index ci indica la prima pagina da mostrare sempre come home
           * l'attributo path avrà il percorso che la rotta dovrà raggiungere
           * l'attributo element contiene il componente che verrà mpostrato a quella rotta
           */}
          <Route index path={ROUTES.HOME} element={<HomeContainer />} />
          <Route path={ROUTES.COUNTER} element={<CounterContainer />} />
        </Routes>
        {/**
         * ogni rotta mostrerà sempre il componente Footer al quale viene passata la props title come attributo
         * e la props contactInfo che sono semplici stringhe
         */}
        <Footer title={title} contactInfo={contactInfo} />
      </div>
    </BrowserRouter>
  );
};

export default App;
