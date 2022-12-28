import React from "react";
import { Link } from "react-router-dom";

//style
import "./RDSSNavbar.scss";

//fontawesoem
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCircleChevronLeft)

function RDSNNavbar() {
  return (
    <div className="RDSNNavbar">
      <Link to="/" className="backButton">
        {<FontAwesomeIcon icon={ faCircleChevronLeft} />}
      </Link>
      <div className="titleTextContainer">
        <div className="titleText">Rayos De Sol Sur</div>
      </div>
    </div>
  );
}

export default RDSNNavbar;
 
