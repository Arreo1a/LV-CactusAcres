import React from 'react'

import CactusAcresNavbar from "../../components/Navbar/CactusAcresNavbar";
import "./CactusAcresAboutPage..scss";
//image
import ImgPlanos from "./AboutImg/Plano.jpg";
import Img2 from "./AboutImg/c-4.jpg";
import Img3 from "./AboutImg/c-3.jpg";


function CactusAcresAboutPage() {
  
  return (
    
    <main className="Cactus-acres-About-page">
   
    <div className="navbar">
      <CactusAcresNavbar />
    </div>
      <div className="AboutPage">
        <div className="hero-section-about">

        <h1 className="about-us">About us</h1>

          <div className="Card">
            
            <div className="card-information">
              <h1 className="title">---Lotificación</h1>
              <p className="text">
                Nuestro fraccionamiento esta diseñado para tu bienestar, con una
                variedad de lotes que se adaptan a tus necesidades y que te
                ofrecen la oportunidad de ser parte de una comunidad con la que
                te identifiques en un lugar donde puedes crecer.
              </p>
              <div className="images">
                <img src={ImgPlanos} alt="Imagen decorativa" className="Img" />
              </div>
            </div>

            <div className="card-information">
              <h1 className="title">
                ---Un patrimonio que dura para siempre es la mejor inversión.
              </h1>
              <p className="text">
                fraccionamiento Cactus Accres está pensado para la comodidad de
                la vida actual, contando con istalacion seguras que te brindan
                una mayor Seguridad a ti y toda tu familia,
              </p>
              <div className="images">
                <img src={ImgPlanos} alt="Imagen decorativa" className="Img" />
              </div>
            </div>

            <div className="card-information">
              <h1 className="title">---Descripcion de la ubicacion</h1>
              <p className="text">
                Fraccionamineto Cactus Acres está pensado para la comodidad de
                la vida actual, contando con fácil accso,ubicado en Colonia
                Lebaron, para que estés cerca de todo lo que necesitas, desde
                plazas comerciales, colegios, restaurantes, Centro Medico,
                podrás disfrutar de una traquilidad de Colonia Lebaron.
              </p>
              <div className="images">
                <img src={Img2} alt="Imagen decorativa" className="Img" />
              </div>
            </div>

            <div className="card-information">
              <h1 className="title">--Seguridad perimitral y caseta de acceso</h1>
            
              <div className="images">
                <img src={Img3} alt="Imagen decorativa" className="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
   
  );
}

export default CactusAcresAboutPage;
