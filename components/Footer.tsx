import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-[#1d1d1f]">Let’s work together！</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
          <a 
            href="https://www.linkedin.com/in/tracey-chen-313245290/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors text-lg font-medium hover:underline"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:t44chen@uwaterloo.ca" 
            className="text-blue-600 hover:text-blue-800 transition-colors text-lg font-medium hover:underline"
          >
            t44chen@uwaterloo.ca
          </a>
        </div>
        <p className="mt-16 text-gray-400 text-sm">
          © {new Date().getFullYear()} Tracey Chen. Built with passion & precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
