import React from "react";
import { Link } from "react-router-dom";

import "./PDSNavbar.scss";

function PDSNavbar() {
  return (
    <div className="PDSNavbar">
      <Link to="/" className="backButton">
        {"<"}
      </Link>
      <div className="titleTextContainer">
        <div className="titleText">Puesta De Sol</div>
      </div>
    </div>
  );
}

export default PDSNavbar;
