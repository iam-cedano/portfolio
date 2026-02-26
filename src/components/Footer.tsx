import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#1e2330] text-gray-500 py-8 text-center text-sm border-t border-gray-800">
      <p>{t('footer.rights')}</p>
    </footer>
  );
};

export default Footer;
