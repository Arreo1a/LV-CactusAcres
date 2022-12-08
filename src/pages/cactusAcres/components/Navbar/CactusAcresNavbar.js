import React, { useState } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// Styles
import "./CactusAcresNavbar.scss";

// Images
import CactusLogo from "../../images/catusrecortado.png";

function CactusAcresNavbar() {
  const [open, setOpen] = useState(false);
  const screenWidth = window.innerWidth;

  return (
    <div className="cactusAcresNavbar">
      <div className="logoContainer">
        <img src={CactusLogo} alt="" className="logoImg" />
      </div>
      <div className="textContainer">
        <div className="titleText">Cactus Acres</div>
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
          <DropdownMenu />
        </div>
      ) : null}
    </div>
  );
}

export default CactusAcresNavbar;

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");

  return (
    <div className="dropdown">
      <div className="menu">
        <div className="dropdownItem">
          <span className="menuLink">Home</span>
        </div>
        <div className="dropdownItem">
          <span className="menuLink">About</span>
        </div>
        <div className="dropdownItem">
          <span className="menuLink">Contact</span>
        </div>
      </div>
    </div>
  );
}
