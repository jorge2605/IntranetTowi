import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import logo from '/towi_Azul.png'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Login = () => {
  const navigate = useNavigate();
  const [init, setInit] = useState(false);
  
  
  async function log() {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("password").value;

    const response = await fetch("http://192.168.100.40:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        usuario: usuario,
        contrasena: contrasena
      })
    });
    
    const data = await response.json();
    console.log(data.auth)
    if (data.auth === true) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('nombre', data.nombre);
      localStorage.setItem('usuario', usuario);
      navigate('/dashboard')
      window.location.reload()
    } else 
      alert("Datos incorrectos")
    }
    
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        console.log("tsParticles engine loaded");
        await loadFull(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
    
  return (
    <>
      {init && (
          <Particles
            id="tsparticles"
            options={{
              fullScreen: {
                enable: true,
                zIndex: 0,   // 👈 CLAVE
              },
              background: {
                color: "#003c80ff",
              },
              particles: {
                number: { value: 100 },
                links: {
                  enable: true,
                  distance: 150,
                  color: "#ffffff",
                },
                move: {
                  enable: true,
                  speed: 2,
                },
                size: {
                  value: 3,
                },
              },
            }}
          />
        )}
        <div className='centro'>
          <div className='rectangulo'>
              <img src={logo} alt="" />
              <p>Servicios Industriales 3i</p>
              <div className="formulario">
                  <div className="input-container">
                      <input type="text" id='usuario' placeholder=' '/>
                      <label htmlFor="usuario">Usuario</label>
                  </div>
                  <div className="input-container">
                      <input type="password" id='password' placeholder=' '/>
                      <label htmlFor="password">Contraseña</label>
                  </div>
              </div>
              <button onClick={log} className='btnIngresar'>Ingresar</button>
          </div>
      </div>
    </>
  )
}

export default Login