import React, { useState, useEffect } from 'react';
import Preloader from './Components/Pre';
import Navbar from "./components/Navbar";
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './Style.css';
import Footer from './Components/Footer';

const App = () => {
  const [load, upadateLoad] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
        <Preloader load={load} />
        <div className={`app ${load ? 'no-scroll': 'scroll'}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App;
