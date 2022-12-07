import React from "react";
import CompanyCard from "../../components/CompanyCards/CompanyCard";

// Components
import Header from "../../components/Header/Header";

// Styles
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <Header />
      <div className="companyCardsContainer">
        <div className="companyCardsWrapper">
          <CompanyCard
            pageUrl={"/cactus-acres"}
            name={"Cactus Acres"}
            isAvailable={true}
          />
          <CompanyCard
            pageUrl={"/rayos-de-sol-norte"}
            name={"Rayos De Sol Norte"}
            isAvailable={true}
          />
          <CompanyCard name={"PUESTA DE SOL"} isAvailable={true} />
          <CompanyCard name={"Terreno de Francis Leany"} isAvailable={true} />
          <CompanyCard name={"RAYOS DE SOL Sur"} isAvailable={false} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
