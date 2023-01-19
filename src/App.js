import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import React from "react";
// Pages
import HomePage from "./pages/lebaronVecindad/pages/HomePage/HomePage";
import RayosDeSolNorteHomePage from "./pages/rayosDeSolNorte/pages/HomePage/RayosDeSolNorteHomePage";
import PDSHomePage from "./pages/PuestaDeSol/pages/HomePage/PDSHomePage";
import TFLHomePage from "./pages/terrenoFrancisLeany/HomePage";

//hace la recarga de la paguina con lazy loading
const RayosDeSolSurHomePage = React.lazy(() =>
  import("./pages/rayosDeSolSur/pages/Homepage/RayosDeSolSurHomePage")
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route
          path="/rayos-de-sol-norte"
          element={<RayosDeSolNorteHomePage />}
        />
        <Route
          path="/rayos-de-sol-sur"
          element={
            <React.Suspense fallback="Loding...">
              <RayosDeSolSurHomePage />
            </React.Suspense>
          }
        />
        <Route path="/puesta-de-sol" element={<PDSHomePage />} />
        <Route path="/terreno-francis-leany" element={<TFLHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
