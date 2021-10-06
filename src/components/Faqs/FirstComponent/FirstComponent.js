import React from 'react'
import './FirstComponent.scss'
export default function FirstComponent() {
    return (
        <div className="FaqsFirstCompContainer">
            <div className="leftContainer">
                <h3 className="firstTitle">SOPORTE AUTOSERVICIO DE DR.TESIS</h3>
                <h1 className="secondTitle"> Preguntas<br /> frecuentes de</h1>
                <h1 className="thirdTitle">Soporte de <br />Dr. Tesis</h1>
            </div>
            <div className="rightContainer">
                <div className="content">
                    Aquí encontrarás respuestas a preguntas frecuentes sobre
                    Dr Tesis. Revisa nuestra guía de solución de problemas, con
                    respuestas a preguntas esenciales, o visita nuestra
                    Comunidad para obtener orientación y recursos
                    específicos para tu perfil de usuario.
                </div>
                <button className="firstButton"><h2>GUIA DE SOLUCION DE PROBLEMAS</h2></button>
                <button className="secondButton"><h2>PREGUNTALE A NUESTRA COMUNIDAD</h2></button>
            </div>
        </div>
    )
}
