import React from 'react'
import Abouts from "../../components/AboutUs/Valores/AboutUs"
import AboutUsData from "../../components/AboutUs/Valores/AboutUsData.json"
import WhoIs from '../../components/AboutUs/WhoIs/WhoIs'
export default function AboutUs() {
    return (
        <div> 
            <WhoIs />
            <Abouts data={AboutUsData.aboutUs} />
        </div>

    )
}
