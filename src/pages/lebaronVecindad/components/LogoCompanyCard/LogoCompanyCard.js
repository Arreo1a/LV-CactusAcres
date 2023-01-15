import React from "react";
import { Link } from "react-router-dom";

import "./LogoCompanyCard.scss";

function LogoCompanyCard(props) {
  return (
    <div className="companyCardContainer">
      {props.isSeparatePage ? (
        <a href={props.pageUrl} className="logoCompanyCard">
          <EntireCard _props={props} />
        </a>
      ) : (
        <Link to={props.pageUrl} className="logoCompanyCard">
          <EntireCard _props={props} />
        </Link>
      )}
    </div>
  );
}

function EntireCard({ _props }) {
  const bgColor = _props.topSectionBgColor;

  const styles = {
    topBgColor: { backgroundColor: _props.topSectionBgColor },
    noLogoColor: { color: _props.noLogoTextColor },
  };

  return (
    <>
      <div className="topSection" style={styles.topBgColor}>
        {_props.companyLogoImg ? (
          <>
            {_props.invertLogoColors ? (
              <img
                src={_props.companyLogoImg}
                alt=""
                className="invertedCompanyLogoImg"
              />
            ) : (
              <img
                src={_props.companyLogoImg}
                alt=""
                className="companyLogoImg"
              />
            )}
          </>
        ) : (
          <div className="noLogoNameOfCompanyText" style={styles.noLogoColor}>
            {_props.name}
          </div>
        )}
      </div>
      <div className="bottomSection">
        <div className="companyName">{_props.name}</div>
        {_props.isAvailable ? (
          <div className="isAvailableText">Available</div>
        ) : (
          <div className="notAvailableText">Sold Out</div>
        )}
      </div>
    </>
  );
}

// function TypeOfLink({ isSeparatePage, pageUrl }) {
//   return (
//     <>
//       {isSeparatePage ? <a href="youtube.com"></a> : <Link to={pageUrl}></Link>}
//     </>
//   );
// }

export default LogoCompanyCard;
