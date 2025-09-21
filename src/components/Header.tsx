import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false); // Close dropdown after selecting
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Website Name */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="PanchArogya Logo" className="h-12 w-auto" />
            <div>
              <h1 className="text-2xl font-bold text-green-700">{t('PanchArogya')}</h1>
              <p className="text-sm text-gray-600">{t('HOLISTIC HEALING')}</p>
            </div>
          </div>

          {/* Right side navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-yellow-600 font-medium">{t('HOME')}</Link>
            <Link to="/about" className="text-gray-700 hover:text-yellow-600 font-medium">{t('ABOUT US')}</Link>

            {/* Language Dropdown (Click-based) */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-gray-700 font-medium"
              >
                {t('LANGUAGE')} <ChevronDown className="ml-1 h-4 w-4 transform transition-transform" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                  <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</button>
                  <button onClick={() => changeLanguage('hi')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">हिन्दी</button>
                  <button onClick={() => changeLanguage('bn')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">বাংলা</button>
                  <button onClick={() => changeLanguage('mr')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">मराठी</button>
                  <button onClick={() => changeLanguage('ur')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">اردو</button>
                  <button onClick={() => changeLanguage('ta')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">தமிழ்</button>
                </div>
              )}
            </div>

            <Link to="/login" className="hidden sm:inline-block bg-yellow-600 text-white px-4 py-2 rounded-full font-medium hover:bg-yellow-700 transition-colors">
              {t('SIGN UP')}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
