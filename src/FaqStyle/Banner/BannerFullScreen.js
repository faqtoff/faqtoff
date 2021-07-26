import React from 'react'
import './BannerFullScreen.css'
import ScrollIcon from './assets/scroll.png'

const BannerFullScreen = ({children, className, id, btnClassName}) => {
    return (
        <header className={"fs-banner-container " + className} id={id}>
            <div className="fs-background-image">
                <div className="fs-banner-info">
                    {children}
                </div>
            </div>
            <a className={"btn-scroll "+btnClassName} href="#main">
                <span>Scroll Down</span>
                <i className="fas fa-angle-double-down"></i>
            </a>
        </header>
    )
}

export default BannerFullScreen
