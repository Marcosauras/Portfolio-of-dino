import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";


function App() {
  return (
    <div class="min-h-screen bg-black text-white">
      <Header />
      <Router>

        <Routes>
          <Route path="/About-Me" element={<AboutMe />} />
          <Route path="/My-Projects" element={<MyProjects />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
