import React from "react";
import { Link } from "react-router-dom";

import "./LogoCompanyCard.scss";

function LogoCompanyCard(props) {
  const bgColor = props.topSectionBgColor;

  const styles = {
    topBgColor: { backgroundColor: props.topSectionBgColor },
    noLogoColor: { color: props.noLogoTextColor },
  };

  return (
    <Link to={props.pageUrl} className="logoCompanyCard">
      <div className="topSection" style={styles.topBgColor}>
        {props.companyLogoImg ? (
          <>
            {props.invertLogoColors ? (
              <img
                src={props.companyLogoImg}
                alt=""
                className="invertedCompanyLogoImg"
              />
            ) : (
              <img
                src={props.companyLogoImg}
                alt=""
                className="companyLogoImg"
              />
            )}
          </>
        ) : (
          <div className="noLogoNameOfCompanyText" style={styles.noLogoColor}>
            {props.name}
          </div>
        )}
      </div>
      <div className="bottomSection">
        <div className="companyName">{props.name}</div>
        {props.isAvailable ? (
          <div className="isAvailableText">Available</div>
        ) : (
          <div className="notAvailableText">Sold Out</div>
        )}
      </div>
    </Link>
  );
}

export default LogoCompanyCard;
