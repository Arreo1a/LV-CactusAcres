import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="teamSection">
        <div className="plzContactTxt">Please Contact</div>
        <div className="teamMemberContainer">
          <span className="roleTxt">Lead Developer: </span>
          <span className="nameTxt">Martin Arreola jr.</span>
        </div>
        <div className="teamMemberContainer">
          <span className="roleTxt">Media & Info Tech: </span>
          <span className="nameTxt">A.D.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
