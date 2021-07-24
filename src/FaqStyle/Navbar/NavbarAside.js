import React from 'react';
import './NavbarAside.css';
import ListIcon from './assets/menu.svg'
import CloseIcon from './assets/close.svg'

const NavbarAside = ({children, className}) => {
    return (
        <aside className={"navbar-container "+className}>
            <label htmlFor="navbar" className="navbar-container__mobile__list__label">
                <input type="checkbox" id="navbar" className="navbar-input" />
                <div className="navbar-open">
                    <img className="navbar-open-icon" src={ListIcon} alt="OpenNav" />
                </div>
                <div className="navbar-close">
                    <img className="navbar-close-icon" src={CloseIcon} alt="OpenNav" />
                </div>
                <nav className={"navbar-aside "+className}>
                    {children}
                </nav>
            </label>
        </aside>
    )
}

export default NavbarAside
