import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const isSpanish = i18n.language === 'es';

  return (
    <header className="bg-white py-6 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600">Oscar Cedano</h1>
          <div className="text-sm font-medium">
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
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium text-lg">
          <a href="#home" className="hover:text-blue-600 transition-colors">{t('nav.home')}</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">{t('nav.skills')}</a>
          <a href="#experience" className="hover:text-blue-600 transition-colors">{t('nav.experience')}</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">{t('nav.projects')}</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">{t('nav.contact')}</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
