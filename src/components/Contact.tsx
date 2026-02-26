import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-[#1e2330] text-white py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
      <p className="text-lg text-gray-300 mb-10">{t('contact.desc')}</p>
      <div className="flex justify-center gap-6">
        <a href="https://www.linkedin.com/in/oscarced/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors">
          LinkedIn
        </a>
        <a href="https://github.com/iam-cedano" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
