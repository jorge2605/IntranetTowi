import './itemmodal.css'

const ItemModal = (props) => {
  return (
    <>
        <div className="itemContenedor ", {props.segundo}>
            <p className='requisicion'>{props.numrequisicion}</p>
            <p className='codigo'>{props.codigo}</p>
            <p className='descripcion'>{props.descripcion}</p>
            <p className='proyecto'>{props.proyecto}</p>
            <p className='cantidad'>{props.cantidad}</p>
            <p className='proveedor'>{props.proveedor}</p>
            <p className='precio'>{props.precio}</p>
            <p className='llego'>{props.llego}</p>
            <p className='oc'>{props.oc}</p>
            <p className='fec'>{props.fecha}</p>
        </div>
    </>
  )
}

export default ItemModal