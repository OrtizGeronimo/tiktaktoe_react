import React, { useContext, useState } from 'react'
import "../styles/casillas.css"
import {EstadoGlobal} from "../App"

interface Props{
    id: number,
    actualizarJugador: () => void
}

export default function Casilla(props: Props) {
  
    const actualizarJugador = props.actualizarJugador;

    const jugadorActual = useContext(EstadoGlobal);

    const [marcada, setearCasilla] = useState("");
    
    const clickCasilla = () => {
            if(marcada === ""){
                if(jugadorActual){
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
