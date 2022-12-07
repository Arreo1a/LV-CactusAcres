import React from "react";
import { Link } from "react-router-dom";

import "./CompanyCard.scss";

function CompanyCard(props) {
  return (
    <Link to={props.pageUrl} className="companyCard">
      <div className="companyName">{props.name}</div>
      {props.isAvailable ? (
        <div className="isAvailableText">Available</div>
      ) : (
        <div className="notAvailableText">Sold Out</div>
      )}
    </Link>
  );
}

export default CompanyCard;
