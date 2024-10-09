import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import UserProfile from './pages/UserProfile';

const App = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;