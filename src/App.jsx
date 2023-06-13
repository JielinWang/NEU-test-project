import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navigation from "./components/navbar/Navbar";
import FlavorCategory from "./components/flavors/FlavorCategory";
import Flavors from "./components/flavors/Flavors";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flavors" element={<Flavors />}>
          <Route path="" element={<FlavorCategory />} />
          <Route path="flavorsSlug" element={<FlavorCategory />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
