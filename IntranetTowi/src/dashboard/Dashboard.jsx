import React from 'react'
import './dashboard.css'
import Icono from '../components/icono-dash/Icono'
import Requisiciones from '../components/requisiciones/Requisiciones'
import Proyectos from '../components/proyectos/Proyectos'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  const [vista, setVista] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('nombre');
    localStorage.removeItem('usuario');
    navigate('/');
    window.location.reload()
  };

  const vistas = {
  requisiciones: <Requisiciones />,
  proyectos: <Proyectos />,
  // usuario: <Usuario />
  };

  return (
    <>
      <div className='dash'>
        <div className="contenido">
          <div className='oeste'>
            <Icono img="https://cdn.iconscout.com/icon/premium/png-512-thumb/orden-icon-svg-download-png-7083890.png?f=webp&w=512"
             titulo="Requisiciones"
             salir={false}
             onClick={() => setVista("requisiciones")}
             />
            <Icono img="https://cdn.iconscout.com/icon/premium/png-512-thumb/gerente-de-proyecto-icon-svg-download-png-5563439.png?f=webp&w=512"
             titulo="Proyectos"
             salir={false}
             onClick={() => {setVista('proyectos')}}
             />
            <Icono img="https://cdn.iconscout.com/icon/premium/png-512-thumb/usuario-icon-svg-download-png-8063145.png?f=webp&w=512"
            titulo="Usuario"
            salir={false}
            onClick={() => {setVista('usuario')}}
            />
            <Icono img="https://cdn.iconscout.com/icon/premium/png-512-thumb/salir-de-pantalla-completa-icon-svg-download-png-4827491.png?f=webp&w=512"
            titulo="Salir"
             salir={true}
             onClick={handleLogout}
             />
          </div>
          <div className='centro'>
            {vistas[vista]}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard