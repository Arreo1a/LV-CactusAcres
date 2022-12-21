import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/lebaronVecindad/pages/HomePage/HomePage";
import CactusAcresHomePage from "./pages/cactusAcres/pages/HomePage/CactusAcresHomePage";
import RayosDeSolNorteHomePage from "./pages/rayosDeSolNorte/pages/HomePage/RayosDeSolNorteHomePage";
import TFLHomePage from "./pages/terrenoFrancisLeany/pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/cactus-acres" element={<CactusAcresHomePage />} />
        <Route
          path="/rayos-de-sol-norte"
          element={<RayosDeSolNorteHomePage />}
        />
        <Route
          path="/terreno-francis-leany"
          element={<TFLHomePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
