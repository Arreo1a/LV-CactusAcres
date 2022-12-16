import React from "react";

import "../../components/InfoCards/InfoCards.scss";

function InfoCards(props) {
  return (
    <div className="infoCard">
      <div className="titleText">{props.title}</div>
      <div className="infoText">{props.description}</div>
    </div>
  );
}

export default InfoCards;
