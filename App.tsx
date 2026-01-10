
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Figma from './pages/Figma';
import Design from './pages/Design';
import Photography from './pages/Photography';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/figma" element={<Figma />} />
            <Route path="/design" element={<Design />} />
            <Route path="/photography" element={<Photography />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
