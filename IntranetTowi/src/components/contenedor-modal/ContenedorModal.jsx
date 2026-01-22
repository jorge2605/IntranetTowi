import React, { useState } from 'react'
import './contenedormodal.css'
import ItemModal from '../tabla-modal/ItemModal'
import { useEffect } from 'react';

const ContenedorModal = (props) => {

    const [requisiciones, setRequisiciones] = useState([]);
    // console.log(id.id)
    useEffect(() => {

        const url = props.busqueda
            ? `http://192.168.100.40:5000/filtrorequisiciones?texto=${encodeURIComponent(props.busqueda)}%`
            : `http://192.168.100.40:5000/requisiciones?idd=${props.id}`;

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setRequisiciones(data);
            })
            .catch(err => {
                console.error("Error fetch:", err);
            });

    }, [props,]);

    return (
        <>
            <div className="contenedorModal">
                <ItemModal
                    numrequisicion='Requisicion'
                    codigo='Codigo'
                    descripcion='Descripcion'
                    proyecto='Proyecto'
                    cantidad='Cantidad'
                    proveedor='Proveedor'
                    precio='Precio'
                    llego='Llego'
                    oc='OC'
                    fecha='Fecha'
                />
                {requisiciones.map(r => (
                    <ItemModal
                        numrequisicion={r.numrequisicion}
                        codigo={r.codigo}
                        descripcion={r.descripcion}
                        proyecto={r.proyecto}
                        cantidad={r.cantidad}
                        proveedor={r.proveedor}
                        precio={r.precio}
                        llego={r.llego}
                        oc={r.oc}
                        fecha={r.fecharecibo}
                    />
                ))}
            </div>
        </>
    )
}

export default ContenedorModal