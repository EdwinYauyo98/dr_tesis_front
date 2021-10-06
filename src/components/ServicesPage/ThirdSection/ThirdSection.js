import react from 'react';
import Study from '../../../assets/imgs/ThirdSection/Study.png';
import Point from '../../../assets/imgs/ThirdSection/Point.png';
import './ThirdSection.scss';
export default function ThirdSection(props){
    return(
        <div className="servicesThirdSectionContainer"   id="services-2">
            <div className="Left">
                <div className="Container-Description">
                        <h1>{props.data.t1}</h1>
                        <h2>{props.data.t2}</h2>
                        <p>{props.data.description}</p>
                    <div className="Box-Details">
                        <div className="Details">
                            <img className="CheckImg" src={Point} alt="Point"></img>
                            <p className="p2">{props.data.point1}</p>
                        </div>
                        <div className="Details">
                            <img className="CheckImg" src={Point} alt="Point"></img>
                            <p className="p2">{props.data.point2}</p>
                        </div>
                        <div className="Details">
                            <img className="CheckImg" src={Point} alt="Point"></img>
                            <p className="p2">{props.data.point3}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Right">
                <img id="Image-Right" src={Study} alt="Study"></img>
            </div>
        </div>
    )
}