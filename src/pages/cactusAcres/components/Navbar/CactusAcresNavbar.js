import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <>
      <div className="cactusAcresNavbar">
        <Link to="/cactus-acres" className="logoContainer">
          <img src={CactusLogo} alt="" className="logoImg" />
        </Link>
        <div className="textContainer">
          <div className="titleText">Cactus Acres</div>
        </div>
        <div className="linksContainer">
          <div className="allLinks">
            <Link to="/cactus-acres" className="headerLink">
              <div className="linkText">Home</div>
            </Link>
            <Link to="/cactus-acres/about" className="headerLink">
              <div className="linkText">About</div>
            </Link>
            <Link to="/cactus-acres/contact" className="headerLink">
              <div className="linkText">Contact</div>
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
