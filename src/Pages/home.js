import React from 'react'
import BannerFullScreen from '../FaqStyle/Banner/BannerFullScreen'
import NavbarAside from '../FaqStyle/Navbar/NavbarAside'

import Avatar from '../assets/avatar.jpeg'
import FaqFooter from '../FaqStyle/FaqFooter/FaqFooter'
import WorksHolder from '../Components/Works/WorksHolder'

const home = () => {
    return (
        <div className='full-container'>
            <NavbarAside className='bg-secondary'>
                <span className='color-gray-300'>@FaqToff</span>
                <ul>
                    <li className='m-3'><a href="#home" className='color-gray-300'><i class="fas fa-home color-primary"></i> Home</a></li>
                    <li className='m-3'><a href="#skils" className='color-gray-300'><i class="fas fa-briefcase color-primary"></i> Servicios</a></li>
                    <li className='m-3'><a href="#skils" className='color-gray-300'><i class="fas fa-user color-primary"></i> Sobre Mi</a></li>
                    <li className='m-3'><a href="#experience" className='color-gray-300'><i class="fas fa-graduation-cap color-primary"></i>Experiencia</a></li>
                    <li className='m-3'><a href="#skils" className='color-gray-300'><i class="fas fa-layer-group color-primary"></i> Trabajos</a></li>
                    <li className='m-3'><a href="#contact" className='color-gray-300'><i class="fas fa-comments color-primary"></i> Contacto</a></li>
                </ul>
            </NavbarAside>
            <div className="main-container">
                <BannerFullScreen className='banner-img color-white' id="home" btnClassName='color-black'> 
                    <img src={Avatar} alt="avatar" />
                    <h1 className='fs-banner-info__title color-black'>Facundo Toffolo Pasquini <span className=' color-black'>Frontend Developer</span></h1>
                <div className="btn-social-desk">
                    <a class="btn-social color-black" href="https://www.linkedin.com/in/faqtoff" target="blank"><i class="fab fa-linkedin"></i></a>
                    <a class="btn-social color-black" href="https://github.com/faqtoff" target="blank"><i class="fab fa-github"></i></a>
                    <a class="btn-social color-black" href="#" target="blank"><i class="fab fa-facebook-square"></i></a>
                    <a class="btn-social color-black" href="https://www.instagram.com/faqtoff/" target="blank"><i class="fab fa-instagram"></i></a>
                </div>
                <a className="btn btn-rounded bg-primary" href="#contact">Contactame</a>
                </BannerFullScreen>
                <div id='main'>
                        <section className="about-me container-faqstyle" id="skils">

                            <h2 className="title-content">Sobre Mi</h2>
                            <div className="about-me-container">
                                <img className="avatar" src={Avatar} alt="Avatar"/>
                                <div className="card-portfolio card-shadow p-5">

                                    <div className="col-faqstyle">
                                        <p>Hola! Soy desarrollador Frontend.</p>
                                        <p>Actualmente estudio Ingenieria Industrial en la UTN.BA y realizo trabajos web a pedido</p>
                                        <p>Tambien tengo una impresora 3D y realizo impresiones y diseños por pedios</p>
                                        <button className="btn btn-rounded bg-primary">Ver Curriculum</button>
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
    
                        <section className="services container-faqstyle" id="services">
                            <h2 className="title-content">Servicios</h2>
                            <div className="services-container">
                                <div className="card card-shadow bg-gray-700 color-gray-300 p-5">
                                    <div className="d-flex justify-content-around">
                                        <i class="fab fa-html5 fa-4x m-3"></i>
                                        <i class="fab fa-js fa-4x m-3"></i>
                                        <i class="fab fa-css3-alt fa-4x m-3"></i>
                                    </div>
                                    <h3>Diseño Web</h3>
                                    <p>Manejo de HTML5, CSS3, JS, React, Firebase y mas...</p>
                                </div>
                                <div className="card card-shadow bg-primary p-5">
                                    <div className="d-flex justify-content-around">
                                        <i class="fas fa-laptop fa-5x"></i>
                                    </div>
                                    <h3>Servicio Tecnico de PC</h3>
                                    <p>Instalación y configuracion de SO y apps en Mac y Windows. Servicio tecnico y mantenimiento de hardware.</p>
                                </div>
                                <div className="card card-shadow bg-gray-700 color-gray-300 p-5">
                                    <i class="fas fa-cube fa-5x"></i>
                                    <h3>Diseño 3D</h3>
                                    <p>Diseño 3D con Fusion 360 y SolidEdge. Impresion 3D con una Original Prusa i3 MK3s</p>
                                </div>
                            </div>
                        </section>

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
    
                        <WorksHolder />

                        <section className="contacto-container container-faqstyle" id="contact">
                            <h3 className="title-content">Contactame</h3>
                            <div className="formulario">
                                <div class="col-fqstyle">
                                <h3>Enviame un mensaje!</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis et ab aut, repellendus quia facere animi doloremque fugiat magnam. Dolor accusantium, labore non possimus doloribus dolorum praesentium nobis culpa tenetur?</p>
                                </div>
                                <div className="col-fqstyle">
                                    <form className='form-shadow' action="">
                                        <input className='input input-shadow' type="text" placeholder="Nombre" />
                                        <input className='input input-shadow' type="email" placeholder="Email" />
                                        <textarea className='textarea textarea-shadow' name="mensaje" id="" placeholder="Tu mensaje"></textarea>
                                        <button className="btn btn-rounded bg-primary">Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                        
                        <footer>
                            <div className="footer bg-secondary">
                            <span className='color-white'>@FaqToff</span>
                            <div className="btn-social-desk">
                                <a class="btn-social color-white" href="https://www.linkedin.com/in/faqtoff" target="blank"><i class="fab fa-linkedin"></i></a>
                                <a class="btn-social color-white" href="https://github.com/faqtoff" target="blank"><i class="fab fa-github"></i></a>
                                <a class="btn-social color-white" href="#" target="blank"><i class="fab fa-facebook-square"></i></a>
                                <a class="btn-social color-white" href="https://www.instagram.com/faqtoff/" target="blank"><i class="fab fa-instagram"></i></a>
                            </div>
                            </div>
                            <FaqFooter />
                        </footer>
                </div>
            </div>
        </div>
    )
}

export default home
