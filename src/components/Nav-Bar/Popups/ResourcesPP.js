import React from 'react'
import './ResourcesPP.scss'
export default function ResourcesPP(props) {
    return (
        <div>
            <div className="resources-pp" onPointerLeave={props.onPointerLeave}>
                <div className="generalContainer">
                    <div className="left-item">
                        <div className="item">
                            <div className="title-item">Tipos</div>
                            <div className="content-item">Turniting</div>
                            <div className="content-item">Artículos</div>
                            <div className="content-item">eBooks y Guías</div>
                            <div className="content-item">Asesoría online</div>
                        </div>
                    </div>
                    <div className="right-item">
                        <div className="item">
                            <div className="title-item">Centros</div>
                            <div className="subtitle-item">Sala de estudios</div>
                            <div className="content-item">Artículos, videos, historias y
                                noticias sobre Canvas,
                                tecnología educativa y educación</div>
                            {/* <div className="content-item">noticias sobre Canvas,</div>
                            <div className="content-item">tecnología educativa y educación</div> */}

                            <div className="subtitle-item">Nuestra Comunidad</div>
                            <div className="content-item">Comparta ideas, haga y responda</div>
                            <div className="content-item">preguntas, acceda a guías y</div>
                            <div className="content-item">conéctese con sus pares.</div>
                        </div>
                    </div>
                </div>
                {/* <div>Todos los recursos</div> */}

            </div>
        </div>
    )
}
