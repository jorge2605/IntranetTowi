import React from 'react'
import './icono.css'
const Icono = (props) => {
console.log(props.salir ? 'noborde' : 'borde')
  return (
    <>
        <div className='completo'>
            <img src={props.img} className={props.salir ? 'noborde' : 'borde'} alt="" />
            <p>{props.titulo}</p>
        </div>
    </>
  )
}

export default Icono