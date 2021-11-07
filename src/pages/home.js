import React from 'react'
import BannerFullScreen from '../FaqStyle/Banner/BannerFullScreen'

import Avatar from '../assets/avatar.jpeg'

import WorksHolder from '../components/Works/WorksHolder'
import Contact from '../components/Contact/Contact'
import Experience from '../components/Experience/Experience'
import Services from '../components/Services/Services'
import AboutMe from '../components/AboutMe/AboutMe'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'


const home = () => {
    return (
        <div className='full-container'>
            <Navbar />
            <div className="main-container">
                <BannerFullScreen className='banner-img color-white' id="home" btnClassName='color-black'> 
                    <img src={Avatar} alt="avatar" />
                    <h1 className='fs-banner-info__title color-black'>Facundo Toffolo Pasquini <span className=' color-black'>Frontend Developer</span></h1>
                    <div className="btn-social-desk">
                        <a className="btn-social color-black" href="https://www.linkedin.com/in/faqtoff" target="blank"><i className="fab fa-linkedin"></i></a>
                        <a className="btn-social color-black" href="https://github.com/faqtoff" target="blank"><i className="fab fa-github"></i></a>
                        <a className="btn-social color-black" href="https://www.facebook.com/facutoff" target="blank"><i className="fab fa-facebook-square"></i></a>
                        <a className="btn-social color-black" href="https://www.instagram.com/faqtoff/" target="blank"><i className="fab fa-instagram"></i></a>
                    </div>
                    <a className="btn btn-rounded bg-primary" href="#contact">Contactame</a>
                </BannerFullScreen>
                <div id='main'>
                    <AboutMe />
                    <Services />
                    <Experience />
                    <WorksHolder />
                    <Contact btnClassName='bg-primary'/>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default home
