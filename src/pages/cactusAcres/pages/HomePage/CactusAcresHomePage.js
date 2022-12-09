import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


import CactusAcresNavbar from "../../components/Navbar/CactusAcresNavbar";
import ImageSlideshowCactusAcres from "../../components/ImageSlideshow/ImageSlideshow-CactusAcres"

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

            <div className="slideshow-CactusAcres">
                <ImageSlideshowCactusAcres/>
            </div>

            <div className="button-contact">
              <button className="btn-contact">{t("contact-us")} <FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>

          </div>

      </div>
    </div>
  );
}

export default CactusAcresHomePage;
