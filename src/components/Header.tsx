import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-6 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600">Oscar Cedano</h1>
          <div className="text-sm font-medium">
            <span className="text-gray-500 cursor-pointer hover:text-blue-600">EN</span>
            <span className="mx-1 text-gray-400">|</span>
            <span className="text-blue-600 cursor-pointer">ES</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium text-lg">
          <a href="#home" className="hover:text-blue-600 transition-colors">Inicio</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Habilidades</a>
          <a href="#experience" className="hover:text-blue-600 transition-colors">Experiencia</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Proyectos</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
