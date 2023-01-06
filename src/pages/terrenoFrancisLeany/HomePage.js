import React from "react";
import "./HomePage.scss";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import map from "./images/map.jpg";
import { Icon } from "@iconify/react";

function HomePageFrancisLeany () {
  return (
    <div className="container"> 
      <div className="header">Terreno de Francis </div>

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
      <a href="https://wa.me/+525555555555" > <Icon icon="logos:whatsapp-icon" /></a>
        
      </div>
      <div className="icon-map">
       <a href="https://www.google.com.mx/maps/place/29%C2%B059'57.1%22N+107%C2%B033'59.8%22W/@29.9991944,-107.5687998,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0x7fccffb9cd4c6127" > <Icon icon="logos:google-maps" /></a>
      </div>
      <div className="footer">
        
      </div>
    </div>
  );
}

export default HomePageFrancisLeany;

