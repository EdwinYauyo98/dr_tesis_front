import React from 'react'
import './ServicesPP.scss'
import { Link } from 'react-scroll';
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { useHistory } from 'react-router';
export default function ServicesPP(props) {

    const history = useHistory();
    return (
        <div>
            <div className="services-pp" onPointerLeave={props.onPointerLeave}>
                <div className="title">Tesis/ Plan de tesis/ Modelo de negocio</div>
                <div className="parent-item">
                    <div className="item">
                        <div className="title-item" onClick={() => {
                            // history.push("/services");
                            scroller.scrollTo('services-1', {
                                duration: 800,
                                offset: -200,
                                delay: 0,
                                smooth: 'true'
                            });
                        }}>Matriz consistencia</div>

                        <div className="content-item">Título de investigación</div>
                        <div className="content-item">Planteamiento de problema</div>
                        <div className="content-item">Definición de objetivos</div>
                        <div className="content-item">Diseño metodológico</div>
                    </div>
                    <div className="item">
                        {/* <div className="title-item"><Link to="services-2" spy={true} smooth={true} offset={-200}>Revisión integral</Link></div> */}
                        <div className="title-item" onClick={() => {
                            // history.push("/services");
                            scroller.scrollTo('services-2', {
                                duration: 800,
                                offset: -200,
                                delay: 0,
                                smooth: 'true'
                            });
                        }}>Revisión integral</div>
                        <div className="content-item">Normativa y estilo</div>
                        <div className="content-item">Estructura y formato</div>
                        <div className="content-item">Grado de similitud</div>
                        <div className="content-item">Parafraseo y levantamiento</div>
                        <div className="content-item">de observaciones</div>
                    </div>
                </div>
                <div className="parent-item">
                    <div className="item">
                        {/* <div className="title-item"><Link to="services-3" spy={true} smooth={true} offset={-200}>Marco teórico</Link></div> */}
                        <div className="title-item" onClick={() => {
                            // history.push("/services");
                            scroller.scrollTo('services-3', {
                                duration: 800,
                                offset: -200,
                                delay: 0,
                                smooth: 'true'
                            });
                        }}>Marco teórico</div>
                        <div className="content-item">Antecedentes</div>
                        <div className="content-item">Estado del arte</div>
                        <div className="content-item">Definición de conceptos</div>
                    </div>
                    <div className="item">
                        {/* <div className="title-item"><Link to="services-4" spy={true} smooth={true} >Brochure</Link></div> */}
                        <div className="title-item" onClick={() => {
                            // history.push("/services");
                            scroller.scrollTo('services-4', {
                                duration: 800,
                                offset: -200,
                                delay: 0,
                                smooth: 'true'
                            });
                        }}>Brochure</div>
                    </div>
                </div>
                <div className="parent-item">
                    <div className="item">
                        {/* <div className="title-item"><Link to="services-5" spy={true} smooth={true} offset={-200}>Desarrollo estadístico</Link></div> */}
                        <div className="title-item" onClick={() => {
                            // history.push("/services");
                            scroller.scrollTo('services-5', {
                                duration: 800,
                                offset: -200,
                                delay: 0,
                                smooth: 'true'
                            });
                        }}>Desarrollo estadístico</div>
                        <div className="content-item">R.R.R</div>
                        <div className="content-item">SPSS</div>
                        <div className="content-item">STATA</div>
                        <div className="content-item">EVIEWS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
