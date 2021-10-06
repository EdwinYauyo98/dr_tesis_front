import React from 'react'
import "./SixthSection.scss"

export default function SixthSection(props) {

    const listCards = props.data.listData.map((item) =>
        <div className="card">
            <h1 className="title">{item.title}</h1>
            <p className="content">{item.body} </p>
        </div>)

    return (
        <div className="mainContainer"  id="services-5">
            <h1 className="firstTitle">{props.data.t1}</h1>
            <h1 className="secondTitle">
                {props.data.t2[1]}<br />{props.data.t2[2]}<br />{props.data.t2[3]}
            </h1>
            <div className="cardsContainer">
                {listCards}
            </div>
            <button className="infoButton"><h3 className="text">Más información <i className="arrow right"></i></h3></button>
            <div className="feedBackContainer">
                <div className="leftContainer">
                    <h1 className="title1">{props.data.feedBackTitle1}</h1>
                    <h1 className="title2">{props.data.feedBackTitle2[1]}<br />{props.data.feedBackTitle2[2]}</h1>
                    <p className="text">{props.data.text} </p>
                    <button className="button"><h3>Solicita tu cotización</h3></button>
                </div>
            </div>











        </div>
    )
}

// <div className="card">
// <h1 className="title">Lore</h1>
// <p className="content">Lorem ipsum dolor sit amet, consectetuer
//     adipiscing elit, sed diam nonummy nibh
//     euismod tincidunt ut laoreet dolore magna
//     aliquam erat volutpat. Ut wisi enim ad minim </p>
// </div>