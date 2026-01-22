import React from 'react'
import './icono.css'
const Icono = (props) => {
  return (
    <>
        <div className='completo' onClick={props.onClick}>
            <img src={props.img} className={props.salir ? 'noborde' : 'borde'} alt="" />
            <p>{props.titulo}</p>
        </div>
    </>
  )
}

export default Icono