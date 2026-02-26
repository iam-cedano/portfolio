import React from 'react';
import { useTranslation } from 'react-i18next';

const skills = [
  "Laravel", "React", "TypeScript", "WordPress", "Python"
];

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="bg-white py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">{t('skills.title')}</h2>
      <div className="flex flex-wrap justify-center gap-6 px-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <span key={skill} className="bg-gray-100 text-slate-700 px-8 py-3 rounded-full font-semibold text-lg shadow-sm hover:shadow-md transition-shadow cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
