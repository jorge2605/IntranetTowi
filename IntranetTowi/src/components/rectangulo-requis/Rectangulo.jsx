import React from 'react'
import Imagen from './imagen'
import './rectangulo.css'

const Rectangulo = React.memo(({ id, progreso, usuario, fecha, estado, onClick }) => {
  return (
    <>
      <div className={(estado[0] === "N") ? 'rectangulo-requisiciones' : "rectangulo-requisiciones urgente"} onClick={onClick}>
        <Imagen img="https://cdn.iconscout.com/icon/premium/png-512-thumb/llave-icon-svg-download-png-9928692.png?f=webp&w=512"
          class="id"
          contenido={id}
        />
        <Imagen img="https://cdn.iconscout.com/icon/premium/png-512-thumb/estado-logo-icon-svg-download-png-8294508.png?f=webp&w=512"
          class="estado"
          contenido={progreso}
        />
        <Imagen img="https://cdn.iconscout.com/icon/premium/png-512-thumb/usuario-icon-svg-download-png-6742652.png?f=webp&w=512"
          class="usuario"
          contenido={usuario}
        />
        <Imagen img="https://cdn.iconscout.com/icon/free/png-512/free-fecha-icon-svg-download-png-1526831.png?f=webp&w=512"
          class="fecha"
          contenido={fecha}
        />
      </div>
    </>
  )
})

export default Rectangulo