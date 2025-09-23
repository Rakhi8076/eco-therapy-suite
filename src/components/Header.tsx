import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react'; // 'Menu' aur 'X' icons import kiye
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false); // Dropdown band karein
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Website Name */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="PanchArogya Logo" className="h-12 w-auto" />
            <div>
              <h1 className="text-2xl font-bold" style={{ color: '#AF4F06' }}>
                {t('PanchArogya')}
              </h1>
              <p className="text-sm text-gray-600">{t('HOLISTIC HEALING')}</p>
            </div>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-yellow-600 font-medium">{t('HOME')}</Link>
            <Link to="/about" className="text-gray-700 hover:text-yellow-600 font-medium">{t('ABOUT US')}</Link>
            {/* Language and SIGN UP button desktop */}
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
            <Link to="/login" className="sm:inline-block bg-yellow-600 text-white px-4 py-2 rounded-full font-medium hover:bg-yellow-700 transition-colors">
              {t('SIGN UP')}
            </Link>
          </nav>

        </div>
      </div>

      {/* Mobile Menu (visible on small screens) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-yellow-600 font-medium">{t('HOME')}</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-yellow-600 font-medium">{t('ABOUT US')}</Link>
            <div className="relative w-full text-center">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-center w-full text-gray-700 font-medium"
              >
                {t('LANGUAGE')} <ChevronDown className="ml-1 h-4 w-4 transform transition-transform" />
              </button>
              {dropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                  <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</button>
                  <button onClick={() => changeLanguage('hi')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">हिन्दी</button>
                  <button onClick={() => changeLanguage('bn')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">বাংলা</button>
                  <button onClick={() => changeLanguage('mr')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">मराठी</button>
                  <button onClick={() => changeLanguage('ur')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">اردو</button>
                  <button onClick={() => changeLanguage('ta')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">தமிழ்</button>
                </div>
              )}
            </div>
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="bg-yellow-600 text-white px-4 py-2 rounded-full font-medium hover:bg-yellow-700 transition-colors">
              {t('SIGN UP')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;