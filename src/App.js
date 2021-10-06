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
import { useState } from 'react';

import ToolsLaders from "./components/ToolsLadders/ToolsLaders";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



// import Cotizacion from "./pages/Cotizacion/Cotizacion";

function App() {
  const [openLangModal, setOpenLangModal] = useState(false);
  function OpenLangModal() {
    setOpenLangModal(!openLangModal);
  }
  return (
    <Router>
      <div >
        <Route path="/" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} />
          <Home />
          <ToolsLaders hb='500' hh='1500'/>
          <Footer data={FooterData}/>
        </Route>
        <Route path="/services" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} />
          <ServicesPage />
          <ToolsLaders hb='500' hh='200'/>
          <Footer data={FooterData}/>
        </Route>
        <Route path="/resources" exact>
          <ResourcePage />
          <Footer data={FooterData}/>
        </Route>
        <Route path="/news" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} />
          <NoticeAndEvents />
          <ToolsLaders hb='500' hh='200'/>
          <Footer data={FooterData}/>
        </Route>
        <Route path="/aboutus" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} />
          <AboutUs />
          <ToolsLaders hb='500' hh='200'/>
          <Footer data={FooterData}/>
        </Route>

        <Route path="/form" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} />
          <Cotizacion />
          <ToolsLaders hb='500' hh='200'/>
        </Route>

        <Route path="/faqs" exact>
          <Navigation data={NavData} openLangModal={OpenLangModal} />
          <Faqs />
          <ToolsLaders hb='500' hh='200'/>
          <Footer data={FooterData}/>
        </Route>

        {openLangModal && <LangModal modalAction={OpenLangModal} data={LangModalJSON} />}
      </div>
    </Router>     
  );
}

export default App;
