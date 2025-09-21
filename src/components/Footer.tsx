import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png'; // Make sure the path is correct


const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="bg-gradient-to-r from-yellow-700 to-orange-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 text-center">
            <p className="text-white">
              Copyright 2025, PanchArogya. All Rights Reserved. Powered by CIN Universe.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;