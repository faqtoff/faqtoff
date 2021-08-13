import React from 'react'
import ModalButtonWrapper from '../../FaqStyle/Modal/ModalButtonWrapper'

import iniComputacion from '../../assets/certificados/iniComputacion.png'
import iniComputacion2 from '../../assets/certificados/iniComputacion_utn.png'
import RCGitHubInicial from '../../assets/certificados/RC-GitHub-Inicial.png'
import RCHTMLYCSS from '../../assets/certificados/RC-HTML-CSS.png'
import RCJS from '../../assets/certificados/RC-JavaScript-Inicial.png'
import RCReactInicial from '../../assets/certificados/RC-React-Inicial.png'
import UBoostrap from '../../assets/certificados/udemy_1.jpg'
import UDesarrolloWeb from '../../assets/certificados/udemy_2.jpg'

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
                        <h3>Udemy</h3>
                        <p className="experience-container__topics__card__data__description">Realicé los siguientes cursos de Desarrollo Web:</p>
                        <ul>
                            <li>
                                <ModalButtonWrapper className='btn-link' buttonText='Desarrollo Web Completo con HTNL5, CSS3, JS, AJAX, PHP y MySQL'>
                                    <img src={UDesarrolloWeb} alt="RC-GitHub" />
                                </ModalButtonWrapper>
                            </li>
                            <li><ModalButtonWrapper className='btn-link' buttonText='Boostrap 4 + Forms con PHP'>
                                    <img src={UBoostrap} alt="RC-HTMLyCSS" />
                                </ModalButtonWrapper>
                            </li>
                        </ul>
                </div>
                <div className="experience-container__topics__card__data">
                        <i className="fas fa-graduation-cap color-primary"></i>
                        <span className="fecha">2021 - 2021</span>
                        <h3>RocketCode</h3>
                        <p className="experience-container__topics__card__data__description">Realicé los siguientes cursos de Frontend:</p>
                        <ul>
                            <li>
                                <ModalButtonWrapper className='btn-link' buttonText='GitHub - Inicial'>
                                    <img src={RCGitHubInicial} alt="RC-GitHub" />
                                </ModalButtonWrapper>
                            </li>
                            <li><ModalButtonWrapper className='btn-link' buttonText='HTML y CSS - Inicial'>
                                    <img src={RCHTMLYCSS} alt="RC-HTMLyCSS" />
                                </ModalButtonWrapper>
                            </li>
                            <li><ModalButtonWrapper className='btn-link' buttonText='JavaScript - Inicial'>
                                    <img src={RCJS} alt="RC-JS" />
                                </ModalButtonWrapper>
                            </li>
                            <li><ModalButtonWrapper className='btn-link' buttonText='React - Inicial'>
                                    <img src={RCReactInicial} alt="RC-React" />
                                </ModalButtonWrapper>
                            </li>
                        </ul>
                </div>
                <div className="experience-container__topics__card__data">
                        <i className="fas fa-graduation-cap color-primary"></i>
                        <span className="fecha">2011 - 2012</span>
                        <h3>ini Capacitacion</h3>
                        <p className="experience-container__topics__card__data__description">Realicé un curso de "Tecnico en reparacion de Hardware y Redes" en el instituti ini Capacitacion, en la ciudad de San Salvador de Jujuy.</p>

                        <ModalButtonWrapper className='btn-link mt-1' buttonText='Ver diploma'>
                            <img src={iniComputacion} alt="Certificado_ini" />
                            <img src={iniComputacion2} alt="Certificado_ini" />
                        </ModalButtonWrapper>
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
