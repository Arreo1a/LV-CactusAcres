import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/lebaronVecindad/pages/HomePage/HomePage";
import CactusAcresHomePage from "./pages/cactusAcres/pages/HomePage/CactusAcresHomePage";
import RayosDeSolNorteHomePage from "./pages/rayosDeSolNorte/pages/HomePage/RayosDeSolNorteHomePage";
import PDSHomePage from "./pages/PuestaDeSol/pages/HomePage/PDSHomePage";
import ContactPage from "./pages/cactusAcres/pages/ContactPage/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/cactus-acres" element={<CactusAcresHomePage />} />
        <Route path="/cactus-acres/contact" element={<ContactPage />} />

        <Route
          path="/rayos-de-sol-norte"
          element={<RayosDeSolNorteHomePage />}
        />
        <Route path="/puesta-de-sol" element={<PDSHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
