import React, { useState } from 'react'
import "../styles/casillas.css"

export default function Casilla() {
  
    const [marcada, setearCasilla] = useState(false);
    
    const clickCasilla = () => {
            if(marcada){
                setearCasilla(false);
            } else {
                setearCasilla(true);
            }
    };


    return (
    <div className='Casilla' onClick={clickCasilla}>
        <h1>{marcada? "x" : ""}</h1>
    </div>
  )
}
