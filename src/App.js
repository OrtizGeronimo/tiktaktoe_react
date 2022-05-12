import logo from './logo.svg';
import './App.css';
import Casilla from './components/casilla';
import React, { useState } from 'react';


export const EstadoGlobal = React.createContext();
function App() {
  
  /**
   *  true: X
   *  false: O
   */
     
  const [jugador, setJugador] = useState(true);
   
  const actualizarJugador = ()=>{
    setJugador(!jugador);
  }
  
  var casillas = [];
  
  for (let i = 0; i < 9; i++) {
    casillas[i] = <Casilla id={i} actualizarJugador={actualizarJugador}/>
  }

  return (
    <EstadoGlobal.Provider value={jugador}>
    <div className="App">
      <header className="App-header">
        <div className='Container'>
          {casillas}
        </div>
      </header>
    </div>
    </EstadoGlobal.Provider>
  );
}

export default App;
