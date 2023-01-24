import React from "react";
import { Link } from "react-router-dom";

//style
import "./RDSSNavbar.scss";

//fontawesoem
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function RDSNNavbar() {
  return (
    <div className="RDSNNavbar">
      <Link to="/" className="backButton">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      <div className="titleTextContainer">
        <div className="titleText">Rayos De Sol Sur</div>
      </div>
    </div>
  );
}

export default RDSNNavbar;
