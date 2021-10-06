import React from 'react';
import './NewsPP.scss';
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { useHistory } from 'react-router';
export default function NewsPP() {
    const history = useHistory();
    return (
        <div>
            <div className="news-pp">
                <div className="title-item">Tipos</div>
                <div className="content-item" onClick={() => {
                    // history.push("/news");
                    scroller.scrollTo('news-1', {
                        offset: -500,
                        delay: 0,
                        smooth: 'true'
                    });
                }}>Eventos</div>
                <div className="content-item" onClick={() => {
                    // history.push("/news");
                    scroller.scrollTo('news-2', {
                        offset: -50,
                        delay: 0,
                        smooth: 'true'
                    });
                }}>Webinars</div>
                <div className="content-item" onClick={() => {
                    // history.push("/news");
                    scroller.scrollTo('news-3', {
                        offset: -100,
                        delay: 0,
                        smooth: 'true'
                    });
                }}>Historias de éxito</div>
                <div className="content-item" onClick={() => {
                    // history.push("/news");
                    scroller.scrollTo('news-4', {
                        offset: -200,
                        delay: 0,
                        smooth: 'true'
                    });
                }}>Comunicados de Prensa</div>
            </div>

        </div>
    )
}
