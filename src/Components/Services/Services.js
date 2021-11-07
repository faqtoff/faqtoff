import React from 'react'

const Services = () => {
    return (                        
        <section className="services container-faqstyle" id="services">
            <h2 className="title-content">Servicios</h2>
            <div className="services-container">
                <div className="card card-shadow bg-gray-700 color-gray-300 p-5">
                    <div className="d-flex justify-content-around">
                        <i className="fab fa-html5 fa-4x m-1"></i>
                        <i className="fab fa-js fa-4x m-1"></i>
                        <i className="fab fa-css3-alt fa-4x m-1"></i>
                    </div>
                    <h3>Diseño Web</h3>
                    <p>Manejo de HTML5, CSS3, JS, React, Firebase y mas...</p>
                </div>
                <div className="card card-shadow bg-primary p-5">
                    <div className="d-flex justify-content-around">
                        <i className="fas fa-laptop fa-5x"></i>
                    </div>
                    <h3>Servicio Tecnico de PC</h3>
                    <p>Instalación y configuracion de SO y apps en Mac y Windows. Servicio tecnico y mantenimiento de hardware.</p>
                </div>
                <div className="card card-shadow bg-gray-700 color-gray-300 p-5">
                    <i className="fas fa-cube fa-5x"></i>
                    <h3>Diseño 3D</h3>
                    <p>Diseño 3D con Fusion 360 y SolidEdge. Impresion 3D con una Original Prusa i3 MK3s</p>
                </div>
            </div>
        </section>
    )
}

export default Services
