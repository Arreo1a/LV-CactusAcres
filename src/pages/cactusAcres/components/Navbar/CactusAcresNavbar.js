import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// Components
import ChangeLanguageBtn from "../ChangeLanguageBtn/ChangeLanguageBtn";

// Styles
import "./CactusAcresNavbar.scss";

// Images
import CactusLogo from "../../images/catusrecortado.png";

function CactusAcresNavbar(props) {
  const [open, setOpen] = useState(false);

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
    <>
      <div className="cactusAcresNavbar">
        <div className="logoContainer">
          <img src={CactusLogo} alt="" className="logoImg" />
        </div>
        <div className="textContainer">
          <div className="titleTextMobile">CACTUS ACRES</div>
          <div className="titleTextLargeScreen">
            <div className="titleTextPiece textPiece-cactus">CACTUS</div>
            <div className="titleTextPiece textPiece-acres">ACRES</div>
          </div>
        </div>
        <div className="linksContainer">
          <div className="allLinks">
            <Link to="/cactus-acres" className="headerLink">
              <div className="linkText">{t("home")}</div>
            </Link>
            <Link to="/cactus-acres/about" className="headerLink">
              <div className="linkText">{t("aboutUs")}</div>
            </Link>
            <Link to="/cactus-acres/contact" className="headerLink">
              <div className="linkText">{t("contact")}</div>
            </Link>
          </div>
        </div>
        <div className="rightSection">
          <div className="changeLanguageBtnContainer">
            <ChangeLanguageBtn
              currentLanguage={props.currentLanguage}
              changeToEnglish={props.changeToEnglish}
              changeToSpanish={props.changeToSpanish}
            />
          </div>
        </div>
        <div className="hamburgerContainer">
          {open ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="closeDropdownIcon"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="hamburgerIcon"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
        {open ? (
          <div className="dropdownContainer">
            <div className="dropdown">
              <div className="menu">
                <Link
                  to="/cactus-acres"
                  className="dropdownItem"
                  onClick={() => setOpen(!open)}
                >
                  <span className="menuLink">Home</span>
                </Link>
                <Link
                  to="/cactus-acres/about"
                  className="dropdownItem"
                  onClick={() => setOpen(!open)}
                >
                  <span className="menuLink">About</span>
                </Link>
                <Link
                  to="/cactus-acres/contact"
                  className="dropdownItem"
                  onClick={() => setOpen(!open)}
                >
                  <span className="menuLink">Contact</span>
                </Link>

                <div className="dropdownItemBtn">
                  <ChangeLanguageBtn
                    isPhone={true}
                    currentLanguage={props.currentLanguage}
                    changeToEnglish={props.changeToEnglish}
                    changeToSpanish={props.changeToSpanish}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="pushContentDown"></div>
    </>
  );
}

export default CactusAcresNavbar;

// function DropdownMenu() {
//   return (

//   );
// }
