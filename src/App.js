import Home from "./pages/Home/Home";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ResourcePage from "./pages/ResourcePage/ResourcePage";
import NoticeAndEvents from "./pages/NoticeAndEvents/NoticeAndEvents";
import AboutUs from "./pages/AboutUs/AboutUs";
import Faqs from "./pages/Faqs/Faqs";
import Footer from "./components/Footer/Footer";

import Navigation from "./components/Nav-Bar/Navigation";
import NavData from "./components/Nav-Bar/NavData.json";
import Cotizacion from "./pages/Cotizacion/Form";
import FooterData from "./components/Footer/FooterData.json";

import LangModal from "./components/LangModal/LangModal";
import LangModalJSON from './components/LangModal/LangModal.json';
import AlertModalForm from "./components/AlertModalForm/AlertModalForm";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ToolsLaders from "./components/ToolsLadders/ToolsLaders";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import CotizacionModal from '../src/components/CotizacionModal/CotizacionModal'

// import Cotizacion from "./pages/Cotizacion/Cotizacion";

function App() {
  const [openLangModal, setOpenLangModal] = useState(false);
  const [openCotModal, setOpenCotModal] = useState(false);
  const [openAlertCot, setopenAlertCot] = useState(false);

  const [count, setCount] = useState(0);

  function OpenLangModal() {
    setOpenLangModal(!openLangModal);
  }

  function OpenCotModal() {
    setOpenCotModal(true);
  }

  function CloseCotModal() {
    setOpenCotModal(false);

  }

  function CloseAlertCotModal(){
    setopenAlertCot(false);
  }

  useEffect(() => {
    let intervalId;
    if (!openCotModal) {
      intervalId = setInterval(() => {
        setCount(count + 1);
      }, 1000);
    }
    if (count >= 40) {
      OpenCotModal();
      setCount(0);
    }
    return () => clearInterval(intervalId);
  }, [count, openCotModal]);


  return (
    <Router>
      <div >
        <Route path="/" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} openCotModal={OpenCotModal} />
          <Home id="home"/>
          <ToolsLaders hb='500' hh='1500' />
          <Footer data={FooterData} />
          {/* <StateModal></StateModal> */}
        </Route>
        <Route path="/services" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} openCotModal={OpenCotModal} />
          <ServicesPage />
          <ToolsLaders hb='500' hh='200' />
          <Footer data={FooterData} />
        </Route>
        <Route path="/resources" exact>
          <ResourcePage />
          <Footer data={FooterData} />
        </Route>
        <Route path="/news" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} openCotModal={OpenCotModal} />
          <NoticeAndEvents />
          <ToolsLaders hb='500' hh='200' />
          <Footer data={FooterData} />
        </Route>
        <Route path="/aboutus" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} openCotModal={OpenCotModal} />
          <AboutUs />
          <ToolsLaders hb='500' hh='200' />
          <Footer data={FooterData} />
        </Route>

        <Route path="/form" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} openCotModal={OpenCotModal} />
          <Cotizacion openModal={()=>{setopenAlertCot(true)}}/>
          <ToolsLaders hb='500' hh='200' />
        </Route>

        <Route path="/faqs" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} openCotModal={OpenCotModal} />
          <Faqs />
          <ToolsLaders hb='500' hh='200' />
          <Footer data={FooterData} />
        </Route>

        {openCotModal && <CotizacionModal closeModal={CloseCotModal} />}
        {openAlertCot && <AlertModalForm closeModal={CloseAlertCotModal} />}

        {openLangModal && <LangModal modalAction={OpenLangModal} data={LangModalJSON} />}
      </div>
    </Router>
  );
}

export default App;
