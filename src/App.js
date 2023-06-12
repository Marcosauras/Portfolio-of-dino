import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";
import ContactMe from "./pages/ContactMe";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">

      <Header />

      <div className="flex-1">
        <Router>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/My-Projects" element={<MyProjects />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
        </Router>
      </div>


      
    </div>
  );
}

export default App;