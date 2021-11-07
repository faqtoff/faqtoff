import React from 'react'
import NavbarAside from '../../FaqStyle/Navbar/NavbarAside'

const Navbar = () => {
    return (
            <NavbarAside className='bg-secondary'>
                <span className='color-gray-300'>@FaqToff</span>
                <ul>
                    <li className='m-3'><a href="#home" className='color-gray-300'><i className="fas fa-home color-primary"></i> Home</a></li>
                    <li className='m-3'><a href="#skils" className='color-gray-300'><i className="fas fa-user color-primary"></i> Sobre Mi</a></li>
                    <li className='m-3'><a href="#services" className='color-gray-300'><i className="fas fa-briefcase color-primary"></i> Servicios</a></li>
                    <li className='m-3'><a href="#experience" className='color-gray-300'><i className="fas fa-graduation-cap color-primary"></i>Experiencia</a></li>
                    <li className='m-3'><a href="#works" className='color-gray-300'><i className="fas fa-layer-group color-primary"></i> Trabajos</a></li>
                    <li className='m-3'><a href="#contact" className='color-gray-300'><i className="fas fa-comments color-primary"></i> Contacto</a></li>
                    <li className="m-3"><a href="" className="color-gray-300"><i className="fas fa-shapes color-primary"></i> Mis Apps</a></li>
                </ul>
            </NavbarAside>
    )
}

export default Navbar
