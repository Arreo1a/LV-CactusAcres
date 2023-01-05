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
          <div className="about-us">{t("aboutUs")}</div>
          <hr />
          <div className="informationSection">
            {/* _________________Computer Cards Start__________________ */}
            <div className="cardContainer-mobile">
              <div className="imageContainer">
                <img src={Img2} alt="img" className="infoImage" />
              </div>

              <div className="infoSection">
                <div className="titleText">
                  {t("about-infoCard-title-heritage")}
                </div>
                <div className="descriptionText">
                  {t("about-infoCard-description-heritage")}
                </div>
              </div>
            </div>

            <div className="cardContainer-mobile">
              <div className="imageContainer">
                <img src={Img2} alt="img" className="infoImage" />
              </div>

              <div className="infoSection">
                <div className="titleText">
                  {t("about-infoCard-title-location")}
                </div>
                <div className="descriptionText">
                  {t("about-infoCard-description-location")}
                </div>
              </div>
            </div>

            <div className="cardContainer-mobile">
              <div className="imageContainer">
                <img src={Img2} alt="img" className="infoImage" />
              </div>

              <div className="infoSection">
                <div className="titleText">
                  {t("about-infoCard-title-subdivision")}
                </div>
                <div className="descriptionText">
                  {t("about-infoCard-description-subdivision")}
                </div>
              </div>
            </div>

            <div className="cardContainer-mobile">
              <div className="imageContainer">
                <img src={Img2} alt="img" className="infoImage" />
              </div>

              <div className="infoSection">
                <div className="titleText">
                  {t("about-infoCard-title-securityAndAccessBooth")}
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
                  {t("about-infoCard-title-heritage")}
                </div>
                <div className="descriptionText">
                  {t("about-infoCard-description-heritage")}
                </div>
              </div>
            </div>

            <div className="cardContainer-2">
              <div className="infoSection">
                <div className="titleText">
                  {t("about-infoCard-title-location")}
                </div>
                <div className="descriptionText">
                  {t("about-infoCard-description-location")}
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
                <div className="titleText">
                  {t("about-infoCard-title-subdivision")}
                </div>
                <div className="descriptionText">
                  {t("about-infoCard-description-subdivision")}
                </div>
              </div>
            </div>

            <div className="cardContainer-2">
              <div className="infoSection">
                <div className="titleText">
                  {t("about-infoCard-title-securityAndAccessBooth")}
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
