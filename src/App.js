import "./styles.css";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Naslovna from "./Components/Naslovna.js";
import Prva from "./Components/Prva.js";
import Druga from "./Components/Druga.js";
import Galerija from "./Components/Galerija.js";
import Roditelj from "./Components/Roditelj.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Naslovna />} />
          <Route path="/prva" element={<Prva />} />
          <Route path="/druga" element={<Druga />} />
          <Route path="/galerija" element={<Galerija />} />
          <Route path="/galerija" element={<Roditelj />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
