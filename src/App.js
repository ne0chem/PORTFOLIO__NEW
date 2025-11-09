import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Intro from "./pages/intro/Intro";
import ShollPortfolio from "./pages/shollPortfolio/ShollPortfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="shool" element={<ShollPortfolio />} />{" "}
            {/* Исправлено - без слеша */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
