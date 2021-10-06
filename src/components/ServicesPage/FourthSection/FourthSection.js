import './FourthSection.scss'
import figure from '../../../assets/imgs/Services/background-img-fourth-section.svg';

export default function FourthSection(props) {

    return (
        <div className="fs-container" id="services-3">
            <img className="fs-bkg-img" src={figure} alt="" />
            <div className="fs-frames-container">
                <div className="first-frame">
                    <div className="text">
                        {props.data.box1.txt1}
                    </div>
                    <div className="title">
                        {props.data.box1.title1}
                    </div>
                    <div className="text">
                        {props.data.box1.txt2}
                    </div>
                </div>
                <div className="second-frame">
                    <div className="frame-box-2">
                        <div className="box-content-2">
                            <div className="title">
                                {props.data.box2.title}
                            </div>
                            <div className="text">
                                {props.data.box2.txt}
                            </div>
                            <div className="info">
                                {props.data.box2.info}
                            </div>
                        </div>
                    </div>
                    <div className="frame-box-2">
                        <div className="box-content-2">
                            <div className="title">
                                {props.data.box3.title}
                            </div>
                            <div className="text">
                                {props.data.box3.txt}
                            </div>
                            <div className="info">
                                {props.data.box3.info}
                            </div>
                        </div>
                    </div>


                </div>
                <div className="third-frame">
                    <div className="frame-box-1">
                        <div className="box-content-1">
                            <div className="title">
                                {props.data.box4.title}
                            </div>
                            <div className="text">
                                {props.data.box4.txt}
                            </div>
                            <div className="info">
                                {props.data.box3.info}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}