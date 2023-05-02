import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";
import Header from "./components/Header";
import Footer from "./components/Footer";

import galaxy from "./assets/galaxy.jpg";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          speed={.5}
          factor={3}
          style={{
            backgroundImage: `url(${galaxy})`,
            backgroundSize: "cover",
          }}
        >
          <Header />
        </ParallaxLayer>

        <ParallaxLayer
        offset={0.25}>
          <Router>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/My-Projects" element={<MyProjects />} />
            </Routes>
          </Router>
        </ParallaxLayer>

        <ParallaxLayer offset={1.87} speed={0.5}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
