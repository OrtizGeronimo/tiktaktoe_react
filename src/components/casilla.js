import React, { useContext, useState } from 'react'
import "../styles/casillas.css"
import {EstadoGlobal} from "../App"



export default function Casilla(props) {
  
    const actualizarJugador = props.actualizarJugador;

    const jugadorActual = useContext(EstadoGlobal);

    const [casilla, setCasilla] = useState("");
    
    const clickCasilla = () => {
            if(casilla === ""){
                if(jugadorActual == true){
                    setCasilla("X");
                    actualizarJugador(props.id, "X");

                } else {
                    setCasilla("O");
                    actualizarJugador(props.id, "O");
                }
                
            }
            
    };


    return (
    <div className='Casilla' onClick={clickCasilla}>
        <h1>{casilla}</h1>
    </div>
  )
}
