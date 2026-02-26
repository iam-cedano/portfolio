import React from 'react';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.p1.title'),
      description: t('projects.p1.desc'),
      tags: ["PHP"],
      link: "https://github.com/iam-cedano"
    },
    {
      title: t('projects.p2.title'),
      description: t('projects.p2.desc'),
      tags: ["TypeScript"],
      link: "https://github.com/iam-cedano"
    },
    {
      title: t('projects.p3.title'),
      description: t('projects.p3.desc'),
      tags: ["TypeScript"],
      link: "https://github.com/iam-cedano"
    }
  ];

  return (
    <section id="projects" className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <h3 className="text-xl font-bold text-slate-800 mb-4">{project.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{project.description}</p>
              <div className="mb-6">
                {project.tags.map(tag => (
                   <span key={tag} className="bg-gray-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-sm">
                     {tag}
                   </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                {t('projects.viewGitHub')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
