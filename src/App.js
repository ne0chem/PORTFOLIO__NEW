import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Intro from "./pages/intro/Intro";
import ShollPortfolio from "./pages/shollPortfolio/ShollPortfolio";
import ProjectDetails from "./pages/portfolio/ProjectDetails/ProjectDetails"; // добавьте этот импорт

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route
              path="portfolio/project/:projectId"
              element={<ProjectDetails />}
            />{" "}
            {/* добавили маршрут для деталей проекта */}
            <Route path="shool" element={<ShollPortfolio />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
