import logo from './logo.svg';
import './App.css';
import Casilla from './components/casilla';
import React, { useState } from 'react';


export const EstadoGlobal = React.createContext();
export default function App() {
  
  /**
   *  true: X
   *  false: O
   */
     
  const [jugador, setJugador] = useState(true);
  const [simboloJugador, setSimboloJugador] = useState("O");
  const [titulo, setTitulo] = useState("Bienvenidos! Comienza X");
  const [contador, setContador] = useState(0);
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [componentKey, setComponentKey] = useState(0);
  

  const actualizarJugador = (index, simbolo)=>{
    
    tablero[index] = simbolo;
    
    setTablero(tablero);
    
    
    if (analizarGanadores(tablero)){
      setTitulo("Felicidades " + simbolo + "! Ganaste la partida");
      return;
    }
    //actualizar titulo
    
    setTitulo("El turno es de " + simboloJugador);
    
    setContador(contador+1);
    setJugador(!jugador);

    if (jugador) {
      setSimboloJugador("X");
    } else {
      setSimboloJugador("O");
    }
    
  }
  
  var casillas = [];
  
  for (let i = 0; i < 9; i++) {
    casillas[i] = <Casilla key={i} id={i} actualizarJugador={actualizarJugador}/>
  }


  const combinaciones = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];
  
  function analizarGanadores(tablero) {
    for (let combinacion of combinaciones) {
      const [a, b, c] = combinacion;
      const casillaAValue = tablero[a]
      const casillaBValue = tablero[b]
      const casillaCValue = tablero[c]
      if (
        casillaAValue &&
        casillaAValue === casillaBValue &&
        casillaAValue === casillaCValue
      ) {
        return true;
      }
    }
    return false;
  }
  
  function reset(){
    setComponentKey(componentKey + 1)
    setJugador(true);
    setSimboloJugador("O");
    setTitulo("Bienvenidos! Comienza X");
    setTablero(Array(9).fill(null)); 
  }


  return (
    <EstadoGlobal.Provider value={jugador}>
    <div className="App" key={componentKey}>
      <header className="App-header">
        <h1 className='Titulo-Jugador'>{titulo} </h1>
        <div className='Container'>
          {casillas}
        </div>
        <button className='Boton' onClick={reset}>Limpiar tablero</button>
      </header>
      
    </div>
    </EstadoGlobal.Provider>
  );
}
