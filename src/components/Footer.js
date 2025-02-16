import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-4">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Ax. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
