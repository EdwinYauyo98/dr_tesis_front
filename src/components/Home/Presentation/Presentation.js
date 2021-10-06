import './Presentation.scss';
import woman from '../../../assets/imgs/woman.png';
import student from '../../../assets/imgs/student.png';
import arrow from '../../../assets/imgs/arrow.svg';
import uparrow from '../../../assets/imgs/uparrow.svg';
import wssplogo from '../../../assets/imgs/wssplogo.svg';
import { useHistory } from "react-router-dom";

export default function Content(props) {
    const history = useHistory();
    return (
        <div className="content-block">
            <div className="block-info">
                <div className="info">
                    {props.data.ptn}
                </div>
                <button className="b-button" onClick={() => {
                    history.push("/form");
                    window.scrollTo(0, 0);
                }}>
                    {props.data.apply}
                </button>
                <div className="mult-info">
                    <div className="student-container">
                        <img className="student" src={student} alt="student" />
                    </div>
                    <div className="redir-container">
                        <div className="msg">
                            {props.data.phrase}
                        </div>
                        <div className="video-redir">
                            {props.data.seeVid}
                            <img className="arrow" src={arrow} alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="block-image">
                <img className="woman" src={woman} alt="woman" />
            </div>
        </div>
    );
}