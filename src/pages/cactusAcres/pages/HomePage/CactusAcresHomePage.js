import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Components
import CactusAcresNavbar from "../../components/Navbar/CactusAcresNavbar";
import ImageSlideshowCactusAcres from "../../components/ImageSlideshow/ImageSlideshow-CactusAcres";
import Map from "../../components/map/map";
import InfoCards from "../../components/InfoCards/InfoCards";

// scss
import "./CactusAcresHomePage.scss";

library.add(faPaperPlane);

function CactusAcresHomePage() {
  const [language, setLanguage] = useState(false);

  const [t, i18n] = useTranslation(["welcome"]);

  const changeToEnglish = () => {
    i18n.changeLanguage("en");
    setLanguage(!language);
  };

  const changeToSpanish = () => {
    i18n.changeLanguage("es");
    setLanguage(!language);
  };

  return (
    <div className="cactusAcresHomePage">
      <CactusAcresNavbar
        currentLanguage={language}
        changeToEnglish={changeToEnglish}
        changeToSpanish={changeToSpanish}
      />
      <div className="homePage">
        <div className="heroSection">
          <div className="titleSection">
            <div className="titleContainer">
              <div className="titleText">{t("title")}</div>
            </div>
          </div>
          <div className="slideshowContainer">
            <div className="slideshow-CactusAcres">
              <ImageSlideshowCactusAcres />
            </div>
          </div>
          <div className="contactBtnContainer">
            <button className="btn-contact">
              {t("contact-us")} <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
        <div className="heroSectionLargeScreen">
          <div className="titleSection">
            <div className="titleContainer">
              <div className="titleText">{t("title")}</div>
            </div>
            <div className="contactBtnContainer">
              <button className="btn-contact">
                {t("contact-us")} <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
          <div className="slideshowContainer">
            <div className="slideshow-CactusAcres">
              <ImageSlideshowCactusAcres />
            </div>
          </div>
        </div>

        <div className="allInfoCards">
          <div className="wrapAllInfoCards">
            <InfoCards
              title={t("infoCard-title-accessControl")}
              description={t("infoCard-description-accessControl")}
            />
            <InfoCards
              title={t("infoCard-title-security")}
              description={t("infoCard-description-security")}
            />
            <InfoCards
              title={t("infoCard-title-undergroundInstalations")}
              description={t("infoCard-description-undergroundInstalations")}
            />
            {/* <InfoCards
              title={"Privacidad"}
              description={
                "Gracias al control de acceso puedes estar seguro de tener la privacidad que tu y tu familia necesitan."
              }
            />
            <InfoCards
              title={"Plusvalía"}
              description={
                '"Un patrimonio es la mejor inversion Pensado en lotes residenciales que te ofrecen la oportunidad de que cada residencia aumente el valor de tu vivienda y puedas ser parte de una comunidad con la que te identifiques en un lugar donde puedas crecer.'
              }
            />
            <InfoCards
              title={"Servicios"}
              description={
                "Te aseguran de tener tus servicios siempre disponibles, como agua potable y electricidad."
              }
            />

            <InfoCards
              title={"Zona Segura"}
              description={
                "Una zona pensada para que disfrutes al aire libre y sin preocupaciones con tus amigos y familiares mientras gozas de momentos inolvidables."
              } 
            />
            */}
            <div className="seeMoreBtn">
              <Link to="/cactus-acres/about" className="seeMoreText">
                {t("seeMore")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mapContainer">
          <div class className="map">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CactusAcresHomePage;
