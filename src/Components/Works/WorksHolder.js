import React from 'react'

import JujuyUnida from '../../assets/work/JujuyUnida.svg'
import './Works.css'

const WorksHolder = () => {
    return (                        
        <section class="works-container container-faqstyle" id="works">
            <h3 class="title-content">Mis trabajos</h3>
            <div class="works-container__topics">

                
                <div class="works-container__topics__card card card-shadow p-3">
                    <h3 className='text-center mt-0'>2DoList</h3>
                    <i class="far fa-calendar-check fa-5x align-self-center"></i>
                <div class="works-container__topics__card__mask">
                    <span>Lista de tareas gratuita, realizada con React</span>
                    <a href="https://www.2dolist.com.ar">Visitar</a>
                </div>

                </div>
                <div class="works-container__topics__card card card-shadow">
                    <h3 className='d-none'>Jujuy Unida</h3>
                    <img src={JujuyUnida} alt="JujuyUnida" />
                <div class="works-container__topics__card__mask">
                    <span>Proyecto realizado con React y Firebase</span>
                    <a href="https://www.jujuyunida.com">Visitar</a>
                </div>
                </div>
                <div class="works-container__topics__card card card-shadow">
                    <h3 className='text-center mt-0'>Portfolios</h3>
                    <i class="fas fa-briefcase fa-5x align-self-center"></i>
                <div class="works-container__topics__card__mask">
                    <span>Portfolios y CV's online</span>
                </div>
                </div>
                <div class="works-container__topics__card card card-shadow d-none">
                <div class="works-container__topics__card__mask">
                    <span>Photo magic</span>
                </div>
                </div>
                <div class="works-container__topics__card card card-shadow d-none">
                <div class="works-container__topics__card__mask">
                    <span>Photo magic</span>
                </div>
                </div>
                <div class="works-container__topics__card card card-shadow d-none">
                <div class="works-container__topics__card__mask">
                    <span>Photo magic</span>
                </div>
                </div>
            </div>
            <a class="btn btn-rounded bg-primary d-none" href="#">Ver todos</a>
        </section>
    )
}

export default WorksHolder
