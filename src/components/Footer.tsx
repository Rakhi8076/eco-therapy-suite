import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-700 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">MAHARISHI</h3>
                <p className="text-sm text-gray-600">AYURVEDA HOSPITAL</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Ayurveda will be known as the most supremely evolved 
              system of perfect health - from both points of view: 
              prevention and cure
            </p>
            <p className="font-semibold text-gray-800 mb-6">Maharishi Mahesh Yogi</p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-100 transition-colors">
                <Facebook className="h-5 w-5 text-gray-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-100 transition-colors">
                <Instagram className="h-5 w-5 text-gray-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-100 transition-colors">
                <Youtube className="h-5 w-5 text-gray-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-100 transition-colors">
                <Linkedin className="h-5 w-5 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-500">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">▷ About Ayurveda</a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">▷ Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">▷ Facilities</a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">▷ Gallery</a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">▷ Press Media</a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">▷ Knowledge Centre</a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">▷ Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">▷ Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">▷ Blog</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-500">Opening Hours</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">OPD Timings</h5>
                <p className="text-gray-600">Monday to Saturday - 10 AM - 8 PM</p>
                <p className="text-gray-600">Sunday - 10 AM - 5 PM</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Pharmacy Timings</h5>
                <p className="text-gray-600">Monday to Sunday - 8 AM - 8 PM</p>
                <p className="text-gray-600">Sunday - 10 AM - 5 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-500">Contact Details</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-1">📍</span>
                <div>
                  <p className="font-semibold text-gray-800">BP - Block, Shalimar Bagh (West)</p>
                  <p className="text-gray-600">Delhi - 110088 India</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-600">📞</span>
                <p className="text-gray-600">+91-9310866852</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-1">✉️</span>
                <div>
                  <p className="text-gray-600">info@mahospital.org</p>
                  <p className="text-gray-600">reservations@mahospital.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gradient-to-r from-yellow-700 to-orange-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 text-center">
            <p className="text-white">
              Copyright 2025, Maharishi Ayurveda Hospital. All Rights Reserved. Powered by CIN Universe.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;