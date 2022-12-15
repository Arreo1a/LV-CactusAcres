import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


import CactusAcresNavbar from "../../components/Navbar/CactusAcresNavbar";
import ImageSlideshowCactusAcres from "../../components/ImageSlideshow/ImageSlideshow-CactusAcres"
import Map from "../../components/map/map"
// scss
import "./CactusAcresHomePage.scss"
library.add(faPaperPlane)


function CactusAcresHomePage() {
  const [language, setLanguage] = useState(false);

  const [t,i18n] =  useTranslation(['welcome']);

  const changeToEnglish = () =>{
      i18n.changeLanguage('en');
      setLanguage(!language);
  }
  const changeToSpanish = () =>{
      i18n.changeLanguage('es');
      setLanguage(!language);
  }

  

  return (
    <div className="cactusAcresHomePage">
      <CactusAcresNavbar />
      <div className="homePage">
          <div className="heroSection">
          <p>Idioma actual:{i18n.language}</p>
                  {language ? <button onClick={changeToEnglish} >Change to English</button> :  <button onClick={changeToSpanish}>Cambiar a Español</button>}
            <div className="text-boxes">
                <div className="title">
                  <p className="welcome">
                   {t("title")}
                  </p>
            
                </div>
            </div>
            {/* Slide show */}
            <div className="slideshow-CactusAcres">
                <ImageSlideshowCactusAcres/>
            </div>


          </div>
            {/* Button Contact */}
          <div className="button-contact">
              <button className="btn-contact">{t("contact-us")} <FontAwesomeIcon icon={faPaperPlane} /></button>
          </div>

            {/* Card */}
          <div className="card">
              <div class="boxs">
                  <div class="title">
                  <h3>Control de Acceso</h3>
                  </div>
                  <div class="text">
                  <p>  Diseño de caseta único que te da la bienvenida a tu hogar,
                    mientras se encarga de mantener tu entorno controlado. </p>
                  </div>
                </div>
                <div class="boxs">
                  <div class="title">
                  <h3>Seguridad</h3>
                  </div>
                  <div class="text">
                  <p>  cuidan de ti y tu patrimonio,
                    para que te olvides de preocupaciones.</p>
                  </div>
                </div>
                <div class="boxs">
                  <div class="title">
                    <h3>Instalaciones subterráneas</h3>
                  </div>
                  <div class="text">
                    <p>Te permiten disfrutar de todo lo que te rodea.</p>
                  </div>
              </div>
          </div>

          <div class className="map">
            <Map/>
          </div>

      </div>

     
    </div>
  );
}

export default CactusAcresHomePage;
