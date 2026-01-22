import { useEffect, useState } from 'react'
import './proyectos.css'
import Swal from 'sweetalert2'

const Proyectos = () => {
  const [proyectos, setProyectos] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [sugerencias, setSugerencias] = useState([])
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)
  const [busquedaAplicada, setBusquedaAplicada] = useState('')
  const [fechaInicio, setFechaInicio] = useState(null)
  const [fechaFin, setFechaFin] = useState(null)


  useEffect(() => {
    fetch('http://192.168.100.40:5000/proyectos')
      .then(res => res.json())
      .then(data => setProyectos(data))
      .catch(err => console.error(err))
  }, [])

  // NUEVO: proyectos filtrados por búsqueda
  const proyectosFiltrados = proyectos.filter(p =>
    p.Proyecto.toLowerCase().startsWith(busquedaAplicada.toLowerCase())
  )


  const getClaseEstatus = (estatus) => {
    if (estatus === 'EN PROCESO') return 'en-proceso'
    if (estatus === 'CERRADO') return 'cerrado'
    if (estatus === 'DETENIDO') return 'detenido'
    if (estatus === 'REPROSESAMIENTO') return 'reproceso'
    return ''
  }

  const formatearFecha = (fecha) => {
    if (!fecha) return '-'
    const d = new Date(fecha)
    const dia = String(d.getDate()).padStart(2, '0')
    const mes = String(d.getMonth() + 1).padStart(2, '0')
    const anio = String(d.getFullYear()).slice(-2)
    return `${dia}/${mes}/${anio}`
  }

  const verInforme = async (proyecto) => {
    try {
      const res = await fetch(
        `http://192.168.100.40:5000/agenda/proyecto/${encodeURIComponent(proyecto.Proyecto)}`
      )

      const data = await res.json()
      const agenda = Array.isArray(data) ? data : [data]

      if (agenda.length === 0) {
        Swal.fire({
          title: "Sin registros",
          width: 750,
          confirmButtonText: 'Aceptar',
          confirmButtonTextColor: '#3085d6 !important', /* Revisar */
          html: "No hay agenda registrada",
          icon: "warning"
        })
        return
      }

      const htmlAgenda = agenda.map(a => `
        <div style="border-left:5px solid rgb(${obtenerColor(a.Color)}); padding-left:10px; margin-bottom:12px; line-height: 0.9">
          <p><b>Departamento:</b> ${a.Departamento}</p>
          <p><b>Estatus:</b> ${a.Estatus}</p>
          <p><b>Fecha inicio:</b> ${formatearFecha(a.FechaInicio)}</p>
          <p><b>Fecha fin:</b> ${formatearFecha(a.FechaFin)}</p>
          <p><b>Fecha término:</b> ${formatearFecha(a.FechaTermino)}</p>
          <p><b>Creador:</b> ${a.Creador || '-'}</p>
          <p><b>Empleado final:</b> ${a.EmpleadoFin || '-'}</p>
        </div>
      `).join('')

      Swal.fire({
        //title: `<p style = 'color: Black'; font-size: '30px'>${proyecto.Proyecto}</p>`,
        title: proyecto.Proyecto,
        width: 750,
        confirmButtonText: 'Cerrar',
        html: `<div style="text-align:left">${htmlAgenda}</div>`
      })

    } catch (error) {
      console.error(error)
      Swal.fire('Error', 'No se pudo cargar el informe', 'error')
    }
  }
  
  const manejarBusqueda = (texto) => {
    setBusqueda(texto)

    if (texto.trim() === '') {
      setSugerencias([])
      setProyectoSeleccionado(null)
      return
    }

    const coincidencias = proyectos.filter(p =>
      p.Proyecto.toLowerCase().startsWith(texto.toLowerCase())
    )

    setSugerencias(coincidencias)
  }

  const seleccionarProyecto = (proyecto) => {
    setProyectoSeleccionado(proyecto)
    setBusqueda(proyecto.Proyecto)
    setBusquedaAplicada(proyecto.Proyecto)
    setSugerencias([])
  }

  const obtenerColor = (color) => {
    if (!color || color.trim() === '') {
      return '0,0,0'
    }
    return color
  }

  const manejarEnter = (e) => {
    if (e.key === 'Enter') {
      const texto = busqueda.trim()

      setBusquedaAplicada(texto)
      setProyectoSeleccionado(null)
      setSugerencias([])

      if (texto !== '') {
        const existe = proyectos.some(p =>
          p.Proyecto.toLowerCase().startsWith(texto.toLowerCase())
        )

        if (!existe) {
          setBusquedaAplicada('')
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast',
            },
            showConfirmButton: false,
            timer: 2200,
            timerProgressBar: true,
          });
          (async () => {
            await Toast.fire({
              icon: 'error',
              title: `No se encontró el proyecto ${texto}`,
            })
          })();
        }
      }
    }
  }

  const parseFechaDMY = (fecha) => {
    if (!fecha) return null

    const partes = fecha.split('/')
    if (partes.length !== 3) return null

    const dia = partes[0]
    const mes = partes[1]
    const anio = partes[2]

    return new Date(`${anio}-${mes}-${dia}`)
  }

  const abrirFiltroFechas = async () => {
    const { value } = await Swal.fire({
      title: 'Filtrar entre fechas',
      html: `
        <label>Fecha creación (desde)</label>
        <input type="date" id="fechaInicio" class="swal2-input">

        <label>Fecha entrega (hasta)</label>
        <input type="date" id="fechaFin" class="swal2-input">
      `,
      confirmButtonText: 'Filtrar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const inicio = document.getElementById('fechaInicio').value
        const fin = document.getElementById('fechaFin').value

        if (!inicio || !fin) {
          Swal.showValidationMessage('Selecciona ambas fechas')
          return
        }

        const fechaInicio = new Date(inicio)
        const fechaFin = new Date(fin)

        if (fechaInicio > fechaFin) {
          Swal.showValidationMessage('La fecha inicial no puede ser mayor que la fecha final')
          return
        }

        return { inicio, fin }
      }
    })

    if (value) {
      setFechaInicio(value.inicio)
      setFechaFin(value.fin)
    }
  }

  let proyectosAMostrar = proyectos

  if (proyectoSeleccionado) {
    proyectosAMostrar = [proyectoSeleccionado]
  } else if (busquedaAplicada.trim() !== '') {
    proyectosAMostrar = proyectosFiltrados
  }

  if (fechaInicio && fechaFin) {
    const inicio = new Date(fechaInicio)
    const fin = new Date(fechaFin)

    const filtradosPorFecha = proyectosAMostrar.filter(p => {
      const fechaCreacion = parseFechaDMY(p.FechaCreacion)
      const fechaEntrega = parseFechaDMY(p.FechaEntrega)

      if (!fechaCreacion || !fechaEntrega) {
        return false
      }

      return (
        fechaCreacion >= inicio &&
        fechaEntrega <= fin
      )
    })

    if (filtradosPorFecha.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'Sin resultados',
        text: 'No se encontraron proyectos en ese periodo'
      })

      setFechaInicio(null)
      setFechaFin(null)

      proyectosAMostrar = proyectos
    } else {
      proyectosAMostrar = filtradosPorFecha
    }
  }

  const recargarProyectos = async () => {
    setBusqueda('')
    setBusquedaAplicada('')
    setProyectoSeleccionado(null)
    setSugerencias([])
    setFechaInicio(null)
    setFechaFin(null)

    try {
      const res = await fetch('http://192.168.100.40:5000/proyectos')
      const data = await res.json()
      setProyectos(data)
    } catch (error) {
      console.error(error)
      Swal.fire('Error', 'No se pudieron recargar los proyectos', 'error')
    }
  }

  return (
    <>
      <div className="header-proyectos">
        <h2 className="titulo-proyectos">Proyectos</h2>

        <div className="acciones-proyectos">
          {/* Buscador */}
          <div className="contenedor_boton buscador">
            <input
              type="text"
              className="input"
              placeholder="Número de proyecto"
              value={busqueda}
              onChange={(e) => manejarBusqueda(e.target.value)}
              onKeyDown={manejarEnter}
            />

            <div className="icon">
              <svg
                viewBox="0 0 632.399 632.399"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M255.108,0C119.863,0,10.204,109.66,10.204,244.904c0,135.245,109.659,244.905,244.904,244.905
                  c52.006,0,100.238-16.223,139.883-43.854l185.205,185.176c1.671,1.672,4.379,1.672,5.964,0.115l34.892-34.891
                  c1.613-1.613,1.47-4.379-0.115-5.965L438.151,407.605c38.493-43.246,61.86-100.237,61.86-162.702
                  C500.012,109.66,390.353,0,255.108,0z M255.108,460.996c-119.34,0-216.092-96.752-216.092-216.092
                  c0-119.34,96.751-216.091,216.092-216.091s216.091,96.751,216.091,216.091
                  C471.199,364.244,374.448,460.996,255.108,460.996z"
                />
              </svg>
            </div>

            {sugerencias.length > 0 && (
              <div className="sugerencias">
                {sugerencias.map(p => (
                  <div
                    key={p.Id}
                    className="sugerencia-item"
                    onClick={() => seleccionarProyecto(p)}
                  >
                    {p.Proyecto}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* FILTRO */}
          <button className="boton-circular filtro" onClick={abrirFiltroFechas}>
            <div className="icon">
              <svg viewBox="0 0 512 512">
                <path
                  d="M3.9 54.9C-3.1 40.9 6.5 24 22.2 24H489.8c15.7 0 25.3 16.9 18.3 30.9L320 320v112c0 7.2-3.8 13.9-10 17.6l-64 38.4c-12.4 7.4-28-1.5-28-16.6V320L3.9 54.9z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
          <button className="boton-circular recargar" onClick={recargarProyectos}>
            <div className="icon">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M20.3,13.43a1,1,0,0,0-1.25.65A7.14,7.14,0,0,1,12.18,19,7.1,7.1,0,0,1,5,12a7.1,7.1,0,0,1,7.18-7,7.26,7.26,0,0,1,4.65,1.67l-2.17-.36a1,1,0,0,0-1.15.83,1,1,0,0,0,.83,1.15l4.24.7h.17a1,1,0,0,0,.34-.06.33.33,0,0,0,.1-.06.78.78,0,0,0,.2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34,1.34,0,0,0,.07-.18l.75-4a1,1,0,0,0-2-.38l-.27,1.45A9.21,9.21,0,0,0,12.18,3,9.1,9.1,0,0,0,3,12a9.1,9.1,0,0,0,9.18,9A9.12,9.12,0,0,0,21,14.68,1,1,0,0,0,20.3,13.43Z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className={`proyectos-grid ${ proyectosAMostrar.length === 1 ? 'unico-proyecto' : ''}`}>
        {(proyectosAMostrar).map(p => (
          <div
            key={p.Id}
            className={`proyecto-card ${getClaseEstatus(p.Estatus)}`}
            onDoubleClick={() => verInforme(p)}
          >
            <h4 className="titulo-proyecto">{p.Proyecto}</h4>

            <p><strong>No. Cotización:</strong> {p.NumCotizacion}</p>
            <p><strong>Orden de compra:</strong> {p.OC}</p>
            <p><strong>Descripción:</strong> {p.Descripcion}</p>
            <p><strong>Fecha:</strong> {p.FechaCreacion}</p>
            <p><strong>Planta:</strong> {p.Planta}</p>
            <p><strong>Fecha compromiso:</strong> {p.FechaEntrega}</p>

            <p className="linea-doble">
              <span><strong>Facturado:</strong> {p.Facturado}</span>
              <span><strong>Costo:</strong> {p.Costo} <i>{p.Moneda}</i></span>
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Proyectos