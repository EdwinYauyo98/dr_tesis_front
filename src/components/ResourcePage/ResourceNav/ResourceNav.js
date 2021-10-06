import './ResourceNav.scss';

import returnArrow from '../../../assets/imgs/returnArrow.svg'
import lens from '../../../assets/imgs/search.svg'

import { useHistory } from 'react-router';
import { Link } from 'react-scroll';

export default function ResourceNav(props) {

    const history = useHistory();
    return (
        <div className="resource-nav-container">
            <div className="res-nav-header">
                <div className="return" onClick={() => {
                    history.push("/");
                    window.scrollTo(0, 0);
                }}>
                    <img className="returnArrow" src={returnArrow} alt="" />
                    <div className="return-txt">
                        {props.data.return}
                    </div>
                </div>
                <button className="b-button" onClick={() => {
                    history.push("/form");
                    window.scrollTo(0, 0);
                }}
                >{props.data.soliCoti}</button>
            </div>
            <div className="tittle-b">
                {props.data.title}
            </div>
            <div className="features-menu">
                <div className="feature">{props.data.features.home}</div>
                <div className="feature">{props.data.features.turniting}</div>
                <div className="feature"><Link  to="article" spy={true} smooth={true}>{props.data.features.articles}</Link></div>
                <div className="feature"><Link  to="guides" spy={true} smooth={true}>{props.data.features.eg}</Link></div>
                <div className="feature"><Link  to="assesory" spy={true} smooth={true}>{props.data.features.advisory}</Link></div>
                <div className="feature"><Link  to="news" spy={true} smooth={true}>{props.data.features.news}</Link></div>
                <div className="feature">{props.data.features.search}</div>
                <img className="lens" src={lens} alt="" />
            </div>
        </div>
    );
}