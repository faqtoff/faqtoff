import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavbarAside from '../../FaqStyle/Navbar/NavbarAside'

const Navbar = () => {
    return (
        <Router>
            <NavbarAside className='bg-secondary'>
                <span className='color-gray-300'>@FaqToff</span>
                <ul>
                    <li className='m-3'><Link to="#home" className='color-gray-300'><i className="fas fa-home color-primary"></i> Home</Link></li>
                    <li className='m-3'><Link to="#skils" className='color-gray-300'><i className="fas fa-briefcase color-primary"></i> Servicios</Link></li>
                    <li className='m-3'><Link to="#skils" className='color-gray-300'><i className="fas fa-user color-primary"></i> Sobre Mi</Link></li>
                    <li className='m-3'><Link to="#experience" className='color-gray-300'><i className="fas fa-graduation-cap color-primary"></i>Experiencia</Link></li>
                    <li className='m-3'><Link to="#skils" className='color-gray-300'><i className="fas fa-layer-group color-primary"></i> Trabajos</Link></li>
                    <li className='m-3'><Link to="#contact" className='color-gray-300'><i className="fas fa-comments color-primary"></i> Contacto</Link></li>
                </ul>
            </NavbarAside>
        </Router>
    )
}

export default Navbar
