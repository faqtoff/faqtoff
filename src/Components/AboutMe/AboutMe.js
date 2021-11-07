import React from 'react'
import Avatar from '../../assets/avatar.jpeg'
import printCV from '../../services/CVprint'

const AboutMe = () => {
    return (
        <section className="about-me container-faqstyle" id="skils">

            <h2 className="title-content">Sobre Mi</h2>
            <div className="about-me-container">
                <img className="avatar" src={Avatar} alt="Avatar"/>
                <div className="card-portfolio card-shadow p-5">

                    <div className="col-faqstyle">
                        <p>Hola! Soy desarrollador Frontend.</p>
                        <p>Actualmente estudio Ingenieria Industrial en la UTN.BA y realizo trabajos web a pedido</p>
                        <p>Tambien tengo una impresora 3D y realizo impresiones y diseños por pedios</p>
                        <button className="btn btn-rounded bg-primary" onClick={printCV}>Ver Curriculum</button>
                    </div>

                    <div className="col-faqstyle">

                        <p>HTML y CSS</p>
                        <div className="progess">
                        <div 
                                className="progress-bar bg-primary"
                                style={{width: '95%'}}>
                            </div>
                        </div>

                        <p>JS</p>
                        <div className="progess">
                            <div 
                                className="progress-bar bg-gray-700"
                                style={{width: '85%'}}>
                            </div>
                        </div>

                        <p>React</p>
                        <div className="progess">
                            <div 
                                className="progress-bar bg-primary"
                                style={{width: '80%'}}>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default AboutMe
