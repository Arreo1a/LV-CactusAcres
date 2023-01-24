import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import map from "./images/map.jpg";
// import { Icon } from "@iconify/react";

import "./HomePage.scss";

function TFLHomePage() {
  return (
    <div className="terrenoFrancisLeany">
      <div className="header">
        <Link to="/" className="backButton">
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
        <div className="titleTextContainer">Terreno de Francis Leany</div>
      </div>

      <div className="main">
        <div className="imagenes">
          <div className="img-container">
            <img src={img1} className="imagen" />
          </div>

          <div className="img-container">
            <img src={img2} className="imagen" />
          </div>
          <div className="img-container">
            <img src={map} className="imagen" />
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="precio">$75k</div>
      </div>
      <div className="icon-whatsapp">
        <a href="https://wa.me/+526366982130">
          {" "}
          {/* <Icon icon="logos:whatsapp-icon" /> */}
        </a>
      </div>
      <div className="icon-map">
        <a href="https://www.google.com.mx/maps/place/29%C2%B059'57.1%22N+107%C2%B033'59.8%22W/@29.9991944,-107.5687998,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0x7fccffb9cd4c6127">
          {" "}
          {/* <Icon icon="logos:google-maps" /> */}
        </a>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default TFLHomePage;
