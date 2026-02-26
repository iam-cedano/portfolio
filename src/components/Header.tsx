import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isSpanish = i18n.language === 'es';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white py-4 md:py-6 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative">
        <div className="flex items-center gap-4">
          <h1 className="text-xl md:text-3xl font-bold text-blue-600">Oscar Cedano</h1>
          <div className="hidden md:flex text-sm font-medium items-center">
            <Link
              to="/en"
              className={`cursor-pointer hover:text-blue-600 ${!isSpanish ? 'text-blue-600 font-bold' : 'text-gray-500'}`}
            >
              EN
            </Link>
            <span className="mx-1 text-gray-400">|</span>
            <Link
              to="/es"
              className={`cursor-pointer hover:text-blue-600 ${isSpanish ? 'text-blue-600 font-bold' : 'text-gray-500'}`}
            >
              ES
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium text-lg">
          <a href="#home" className="hover:text-blue-600 transition-colors">{t('nav.home')}</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">{t('nav.skills')}</a>
          <a href="#experience" className="hover:text-blue-600 transition-colors">{t('nav.experience')}</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">{t('nav.projects')}</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">{t('nav.contact')}</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
             {/* Language Switcher for Mobile */}
             <div className="flex text-sm font-medium items-center mr-2">
                <Link
                  to="/en"
                  onClick={closeMenu}
                  className={`cursor-pointer hover:text-blue-600 ${!isSpanish ? 'text-blue-600 font-bold' : 'text-gray-500'}`}
                >
                  EN
                </Link>
                <span className="mx-1 text-gray-400">|</span>
                <Link
                  to="/es"
                  onClick={closeMenu}
                  className={`cursor-pointer hover:text-blue-600 ${isSpanish ? 'text-blue-600 font-bold' : 'text-gray-500'}`}
                >
                  ES
                </Link>
            </div>

            <button
              className="text-gray-700 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100 py-4 px-4 flex flex-col space-y-4">
          <a href="#home" onClick={closeMenu} className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-colors block py-2 border-b border-gray-50">{t('nav.home')}</a>
          <a href="#skills" onClick={closeMenu} className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-colors block py-2 border-b border-gray-50">{t('nav.skills')}</a>
          <a href="#experience" onClick={closeMenu} className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-colors block py-2 border-b border-gray-50">{t('nav.experience')}</a>
          <a href="#projects" onClick={closeMenu} className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-colors block py-2 border-b border-gray-50">{t('nav.projects')}</a>
          <a href="#contact" onClick={closeMenu} className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-colors block py-2">{t('nav.contact')}</a>
        </div>
      )}
    </header>
  );
};

export default Header;
