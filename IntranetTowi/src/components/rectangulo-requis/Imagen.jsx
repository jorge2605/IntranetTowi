import React from 'react'
import './imagen.css'

const imagen = (props) => {
  return (
    <div className="imagen">
        <img src={props.img} alt="" />
        <span className={props.class}>{props.contenido}</span>
    </div>
  )
}

export default imagen