import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
