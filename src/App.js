import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/lebaronVecindad/pages/HomePage/HomePage";
import CactusAcresHomePage from "./pages/cactusAcres/pages/HomePage/CactusAcresHomePage";
import RayosDeSolNorteHomePage from "./pages/rayosDeSolNorte/pages/HomePage/RayosDeSolNorteHomePage";

import CactusAcresAboutPage from "./pages/cactusAcres/pages/AboutPage/CactusAcresAboutPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/cactus-acres" element={<CactusAcresHomePage />} />
        <Route path="/cactus-acres/about" element={<CactusAcresAboutPage/>}/>
        <Route
          path="/rayos-de-sol-norte"
          element={<RayosDeSolNorteHomePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
