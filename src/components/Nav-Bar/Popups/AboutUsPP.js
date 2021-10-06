import React from 'react'
import './AboutUsPP.scss'
import { useHistory } from 'react-router';
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
export default function AboutUsPP() {
    const history = useHistory();
    return (
        <div>
            <div className="about-us-pp">
                <div className="title-item" onClick={() => {
                    // history.push("/aboutus");
                    scroller.scrollTo('about-1', {
                        offset: -500,
                        delay: 0,
                        smooth: 'true'
                    });
                }}>La empresa</div>
                <div className="content-item">Nuestra historia</div>
                <div className="content-item">Carrera</div>
                <div className="title-item" onClick={() => {
                    // history.push("/aboutus");
                    scroller.scrollTo('about-2', {
                        offset: -200,
                        delay: 0,
                        smooth: 'true'
                    });
                }}>Privacidad</div>
                <div className="content-item">Confiabilidad de tu investigación</div>
                <div className="content-item">Seguridad de documentos compartidos</div>
                <div className="title-item" onClick={() => {
                    // history.push("/aboutus");
                    scroller.scrollTo('about-3', {
                        offset: 100,
                        delay: 0,
                        smooth: 'true'
                    });
                }}>Partners</div>
                <div className="content-item">AYNI EDUCATIVO</div>
                <div className="content-item">STARTUP UNI</div>
                <div className="content-item">TECH INNOVATION</div>
                <div className="contact-btn" onClick={() => {
                    history.push("/form");
                    window.scrollTo(0,0);
                }}>Contáctanos</div>
            </div>

        </div>
    )
}
