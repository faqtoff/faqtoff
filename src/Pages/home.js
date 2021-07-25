import React from 'react'
import BannerFullScreen from '../FaqStyle/Banner/BannerFullScreen'
import NavbarAside from '../FaqStyle/Navbar/NavbarAside'

import Avatar from '../assets/avatar.jpeg'
import FaqFooter from '../FaqStyle/FaqFooter/FaqFooter'

const home = () => {
    return (
        <div className='full-container'>
            <NavbarAside className='bg-secondary'>
                <span className='color-gray-300'>@FaqToff</span>
                <ul>
                    <li className='m-3'><a href="#home" className='color-gray-300'><i class="fas fa-home"></i> Home</a></li>
                    <li className='m-3'><a href="#skils" className='color-gray-300'><i class="fas fa-user"></i> Servicios</a></li>
                    <li className='m-3'><a href="#skils" className='color-gray-300'><i class="fas fa-user"></i> Sobre Mi</a></li>
                    <li className='m-3'><a href="#experience" className='color-gray-300'><i class="fas fa-briefcase"></i> Experiencia</a></li>
                    <li className='m-3'><a href="#skils" className='color-gray-300'><i class="fas fa-user"></i> Trabajos</a></li>
                    <li className='m-3'><a href="#contact" className='color-gray-300'><i class="fas fa-comments"></i> Contacto</a></li>
                </ul>
            </NavbarAside>
            <div className="main-container">
                <BannerFullScreen className='banner-img color-white' id="home" btnClassName='color-black'> 
                    <img src={Avatar} alt="avatar" />
                    <h1 className='fs-banner-info__title color-black'>Facundo Toffolo Pasquini <span className=' color-black'>Frontend Developer</span></h1>
                <div className="btn-social-desk">
                    <a class="btn-social bg-linkedin" href="https://www.linkedin.com/in/faqtoff" target="blank"></a>
                    <a class="btn-social bg-github" href="https://github.com/faqtoff" target="blank"></a>
                    <a class="btn-social bg-twitter" href="#" target="blank"></a>
                    <a class="btn-social bg-instagram" href="https://www.instagram.com/faqtoff/" target="blank"></a>
                </div>
                <a className="btn btn-rounded" href="#contact">Contactame</a>
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
                                        <button className="btn btn-rounded">Ver Curriculum</button>
                                    </div>

                                    <div className="col-faqstyle">

                                        <p>HTML y CSS</p>
                                        <div className="progess">
                                        <div 
                                                className="progress-bar bg-gray-600"
                                                style={{width: '85%'}}>
                                            </div>
                                        </div>

                                        <p>JS</p>
                                        <div className="progess">
                                            <div 
                                                className="progress-bar bg-gray-600"
                                                style={{width: '85%'}}>
                                            </div>
                                        </div>

                                        <p>React</p>
                                        <div className="progess">
                                            <div 
                                                className="progress-bar bg-gray-600"
                                                style={{width: '85%'}}>
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                        </section>

    
                        <section className="experience-container container-faqstyle" id="experience">
    
                            <h2 className="title-content">Experiencia</h2>

                            <div className="experience-container__topics">

                                <div className="experience-container__topics__card card-portfolio">
                                    <div className="experience-container__topics__card__data">
                                        <i className="fas fa-graduation-cap"></i>
                                        <span className="fecha">2021 - actualidad</span>
                                        <h3>UTN.BA</h3>
                                        <p className="experience-container__topics__card__data__description">Actualmente me encuentro estudiando la carrera de Ingenieria Industrial en la Universidad Tecnologica Nacional.</p>
                                </div>
                                <div className="experience-container__topics__card__data">
                                        <i className="fas fa-graduation-cap"></i>
                                        <span className="fecha">2021 - 2021</span>
                                        <h3>RocketCode</h3>
                                        <p className="experience-container__topics__card__data__description">Realicé los siguientes cursos de Frontend:</p>
                                        <ul>
                                        <li><a style={{marginTop:"25px"}} className="bg-secondary" href="">GitHub - Inicial</a></li>
                                        <li><a style={{marginTop:"25px"}}  className="bg-secondary" href="">HTML y CSS - Inicial</a></li>
                                        <li><a style={{marginTop:"25px"}}  className="bg-secondary" href="">JavaScript - Inicial</a></li>
                                        <li><a style={{marginTop:"25px"}}  className="bg-secondary" href="">React - Inicial</a></li>
                                        </ul>
                                </div>
                                <div className="experience-container__topics__card__data">
                                        <i className="fas fa-graduation-cap"></i>
                                        <span className="fecha">2016 - 2017</span>
                                        <h3>ini Capacitacion</h3>
                                        <p className="experience-container__topics__card__data__description">Realicé un curso de "Tecnico en reparacion de Hardware y Redes" en el instituti ini Capacitacion, en la ciudad de San Salvador de Jujuy.</p>
                                        <a style={{marginTop:"25px"}}  className="secondary" href="">Ver diploma</a>
                                </div>
                                <a style={{alignSelf: "center"}}  className="secondary" href="">Ver más</a>
                                </div>

                                <div className="experience-container__topics__card card-portfolio">
                                    <div className="experience-container__topics__card__data">
                                        <i className="fas fa-briefcase"></i>
                                        <span className="fecha">2021 - actualidad</span>
                                        <h3>JujuyUnida.com</h3>
                                        <p className="experience-container__topics__card__data__description">Encargado de desarrollo web de <a className="secondary" href="https://jujuyunida.com" target="blanck">JujuyUnida.com</a></p>
                                    </div>
                                    <div className="experience-container__topics__card__data">
                                        <i className="fas fa-briefcase"></i>
                                        <span className="fecha">2020 - 2020</span>
                                        <h3>Codo a Codo 3D</h3>
                                        <p className="experience-container__topics__card__data__description">Tesorero del grupo autoconvocado de Makers 3D para la produccion de protecciones contra el COVID-19 dedicado a la donacion a nivel nacional.</p>
                                        <a className="secondary" href="">Más información</a>
                                    </div>
                                </div>

                            </div>

                        </section>

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
                                        <button className="btn btn-rounded">Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                        <a href="https://www.freepik.es/vectores/fondo">Vector de Fondo creado por freepik - www.freepik.es</a>
                        <footer>
                            <div className="footer bg-secondary">
                            <span className='color-gray-300'>@FaqToff</span>
                            <div className="btn-social-desk">
                                <a class="btn-social bg-linkedin" href="https://www.linkedin.com/in/faqtoff" target="blank"></a>
                                <a class="btn-social bg-github" href="https://github.com/faqtoff" target="blank"></a>
                                <a class="btn-social bg-twitter" href="#" target="blank"></a>
                                <a class="btn-social bg-instagram" href="https://www.instagram.com/faqtoff/" target="blank"></a>
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
