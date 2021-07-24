import React from 'react'
import './Navbar.css'
import logo from './assets/home.svg'
import Menu from './assets/menu.svg'

const Navbar = ({children, name, className}) => {
    return (
        <div>
            <nav className={"navbar "+className}>
                <img src={logo} alt="Icono" className="logo" />
                <label htmlFor={name}>
                    <img src={Menu} alt="Menu" className="logo-menu"/>
                </label>
                <input type="checkbox" id={name} className="menu-navbar"/>
                {children}
            </nav>
        </div>
    )
}

export default Navbar
