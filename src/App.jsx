import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar/Navbar";
import FlavorCategory from "./components/FlavorCategory";
import Flavors from "./components/Flavors";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flavors" element={<Flavors />} />
        <Route path="/flavor-category" element={<FlavorCategory />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
