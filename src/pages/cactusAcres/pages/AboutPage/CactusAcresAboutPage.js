import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import CactusAcresNavbar from "../../components/Navbar/CactusAcresNavbar";

//image
import ImgPlanos from "./AboutImg/Plano.jpg";
import Img2 from "./AboutImg/c-4.jpg";
import Img3 from "./AboutImg/c-3.jpg";

import "./CactusAcresAboutPage..scss";

function CactusAcresAboutPage() {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <main className="Cactus-acres-About-page">
      <div className="navbar">
        <CactusAcresNavbar
          currentLanguage={language}
          changeToEnglish={changeToEnglish}
          changeToSpanish={changeToSpanish}
        />
      </div>
      <div className="AboutPage">
        <div className="hero-section-about">
          <div className="about-us">About us</div>
          <hr />
          <div className="informationSection">
            {/* _________________Computer Cards Start__________________ */}
            <div className="cardContainer-mobile">
              <div className="imageContainer">
                <img src={Img2} alt="img" className="infoImage" />
              </div>

              <div className="infoSection">
                <div className="titleText">
                  Un patrimonio que dura para siempre es la mejor inversión.
                </div>
                <div className="descriptionText">
                  fraccionamiento Cactus Accres está pensado para la comodidad
                  de la vida actual, contando con istalacion seguras que te
                  brindan una mayor Seguridad a ti y toda tu familia.
                </div>
              </div>
            </div>

            <div className="cardContainer-mobile">
              <div className="imageContainer">
                <img src={Img2} alt="img" className="infoImage" />
              </div>

              <div className="infoSection">
                <div className="titleText">Descripcion de la ubicacion</div>
                <div className="descriptionText">
                  contando con fácil accso,ubicado en Colonia Lebaron, para que
                  estés cerca de todo lo que necesitas, desde plazas
                  comerciales, colegios, restaurantes, Centro Medico, podrás
                  disfrutar de una traquilidad de Colonia Lebaron.
                </div>
              </div>
            </div>

            <div className="cardContainer-mobile">
              <div className="imageContainer">
                <img src={Img2} alt="img" className="infoImage" />
              </div>

              <div className="infoSection">
                <div className="titleText">Lotificación</div>
                <div className="descriptionText">
                  Nuestro fraccionamiento esta diseñado para tu bienestar, con
                  una variedad de lotes que se adaptan a tus necesidades y que
                  te ofrecen la oportunidad de ser parte de una comunidad con la
                  que te identifiques en un lugar donde puedes crecer.
                </div>
              </div>
            </div>

            <div className="cardContainer-mobile">
              <div className="imageContainer">
                <img src={Img2} alt="img" className="infoImage" />
              </div>

              <div className="infoSection">
                <div className="titleText">
                  Seguridad perimitral y caseta de acceso
                </div>
                <div className="descriptionText"></div>
              </div>
            </div>

            {/* _________________Mobile Cards End__________________ */}
            {/* _________________Computer Cards Start__________________ */}
            <div className="cardContainer-1">
              <div className="imageContainer">
                <img src={Img2} alt="img" className="infoImage" />
              </div>

              <div className="infoSection">
                <div className="titleText">
                  Un patrimonio que dura para siempre es la mejor inversión.
                </div>
                <div className="descriptionText">
                  fraccionamiento Cactus Accres está pensado para la comodidad
                  de la vida actual, contando con istalacion seguras que te
                  brindan una mayor Seguridad a ti y toda tu familia.
                </div>
              </div>
            </div>

            <div className="cardContainer-2">
              <div className="infoSection">
                <div className="titleText">Descripcion de la ubicacion</div>
                <div className="descriptionText">
                  contando con fácil accso,ubicado en Colonia Lebaron, para que
                  estés cerca de todo lo que necesitas, desde plazas
                  comerciales, colegios, restaurantes, Centro Medico, podrás
                  disfrutar de una traquilidad de Colonia Lebaron.
                </div>
              </div>

              <div className="imageContainer">
                <img src={Img2} alt="img" className="infoImage" />
              </div>
            </div>

            <div className="cardContainer-1">
              <div className="imageContainer">
                <img src={Img2} alt="img" className="infoImage" />
              </div>

              <div className="infoSection">
                <div className="titleText">Lotificación</div>
                <div className="descriptionText">
                  Nuestro fraccionamiento esta diseñado para tu bienestar, con
                  una variedad de lotes que se adaptan a tus necesidades y que
                  te ofrecen la oportunidad de ser parte de una comunidad con la
                  que te identifiques en un lugar donde puedes crecer.
                </div>
              </div>
            </div>

            <div className="cardContainer-2">
              <div className="infoSection">
                <div className="titleText">
                  Seguridad perimitral y caseta de acceso
                </div>
                <div className="descriptionText"></div>
              </div>

              <div className="imageContainer">
                <img src={Img3} alt="img" className="infoImage" />
              </div>
            </div>
            {/* _________________Computer Cards End__________________ */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CactusAcresAboutPage;
