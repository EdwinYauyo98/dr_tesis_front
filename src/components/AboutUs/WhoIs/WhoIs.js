import React from 'react'
import './WhoIs.scss';
import People from '../../../assets/imgs/AboutUs/people.png'
import { useHistory } from "react-router-dom";
export default function WhoIs() {
    const history = useHistory();
    return (

        <div className="whoIsContainer">
            <div className="leftContainer">
                <div className="firstTitle">
                    ACERCA DE NOSOTROS
                </div>
                <div className="secondTitle">
                    ¿Quién es<br /> Dr. Tesis?
                </div>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam no
                    nummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                    at vero eros et accum
                </div>
                <button className="buttonBlack" onClick={() => {
                    history.push("/form");
                    window.scrollTo(0, 0);
                }}><h1>Solicita tu cotización</h1></button>
            </div>
            <div className="rightContainer">
                <img className="imgRight" src={People} alt="" />
            </div>
        </div>


    )
}
