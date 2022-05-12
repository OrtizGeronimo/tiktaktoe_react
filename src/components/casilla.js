import React, { useContext, useState } from 'react'
import "../styles/casillas.css"
import {EstadoGlobal} from "../App"

export default function Casilla(props) {
  
    const actualizarJugador = props.actualizarJugador;

    const jugadorActual = useContext(EstadoGlobal);

    const [marcada, setearCasilla] = useState("");
    
    const clickCasilla = () => {
            if(marcada == ""){
                if(jugadorActual == true){
                    setearCasilla("X");
                } else {
                    setearCasilla("O");
                }
                actualizarJugador();
            }
            
    };


    return (
    <div className='Casilla' onClick={clickCasilla}>
        <h1>{marcada}</h1>
    </div>
  )
}
