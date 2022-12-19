import React from "react";
import { Link } from "react-router-dom";

import "./RDSNNavbar.scss";

function RDSNNavbar() {
  return (
    <div className="RDSNNavbar">
      <Link to="/" className="backButton">
        {"<"}
      </Link>
      <div className="titleTextContainer">
        <div className="titleText">Rayos De Sol Norte</div>
      </div>
    </div>
  );
}

export default RDSNNavbar;
