import React from "react";

import PDSNavbar from "../../components/Navbar/PDSNavbar";

import imgOfLocations from "../../images/PDS.jpeg";

import "./PDSHomePage.scss";

function PDSHomePage() {
  const listOfLots = [
    {
      lotNumber: 1,
      lotPrice: 18,
      isSold: false,
    },
    {
      lotNumber: 2,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 3,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 4,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 5,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 6,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 7,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 8,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 9,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 10,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 11,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 12,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 13,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 14,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 15,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 16,
      lotPrice: 15,
      isSold: false,
    },
    {
      lotNumber: 17,
      lotPrice: 12,
      isSold: false,
    },
    {
      lotNumber: 18,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 19,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 20,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 21,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 22,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 23,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 24,
      lotPrice: 10,
      isSold: false,
    },
    {
      lotNumber: 25,
      lotPrice: 13,
      isSold: false,
    },
    {
      lotNumber: 26,
      lotPrice: 16,
      isSold: false,
    },
    {
      lotNumber: 27,
      lotPrice: 17,
      isSold: false,
    },
    {
      lotNumber: 28,
      lotPrice: 17,
      isSold: false,
    },
    {
      lotNumber: 29,
      lotPrice: 16,
      isSold: false,
    },
    {
      lotNumber: 30,
      lotPrice: 16,
      isSold: false,
    },
  ];

  return (
    <>
      <PDSNavbar />
      <div className="puestaDeSolHomePage">
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
      </div>
    </>
  );
}

export default PDSHomePage;
