import React from 'react'
import './ServicesPP.scss'
export default function ServicesPP(props) {
    return (
        <div>
            <div className="services-pp" onPointerLeave={props.onPointerLeave}>
                <div className="title">Tesis/ Plan de tesis/ Modelo de negocio</div>
                <div className="parent-item">
                    <div className="item">
                        <div className="title-item">Matriz consistencia</div>
                        <div className="content-item">Título de investigación</div>
                        <div className="content-item">Planteamiento de problema</div>
                        <div className="content-item">Definición de objetivos</div>
                        <div className="content-item">Diseño metodológico</div>
                    </div>
                    <div className="item">
                        <div className="title-item">Revisión integral</div>
                        <div className="content-item">Normativa y estilo</div>
                        <div className="content-item">Estructura y formato</div>
                        <div className="content-item">Grado de similitud</div>
                        <div className="content-item">Parafraseo y levantamiento</div>
                        <div className="content-item">de observaciones</div>
                    </div>
                </div>
                <div className="parent-item">
                    <div className="item">
                        <div className="title-item">Marco teórico</div>
                        <div className="content-item">Antecedentes</div>
                        <div className="content-item">Estado del arte</div>
                        <div className="content-item">Definición de conceptos</div>
                    </div>
                    <div className="item">
                        <div className="title-item">Brochure</div>
                    </div>
                </div>
                <div className="parent-item">
                    <div className="item">
                        <div className="title-item">Desarrollo estadístico</div>
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
