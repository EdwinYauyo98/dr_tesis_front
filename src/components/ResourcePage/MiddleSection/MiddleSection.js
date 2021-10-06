import "./MiddleSection.scss";

import frameimg1 from "../../../assets/imgs/ResourcePage/middleSection/img1.png"
import frameimg2 from "../../../assets/imgs/ResourcePage/middleSection/img2.png"
import frameimg3 from "../../../assets/imgs/ResourcePage/middleSection/img3.png"
import frameimg4 from "../../../assets/imgs/ResourcePage/middleSection/img4.png"
import frameimg5 from "../../../assets/imgs/ResourcePage/middleSection/img5.png"
import frameimg6 from "../../../assets/imgs/ResourcePage/middleSection/img6.png"
import frameimg7 from "../../../assets/imgs/ResourcePage/middleSection/img7.png"


export default function MiddleSection(props){
    return(
        <div className="middle-container">
            <div className="middle-title" id="guides">
                {props.data.middletitle}
            </div>
            <div className="big-info-frames">
                <div className="big-frame">
                    <img className="frame-img-b" src={frameimg1} alt=""/>
                    <div className="frame-title-big">
                        {props.data.title1}
                    </div>
                </div>
                <div className="big-frame">
                    <img className="frame-img-b" src={frameimg2} alt=""/>
                    <div className="frame-title-big">
                        {props.data.title2}
                    </div>
                </div>
            </div>
            <div className="small-info-frames"  id="assesory">
                <div className="small-frame">
                    <img className="frame-img-s" src={frameimg3} alt=""/>
                    <div className="frame-title-small">
                        {props.data.title3}
                    </div>
                </div>
                <div className="small-frame">
                    <img className="frame-img-s" src={frameimg4} alt=""/>
                    <div className="frame-title-small">
                        {props.data.title4}
                    </div>
                </div>
                <div className="small-frame">
                    <img className="frame-img-s" src={frameimg5} alt=""/>
                    <div className="frame-title-small">
                        {props.data.title5}
                    </div>
                </div>
            </div>
            <div className="middle-title" id="news">
                {props.data.bottomtitle}
            </div>
            <div className="big-info-frames">
                <div className="big-frame">
                    <img className="frame-img-b" src={frameimg6} alt=""/>
                    <div className="frame-title-big">
                        {props.data.title1}
                    </div>
                </div>
                <div className="big-frame">
                    <img className="frame-img-b" src={frameimg7} alt=""/>
                    <div className="frame-title-big">
                        {props.data.title2}
                    </div>
                </div>
            </div>
        </div>
    );
}