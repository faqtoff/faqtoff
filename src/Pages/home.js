import React from 'react'
import BannerFullScreen from '../FaqStyle/Banner/BannerFullScreen'
import NavbarAside from '../FaqStyle/Navbar/NavbarAside'

import Avatar from '../assets/avatar.png'
import FaqFooter from '../FaqStyle/FaqFooter/FaqFooter'

const home = () => {
    return (
        <div className='full-container'>
            <NavbarAside className='bg-secondary'>
                <span>Victoria Carrillo</span>
                <ul>
                    <li><a href="#home"><i class="fas fa-home"></i> Home</a></li>
                    <li><a href="#skils"><i class="fas fa-user"></i> Sobre Mi</a></li>
                    <li><a href="#experience"><i class="fas fa-briefcase"></i> Experiencia</a></li>
                    <li><a href="#contact"><i class="fas fa-comments"></i> Contacto</a></li>
                </ul>
            </NavbarAside>
            <div className="main-container">
                <BannerFullScreen className='banner-img bg-green' id="home"> 
                    <img src={Avatar} alt="avatar" />
                    <h1 className='fs-banner-info__title'>Victoria Carrillo Real <span>Lic. en Periodismo</span></h1>
                <div className="btn-social-desk">
                    <a className="btn-social bg-linkedin" href="https://www.linkedin.com/in/faqtoff" target="_blank"></a>
                    <a className="btn-social bg-github" href="https://github.com/faqtoff" target="_blank"></a>
                    <a className="btn-social bg-twitter" href="#" target="_blank"></a>
                    <a className="btn-social bg-instagram" href="https://www.instagram.com/faqtoff/" target="_blank"></a>
                </div>
                <a className="btn btn-rounded btn-faqBtn" href="#contact">Contactame</a>
                </BannerFullScreen>
                <div id='main'>
                    <div className="container-fluid">
                        <section className="about-me container-faqstyle" id="skils">

                            <h2 className="title-content">Sobre Mi</h2>
                            <div className="about-me-container">
                                <img className="avatar" src={Avatar} alt="Avatar"/>
                                <div className="card-portfolio">
                                    <div className="col-fqstyle">
                                        <p>Tengo 26 años y soy Licenciada en periodismo.</p>
                                        <p>Mi objetivo profesional se centra en poder implementar los conocimientos adquiridos tanto en la facultad, como en mi experiencia laboral.</p>
                                        <p>Asi como como poder incorporar nuevas herramientas en el ámbito laboral y el de la comunicación</p>
                                        <button className="btn btn-rounded btn-faqBtn">Ver Curriculum</button>
                                    </div>
                                    <div className="col-fqstyle">

                                        <p>Manejo de Microsoft Office</p>
                                        <div className="progess">
                                        <div 
                                                className="progress-bar bg-primary"
                                                >
                                            </div>
                                        </div>

                                        <p>Google Adwords</p>
                                        <div className="progess">
                                            <div 
                                                className="progress-bar bg-terciary"
                                                >
                                            </div>
                                        </div>

                                        <p>Google Analytics</p>
                                        <div className="progess">
                                            <div 
                                                className="progress-bar bg-secondary"
                                                >
                                            </div>
                                        </div>

                                        <p>SEO - SEM</p>
                                        <div className="progess">
                                            <div 
                                                className="progress-bar bg-secondary"
                                                >
                                            </div>
                                        </div>

                                        <p>Wordpress / Wix</p>
                                        <div className="progess">
                                            <div 
                                                className="progress-bar bg-secondary"
                                                >
                                            </div>
                                        </div>

                                        <p>Redes Sociales (Facebook y FB Bussines, Instagram, TikTok y Twitter)</p>
                                        <div className="progess">
                                            <div 
                                                className="progress-bar bg-secondary"
                                                >
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
                                        <h3>Universidad de Ciencias Empresariales y Sociales</h3>
                                        <p className="experience-container__topics__card__data__description">Licenciatura en Periodismo.</p>
                                </div>
                                <div className="experience-container__topics__card__data">
                                        <i className="fas fa-graduation-cap"></i>
                                        <span className="fecha">Agosto 2018 - Diciembre 2018</span>
                                        <h3>Escuela Da Vinci</h3>
                                        <p className="experience-container__topics__card__data__description">Marketing Digital</p>
                                </div>
                                <div className="experience-container__topics__card__data">
                                        <i className="fas fa-graduation-cap"></i>
                                        <h3>Estudios en Ingles</h3>
                                        <ul>
                                            <li className="secondary">Trinity Certificate Exams - Grade 3, Grade 7 {'&'} ISE 0</li>
                                            <li className="secondary">Cambridge First Certificate in English</li>
                                        </ul>
                                </div>
                                </div>

                                <div className="experience-container__topics__card card-portfolio">
                                    <div className="experience-container__topics__card__data">
                                        <i className="fas fa-briefcase"></i>
                                        <span className="fecha">Marzo 2020 - Actualidad</span>
                                        <h3>Daireaux Nutrición</h3>
                                        <p className="experience-container__topics__card__data__description">Gerente de Oficina</p>
                                        <ul>
                                            <li className="secondary">Administración financiera y de personal de oficina</li>
                                            <li className="secondary">Organización y planificación de agenda</li>
                                            <li className="secondary">Optimización de página web {'('}plataforma Wix{')'}</li>
                                        </ul>
                                    </div>
                                    <div className="experience-container__topics__card__data">
                                        <i className="fas fa-briefcase"></i>
                                        <span className="fecha">Junio 2019 - Agosto 2019</span>
                                        <h3>Touched BPO</h3>
                                        <p className="experience-container__topics__card__data__description">Asesora de Ventas</p>
                                        <ul>
                                            <li className="secondary">Asesoria de ventas de IMP y Rio Uruguay Seguros</li>
                                            <li className="secondary">Manejo de sistemas de ventas y comunicación con los clientes de forma telefónica</li>
                                        </ul>
                                    </div>
                                    <div className="experience-container__topics__card__data">
                                        <i className="fas fa-briefcase"></i>
                                        <span className="fecha">Diciembre 2016 - Actualidad</span>
                                        <h3>Corpachac Viajes y Turismo</h3>
                                        <p className="experience-container__topics__card__data__description">Comunity Manager</p>
                                        <ul>
                                            <li className="secondary">Generar contenido en Redes Sociales</li>
                                            <li className="secondary">Planificación semanal de contenido para newsletter</li>
                                        </ul>
                                    </div>
                                    <div className="experience-container__topics__card__data">
                                        <i className="fas fa-briefcase"></i>
                                        <span className="fecha">Marzo 2016 - Noviembre 2016</span>
                                        <h3>Personally PR</h3>
                                        <p className="experience-container__topics__card__data__description">Recepcionista</p>
                                        <ul>
                                            <li className="secondary">Atención al público y proveedores</li>
                                            <li className="secondary">Atender y delegar llamados {'('}Manejo de Conmutador{')'}</li>
                                            <li className="secondary">Pago y archivado de facturas</li>
                                        </ul>
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
                                        <button className="btn btn-rounded btn-faqBtn">Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </section>
  
                        <footer>
                            <div className="footer bg-secondary">
                            <span>Victoria Carrillo Real</span>
                            <div className="btn-social-desk">
                                <a className="btn-social bg-linkedin" href="https://www.linkedin.com/in/faqtoff" target="blank"></a>
                                <a className="btn-social bg-github" href="https://github.com/faqtoff" target="blank"></a>
                                <a className="btn-social bg-twitter" href="#" target="blank"></a>
                                <a className="btn-social bg-instagram" href="https://www.instagram.com/faqtoff/" target="blank"></a>
                            </div>
                            </div>
                            <FaqFooter />
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home
