import React from 'react'
import Logo from '../../components/Logo'
import "./menu.css"

function Nav() {
  return (
    <nav className="border nav">
        <div>
            <Logo />
            <div className='menu'>
                <div className='menu-item'>
                    <img src='inicio.svg' />
                    <h5>Inicio</h5>
                </div>
                <div className='menu-item'>
                    <img src='dashboard.svg' />
                    <h5>Dashboard</h5>
                </div>
                <div className='menu-item'>
                    <img src='actividad.svg' />
                    <h5>Actividad</h5>
                </div>
                <div className='menu-item'>
                    <img src='configuracion.svg' />
                    <h5>Configuración</h5>
                </div>
                <div className='menu-item'>
                    <img src='huertos.svg' />
                    <h5>Huertos Activos</h5>
                </div>
                <div className='menu-item'>
                    <img src='noticias.svg' />
                    <h5>Noticias</h5>
                </div>
                <hr />
                <div className='menu-item'>
                    <h4>Publicar Actualización</h4>
                    <img src='postplus.svg'/>
                </div>
                <div className='menu-item'> 
                    <img src='publicado.svg'/>
                    <h5>Publicados</h5>
                </div>
            </div>
        </div>
        <div className='menu-item invitar-personas'> 
                <img src='plus.svg'/>
                <h5>Invitar personas</h5>
            </div>
    </nav>
  )
}

export default Nav