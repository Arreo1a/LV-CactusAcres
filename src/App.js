import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react"
// Pages
import HomePage from "./pages/lebaronVecindad/pages/HomePage/HomePage";
import RayosDeSolNorteHomePage from "./pages/rayosDeSolNorte/pages/HomePage/RayosDeSolNorteHomePage";
import PDSHomePage from "./pages/PuestaDeSol/pages/HomePage/PDSHomePage";
import CactusAcresAboutPage from '../src/pages/cactusAcres/pages/AboutPage/CactusAcresAboutPage'
//hace la recarga de la paguina con lazy loading
const CactusAcresHomePage = React.lazy(()=>import("./pages/cactusAcres/pages/HomePage/CactusAcresHomePage"));
const RayosDeSolSurHomePage = React.lazy(()=>import("./pages/rayosDeSolSur/pages/Homepage/RayosDeSolSurHomePage"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/cactus-acres" element={
        <React.Suspense fallback="Loding...">
          <CactusAcresHomePage />
        </React.Suspense>} />
        <Route path="/cactus-acres/about" element={<CactusAcresAboutPage />} />
        <Route
          path="/rayos-de-sol-norte"
          element={<RayosDeSolNorteHomePage />}
        />
         <Route path="/rayos-de-sol-sur" element={
        <React.Suspense fallback="Loding...">
          <RayosDeSolSurHomePage />
        </React.Suspense>} />
        <Route path="/puesta-de-sol" element={<PDSHomePage />} />
       
        
      </Routes>
    </Router>
  );
}

export default App;

