import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./PDSNavbar.scss";

function PDSNavbar() {
  return (
    <div className="PDSNavbar">
      <Link to="/" className="backButton">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      <div className="titleTextContainer">
        <div className="titleText">Puesta De Sol</div>
      </div>
    </div>
  );
}

export default PDSNavbar;
