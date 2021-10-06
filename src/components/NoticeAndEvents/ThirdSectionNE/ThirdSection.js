import react from "react";
import GirlBooks from '../../../assets/imgs/NoticeAndEvents/ThirdSectionNE/GirlBooks.png'
import '../ThirdSectionNE/ThirdSection.scss'
export default function ThirdSection(props){
    return(
       <div className="Container-NoticeAndEvents-ThirdSection" id='news-3'>
           <div className="Box-Image">
                <img id="img" src={GirlBooks}></img>
           </div>
           <div className="Box-Text">
                <p>{props.data.text1}</p>
                <h1>{props.data.h1}</h1>
                <p>{props.data.text2}</p>
                <h2>{props.data.h2}</h2>
                <h2>{props.data.h2}</h2>
                <h2>{props.data.h2}</h2>
                <h3>{props.data.h3}</h3>
                <p>{props.data.text3}</p>
                <a href="#">{props.data.btn}</a>
           </div>
       </div>
    )
}