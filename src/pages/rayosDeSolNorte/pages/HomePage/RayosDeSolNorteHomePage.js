import React from "react";

// Components
import RDSNNavbar from "../../components/Navbar/RDSNNavbar";

// Images
import imgOfLocations from "../../images/RDSN.jpeg";

// Styles
import "./RayosDeSolNorteHomePage.scss";

function RayosDeSolNorteHomePage() {
  const listOfLots = [
    {
      lotNumber: 1,
      lotPrice: null,
      isSold: true,
    },
    {
      lotNumber: 2,
      lotPrice: 15,
      isSold: false,
    },
    {
      lotNumber: 3,
      lotPrice: 15,
      isSold: false,
    },
    {
      lotNumber: 4,
      lotPrice: 15,
      isSold: false,
    },
    {
      lotNumber: 5,
      lotPrice: 27,
      isSold: false,
    },
    {
      lotNumber: 6,
      lotPrice: 27,
      isSold: false,
    },
    {
      lotNumber: 7,
      lotPrice: 27,
      isSold: false,
    },
    {
      lotNumber: 8,
      lotPrice: 27,
      isSold: false,
    },
    {
      lotNumber: 9,
      lotPrice: 15,
      isSold: false,
    },
    {
      lotNumber: 10,
      lotPrice: 22,
      isSold: false,
    },
    {
      lotNumber: 11,
      lotPrice: null,
      isSold: true,
    },
    {
      lotNumber: 12,
      lotPrice: 14,
      isSold: false,
    },
    {
      lotNumber: 13,
      lotPrice: null,
      isSold: true,
    },
    {
      lotNumber: 14,
      lotPrice: 14,
      isSold: false,
    },
    {
      lotNumber: 15,
      lotPrice: null,
      isSold: true,
    },
    {
      lotNumber: 16,
      lotPrice: 27,
      isSold: false,
    },
    {
      lotNumber: 17,
      lotPrice: 27,
      isSold: false,
    },
    {
      lotNumber: 18,
      lotPrice: 27,
      isSold: false,
    },
    {
      lotNumber: 19,
      lotPrice: null,
      isSold: true,
    },
    {
      lotNumber: 20,
      lotPrice: 27,
      isSold: false,
    },
    {
      lotNumber: 21,
      lotPrice: 27,
      isSold: false,
    },
    {
      lotNumber: 22,
      lotPrice: 27,
      isSold: false,
    },
  ];

  return (
    <>
      <RDSNNavbar />
      <div className="rayosDeSolNorteHomePage">
        <div className="heroSection">
          <div className="imgContainer">
            <img src={imgOfLocations} alt="" className="imgOfLots" />
          </div>

          <div className="listOfLotsContainer">
            <div className="listOfLots">
              {listOfLots.map((lot) => (
                <div className="lotContainer">
                  <div className="lotNumber">{lot.lotNumber}</div>
                  {lot.isSold ? (
                    <div className="lotSoldText">Sold</div>
                  ) : (
                    <div className="lotPrice">${lot.lotPrice}k</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footerSection">
          <div className="descriptionText">
            Rayos de sol Norte es un vecindad Familiar en el Col.LeBaron de 22
            lotes.
          </div>
          <div className="contactUsSection">
            <div className="extraText">
              Si te interesa comprar un espacio; llena y envía el formulario, o
              envíanos un mensaje por
            </div>
            <div className="contactMethodsContainer">
              <p className="contactMethod">Email</p>
              <p> or </p>
              <p className="contactMethod">WhatsApp</p>
            </div>
            Con gusto te atendemos. Listo con Agua Y Camino: Primavera 2021 (se
            van a ir rapido, los Primeros lotes son de descuento).
          </div>
        </div>
      </div>
    </>
  );
}

export default RayosDeSolNorteHomePage;
