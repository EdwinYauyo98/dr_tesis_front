import './Navigation.scss'
import search from '../../assets/imgs/search.svg'
import logArrow from '../../assets/imgs/logArrow.svg'
import logo from '../../assets/imgs/logo.svg'
import botArrow from '../../assets/imgs/NavBar/arrowBot.svg'
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import ServicesPP from './Popups/ServicesPP'
import ResourcesPP from './Popups/ResourcesPP'
import NewsPP from './Popups/NewsPP'
import AboutUsPP from './Popups/AboutUsPP'
export default function Navigation(props) {

    const [openBoxId, setStateBox] = useState(0);
    const history = useHistory();
    const ids = [0, 1, 2, 3, 4];

    return (
        <div className="nav-container">
            <div className="features">
                <div className="left" onClick={props.openLangModal}>
                    <div className="languages">Latin America</div>
                    <img className="botArrow" src={botArrow} alt="botArrow"></img>
                </div>

                <div className="right">
                    <img className="search" src={search} alt="serch" />
                    <div className="support" onClick={() => {
                        history.push("/faqs");
                        window.scrollTo(0, 0);
                    }}>
                        {props.data.features.support}
                    </div>
                    <div className="contact" onClick={props.openCotModal}>
                        {props.data.features.contact}
                    </div>
                    <button className="login-btn">
                        {props.data.features.login}
                        <img className="log-arrow" src={logArrow} alt="logArrow" />
                    </button>
                </div>


            </div>
            <div className="nav">
                <img className="nav-logo" src={logo} alt="logo" onClick={() => {
                    history.push("/");
                    window.scrollTo(0, 0);
                }} />

                <div>
                    <button className="nav-g-btn" onClick={() => {
                        history.push("/services");
                        window.scrollTo(0, 0);
                    }}
                        onPointerEnter={() => {
                            setStateBox(ids[1]);
                        }}
                        onPointerLeave={() => {
                            setStateBox(ids[0]);
                        }}>
                        {props.data.navigation.service}
                        {openBoxId === 1 && <ServicesPP />}
                    </button>
                </div>




                <button className="nav-g-btn" onClick={() => {
                    history.push("/resources");
                    window.scrollTo(0, 0);
                }}
                    onPointerEnter={() => {
                        setStateBox(ids[2])
                    }}
                    onPointerLeave={() => {
                        setStateBox(ids[0]);
                    }}>
                    {props.data.navigation.resources}
                    {openBoxId === 2 && <ResourcesPP />}
                </button>

                <button className="nav-g-btn" onClick={() => {
                    history.push("/news");
                    window.scrollTo(0, 0);
                }}
                    onPointerEnter={() => {
                        setStateBox(ids[3])
                    }}
                    onPointerLeave={() => {
                        setStateBox(ids[0]);
                    }}>
                    {props.data.navigation.news}
                    {openBoxId === 3 && <NewsPP />}
                </button>

                <button className="nav-g-btn" onClick={() => {
                    history.push("/aboutus");
                    window.scrollTo(0, 0);
                }}
                    onPointerEnter={() => {
                        setStateBox(ids[4])
                    }}
                    onPointerLeave={() => {
                        setStateBox(ids[0]);
                    }}>
                    {props.data.navigation.aboutus}
                    {openBoxId === 4 && <AboutUsPP />}
                </button>

                <button className="nav-btn" onClick={() => {
                    history.push("/form");
                    window.scrollTo(0, 0);
                }}>
                    {props.data.navigation.apply}
                </button>
            </div>
        </div>
    );
}

