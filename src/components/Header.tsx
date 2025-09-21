import React from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-700 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">MAHARISHI</h1>
                <p className="text-sm text-gray-600">AYURVEDA HOSPITAL</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">HOME</a>
            <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">ABOUT US</a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-yellow-600 font-medium">
                SERVICES
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">OUR DOCTORS</a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-yellow-600 font-medium">
                WHAT WE TREAT? (TREATMENT)
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">CONTACT US</a>
          </nav>

          {/* Right side logos */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
            </div>
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;