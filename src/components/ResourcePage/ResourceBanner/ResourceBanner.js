import "./ResourceBanner.scss";

import bannerBkg from "../../../assets/imgs/ResourcePage/banner-bkg.png";
import arrow from "../../../assets/imgs/arrow.svg";

export default function ResourceBanner(props){

    return(
        <div className="banner-container" id="article">
            <img className="banner-bkg" src={bannerBkg} alt=""/>
            <div className="info-frame">
                <div className="title-b">
                    {props.data.title}
                </div>
                <div className="info-txt">
                    {props.data.txt}
                </div>
                <div className="info">
                    {props.data.info}
                    <img className="arrow" src={arrow} alt=""/>
                </div>
            </div>
        </div>
    );
}