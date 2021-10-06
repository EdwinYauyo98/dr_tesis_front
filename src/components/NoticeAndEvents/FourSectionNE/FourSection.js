import react from "react";
import Study1 from '../../../assets/imgs/NoticeAndEvents/FourSectionNE/Study1.png'
import Study2 from '../../../assets/imgs/NoticeAndEvents/FourSectionNE/Study2.png'
import Study3 from '../../../assets/imgs/NoticeAndEvents/FourSectionNE/Study3.png'
import '../FourSectionNE/FourSection.scss'

export default function FourSection(props){
    return(

        <div className="Container-NoticeAndEvents-FourSection" id='news-4'>
            <h1>{props.data.tittle}</h1>
            <div className="Parent-Box">
                <div className="Box">
                    <img src={Study1}></img>
                    <h2>{props.data.box1}</h2>
                    <a>{props.data.info}</a>
                </div>
                <div className="Box">
                    <img src={Study2}></img>
                    <h2>{props.data.box2}</h2>
                    <a>{props.data.info}</a>
                </div>
                <div className="Box">
                    <img src={Study3}></img>
                    <h2>{props.data.box3}</h2>
                    <a>{props.data.info}</a>
                </div>
            </div>
        </div>
    )
}