import React from 'react'

const Experience = () => {
    return (
        <section className="experience-container container-faqstyle" id="experience">

            <h2 className="title-content">Experiencia</h2>

            <div className="experience-container__topics">

                <div className="experience-container__topics__card card-portfolio">
                    <div className="experience-container__topics__card__data">
                        <i className="fas fa-graduation-cap color-primary"></i>
                        <span className="fecha">2021 - actualidad</span>
                        <h3>UTN.BA</h3>
                        <p className="experience-container__topics__card__data__description">Actualmente me encuentro estudiando la carrera de Ingenieria Industrial en la Universidad Tecnologica Nacional.</p>
                </div>
                <div className="experience-container__topics__card__data">
                        <i className="fas fa-graduation-cap color-primary"></i>
                        <span className="fecha">2021 - 2021</span>
                        <h3>RocketCode</h3>
                        <p className="experience-container__topics__card__data__description">Realicé los siguientes cursos de Frontend:</p>
                        <ul>
                        <li><a style={{marginTop:"25px"}} className="color-primary" href="">GitHub - Inicial</a></li>
                        <li><a style={{marginTop:"25px"}}  className="color-primary" href="">HTML y CSS - Inicial</a></li>
                        <li><a style={{marginTop:"25px"}}  className="color-primary" href="">JavaScript - Inicial</a></li>
                        <li><a style={{marginTop:"25px"}}  className="color-primary" href="">React - Inicial</a></li>
                        </ul>
                </div>
                <div className="experience-container__topics__card__data">
                        <i className="fas fa-graduation-cap color-primary"></i>
                        <span className="fecha">2016 - 2017</span>
                        <h3>ini Capacitacion</h3>
                        <p className="experience-container__topics__card__data__description">Realicé un curso de "Tecnico en reparacion de Hardware y Redes" en el instituti ini Capacitacion, en la ciudad de San Salvador de Jujuy.</p>
                        <a style={{marginTop:"25px"}}  className="color-primary" href="">Ver diploma</a>
                </div>
                <a style={{alignSelf: "center"}}  className="color-primary" href="">Ver más</a>
                </div>

                <div className="experience-container__topics__card card-portfolio">
                    <div className="experience-container__topics__card__data">
                        <i className="fas fa-briefcase color-primary"></i>
                        <span className="fecha">2021 - actualidad</span>
                        <h3>Jujuy Unida</h3>
                        <p className="experience-container__topics__card__data__description">Encargado de desarrollo web de <a className="color-primary" href="https://jujuyunida.com" target="blanck">JujuyUnida.com</a></p>
                    </div>
                    <div className="experience-container__topics__card__data">
                        <i className="fas fa-briefcase color-primary"></i>
                        <span className="fecha">2020 - 2020</span>
                        <h3>Codo a Codo 3D</h3>
                        <p className="experience-container__topics__card__data__description">Tesorero del grupo autoconvocado de Makers 3D para la produccion de protecciones contra el COVID-19 dedicado a la donacion a nivel nacional.</p>
                        <a className="color-primary" href="">Más información</a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Experience
