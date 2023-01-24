import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./RDSNNavbar.scss";

function RDSNNavbar() {
  return (
    <div className="RDSNNavbar">
      <Link to="/" className="backButton">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      <div className="titleTextContainer">
        <div className="titleText">Rayos De Sol Norte</div>
      </div>
    </div>
  );
}

export default RDSNNavbar;
