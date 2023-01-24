import React, { useState } from "react";

//navbar
import RDSNNavbar from "../../components/Navbar/RDSSNavbar";

import BasicTable from "../../components/useTable/BasicTable";
//images
import imagehoriozontal from "../../images/lotsWithNumbers-two.jpeg";
import map from "../../images/town-view.jpeg";

//style
import "./RayosDeSolSurHomePage..scss";

function RayosDeSolSurHomePage() {
  return (
    <div className="RayosDeSolSurHomePage">
      <RDSNNavbar />
      <div className="sign">
        <h1>Sold Out</h1>
      </div>
      <div className="homepage">
        <div className="main">
          <div className="content-images">
            <img
              alt=""
              src={imagehoriozontal}
              className="image-sold-out-horiz"
            />
          </div>
          <div className="content-graph">
            <BasicTable />
          </div>
        </div>

        <div className="mapa-wrapper">
          <img alt="" src={map} className="map" />
        </div>
      </div>
      <div className="footer">
        <div className="Description">
          <p>
            Rayos del sol es un vecindad Familiar en el Col. LeBaron de 29
            lotes. <br />
            Listo con Agua Y Camino: Primavera 2020
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default RayosDeSolSurHomePage;
