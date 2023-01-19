import React from "react";

// Components
import Header from "../../components/Header/Header";
import CompanyCard from "../../components/CompanyCards/CompanyCard";
import LogoCompanyCard from "../../components/LogoCompanyCard/LogoCompanyCard";

// Images
import CactusAcresImg1 from "../../../../images/catus.png";

// Styles
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <Header />
      <div className="companyCardsContainer">
        <div className="companyCardsWrapper">
          <LogoCompanyCard
            pageUrl={"http://localhost:3001/"}
            name={"Cactus Acres"}
            companyLogoImg={CactusAcresImg1}
            noLogoTextColor={"#ffffff"}
            topSectionBgColor={"#E2BB8C"}
            isAvailable={true}
            isSeparatePage={true}
          />
          <LogoCompanyCard
            pageUrl={"/rayos-de-sol-norte"}
            name={"Rayos De Sol Norte"}
            topSectionBgColor={"#351b64"}
            noLogoTextColor={"#ffae00"}
            isAvailable={false}
          />
          <LogoCompanyCard
            pageUrl={"/puesta-de-sol"}
            name={"PUESTA DE SOL"}
            topSectionBgColor={"#ffae00"}
            noLogoTextColor={"#351b64"}
            isAvailable={false}
          />
          <LogoCompanyCard
            pageUrl={"/terreno-francis-leany"}
            name={"Terreno de Francis Leany"}
            topSectionBgColor={"#43AE4A"}
            noLogoTextColor={"#000000"}
            isAvailable={false}
          />
          <LogoCompanyCard
            pageUrl={"/rayos-de-sol-sur"}
            name={"Rayos De Sol Sur"}
            topSectionBgColor={"#351b64"}
            noLogoTextColor={"#ffae00"}
            isAvailable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

{
  /*
  The order of props in the company card should be like this
  El orden de props en el carta del company deberia der algo asi

  <LogoCompanyCard
    pageUrl={"/cactus-acres"}
    name={"Cactus Acres"}
    companyLogoImg={CactusAcresImg}
    topSectionBgColor={"#1b1c1d"}
    noLogoTextColor={"#ffae00"}
    invertLogoColors={true}
    isAvailable={true}
    isSeparatePage={true}
  />
*/
}

{
  /*
  The order of props in the company card should be like this
  El orden de props en el carta del company deberia der algo asi

  <LogoCompanyCard
    pageUrl={"/cactus-acres"}
    name={"Cactus Acres"}
    companyLogoImg={CactusAcresImg}
    topSectionBgColor={"#1b1c1d"}
    noLogoTextColor={"#ffae00"}
    invertLogoColors={true}
    isAvailable={true}
  />
*/
}
