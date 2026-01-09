import React from 'react'
import { useState, useEffect, useMemo, useRef } from 'react';
import Rectangulo from '../rectangulo-requis/Rectangulo';
import Modal from '../modal/Modal';

const LIMIT = 5

const Requisiciones2 = () => {
    const [proyectos, setProyectos] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [seleccionado, setSeleccionado] = useState(null);
    const [loading, setLoading] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        setLoading(true);
        fetch(`http://192.168.100.40:5000/requisicion?page=${page}&limit=${LIMIT}`)
            .then(res => res.json())
            .then(data => {
                console.log("empieza")
                setProyectos(prev => [...prev, ...data]);
                setLoading(false);
                console.log("termina")
            });
    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !loading) {
                setPage(p => p + 1);
            }
        });

        if (observerRef.current) observer.observe(observerRef.current);

        return () => observer.disconnect();
    }, [loading]);

    return (
        <>
            <div className="input-container">
                <input type="text" id='buscar' placeholder=' ' value={busqueda} onKeyDown={(e) => setBusqueda(e.target.value)} />
                <label htmlFor="buscar">Buscar por requisicion</label>
            </div>
            <div className="contenedor-requisiciones">
                {proyectos.map(r => (
                    <Rectangulo
                        key={r.Id}
                        id={r.Id}
                        progreso={r.Progreso}
                        usuario={r.requisitor}
                        fecha={r.Fecha}
                        estado={r.Estado}
                        onClick={() => {
                            setSeleccionado(r.Id);
                            setOpen(true);
                        }}
                    />
                ))}

                <div ref={observerRef} style={{ height: 20 }} />
            </div>

            {loading && <p style={{ textAlign: 'center' }}>Cargando...</p>}
            <Modal open={open} onClose={() => setOpen(false)}>
                <h3>{seleccionado}</h3>
                <p>Contenido del modal</p>
                <p>kprhe</p>
                <p>kprhe</p>
            </Modal>
        </>
    )
}

export default Requisiciones2