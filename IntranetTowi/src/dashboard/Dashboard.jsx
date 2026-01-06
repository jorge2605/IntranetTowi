import React from 'react'
import './dashboard.css'
import Icono from '../components/icono-dash/Icono'

const Dashboard = () => {
  return (
    <>
      <div className='dash'>
        <div className="contenido">
          <div className='oeste'>
            <Icono img="https://cdn.iconscout.com/icon/premium/png-512-thumb/orden-icon-svg-download-png-7083890.png?f=webp&w=512" titulo="Requisiciones"/>
            <Icono img="https://cdn.iconscout.com/icon/premium/png-512-thumb/gerente-de-proyecto-icon-svg-download-png-5563439.png?f=webp&w=512" titulo="Proyectos"/>
            <Icono img="https://cdn.iconscout.com/icon/premium/png-512-thumb/usuario-icon-svg-download-png-8063145.png?f=webp&w=512" titulo="Usuario"/>
            <Icono img="https://cdn.iconscout.com/icon/premium/png-512-thumb/salir-de-pantalla-completa-icon-svg-download-png-4827491.png?f=webp&w=512" titulo="Salir" salir={true}/>
          </div>
          <div className='centro'></div>
        </div>
      </div>
    </>
  )
}

export default Dashboard