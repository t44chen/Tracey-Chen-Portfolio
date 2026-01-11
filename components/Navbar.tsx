
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity">
          Tracey Chen
        </Link>
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/design" className="text-sm font-medium hover:text-blue-600 transition-colors">Design</Link>
          <Link to="/figma" className="text-sm font-medium hover:text-blue-600 transition-colors">Figma</Link>
          <Link to="/photography" className="text-sm font-medium hover:text-blue-600 transition-colors">Photography</Link>
          <a 
            href="mailto:t44chen@uwaterloo.ca" 
            className="px-5 py-2 bg-[#1d1d1f] text-white text-xs font-semibold rounded-full hover:bg-opacity-80 transition-all apple-transition"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
