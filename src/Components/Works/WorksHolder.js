import React from 'react'

import JujuyUnida from '../../assets/work/JujuyUnida.png'
import Tdo from '../../assets/work/2Do.png'
import BienesRaices from '../../assets/work/BienesRaices.png'
import './Works.css'

const WorksHolder = () => {
    return (                        
        <section className="works-container container-faqstyle" id="works">
            <h3 className="title-content">Mis trabajos</h3>
            <div className="works-container__topics">

                
                <div className="works-container__topics__card card card-shadow p-3">
                    <img src={Tdo} alt="2doList" />
                    <div className="works-container__topics__card__mask">
                        <h3 className='text-center mt-0'>2DoList</h3>
                        <span>Lista de tareas gratuita, realizada con React</span>
                        <a href="https://www.2dolist.com.ar">Visitar</a>
                    </div>
                </div>
                <div className="works-container__topics__card card card-shadow p-3">
                    <img src={JujuyUnida} alt="JujuyUnida" />
                    <div className="works-container__topics__card__mask">
                        <h3 className='text-center mt-0'>Jujuy Unida</h3>
                        <span>Proyecto realizado con React y Firebase</span>
                        <a href="https://www.jujuyunida.com">Visitar</a>
                    </div>
                </div>
                <div className="works-container__topics__card card card-shadow p-3">
                    <h3 className='text-center mt-0'>Portfolios</h3>
                    <i className="fas fa-briefcase fa-5x align-self-center"></i>
                    <div className="works-container__topics__card__mask">
                        <span>Portfolios y CV's online</span>
                    </div>
                </div>
                <div className="works-container__topics__card card card-shadow p-3">
                    <img src={BienesRaices} alt="JujuyUnida" />
                    <div className="works-container__topics__card__mask">
                        <h3>BienesRaices</h3>
                        <span>Pagina web de BienesRaices hecha solo con HTML y CSS</span>
                        <a href="https://www.bienesraices.faqtoff.com">Visitar</a>
                    </div>
                </div>
                <div className="works-container__topics__card card card-shadow d-none">
                    <div className="works-container__topics__card__mask">
                        <span>Photo magic</span>
                    </div>
                </div>
                <div className="works-container__topics__card card card-shadow d-none">
                <div className="works-container__topics__card__mask">
                    <span>Photo magic</span>
                </div>
                </div>
            </div>
            <a className="btn btn-rounded bg-primary d-none" href="#">Ver todos</a>
        </section>
    )
}

export default WorksHolder
