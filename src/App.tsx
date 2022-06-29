import "./App.css";
import Casilla from "./components/casilla";
import React, { useState } from "react";

const EstadoGlobalContextDefaultValue = true

export const EstadoGlobal = React.createContext(
  EstadoGlobalContextDefaultValue
);

function App() {
  /**
   *  true: X
   *  false: O
   */

  const [jugador, setJugador] = useState<boolean>(true);

  const actualizarJugador = () => {
    setJugador(!jugador);
  };

  var casillas = [];

  for (let i = 0; i < 9; i++) {
    casillas[i] = <Casilla id={i} actualizarJugador={actualizarJugador} />;
  }

  return (
    <EstadoGlobal.Provider value={jugador}>
      <div className="App">
        <header className="App-header">
          <div className="Container">{casillas}</div>
        </header>
      </div>
    </EstadoGlobal.Provider>
  );
}

export default App;
