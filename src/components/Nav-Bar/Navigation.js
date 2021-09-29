import './Navigation.scss'
import search from '../../assets/imgs/search.svg'
import logArrow from '../../assets/imgs/logArrow.svg'
import logo from '../../assets/imgs/logo.svg'
import botArrow from '../../assets/imgs/NavBar/arrowBot.svg'

import { useHistory } from "react-router-dom";


export default function Navigation(props) {


    const history = useHistory();
    return (
        <div className="nav-container">
            <div className="features">
                <div className="left" onClick={props.openLangModal}>
                    <div className="languages">Latin America</div>
                    <img className="botArrow" src={botArrow} alt="botArrow"></img>
                </div>

                <div className="right">
                    <img className="search" src={search} alt="serch" />
                    <div className="support">
                        {props.data.features.support}
                    </div>
                    <div className="contact">
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
                <button className="nav-g-btn" onClick={() => {
                    history.push("/services");
                    window.scrollTo(0, 0);
                }}>
                    {props.data.navigation.service}
                </button>
                <button className="nav-g-btn" onClick={() => {
                    history.push("/resources");
                    window.scrollTo(0, 0);
                }}>
                    {props.data.navigation.resources}
                </button>
                <button className="nav-g-btn" onClick={() => {
                    history.push("/news");
                    window.scrollTo(0, 0);
                }}>
                    {props.data.navigation.news}
                </button>
                <button className="nav-g-btn">
                    {props.data.navigation.aboutus}
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

