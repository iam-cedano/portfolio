import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLaravel, FaReact, FaWordpress, FaPython } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="bg-[#1e2330] text-white py-32 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('greeting')}</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-10">{t('role')}</h2>
      <div className="flex gap-6 justify-center">
        <FaLaravel className="text-5xl text-[#F05340]" title="Laravel" />
        <FaReact className="text-5xl text-[#61DAFB]" title="React" />
        <SiTypescript className="text-5xl text-[#3178C6]" title="TypeScript" />
        <FaWordpress className="text-5xl text-[#444]" title="WordPress" />
        <FaPython className="text-5xl text-[#FFD43B]" title="Python" />
      </div>
    </section>
  );
};

export default Hero;
