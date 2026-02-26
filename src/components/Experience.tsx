import React from 'react';

const experiences = [
  {
    title: "Desarrollador PHP",
    company: "GRUPO STI",
    details: "Medio tiempo • Mar 2025 - Presente • Mazatlán, SIN",
    description: "Como ex desarrollador de software, he estado en muchos proyectos, desde sistemas de compras hasta sistemas de facturación.",
    tags: ["PHP", "jQuery"],
  },
  {
    title: "Desarrollador PHP",
    company: "GRUPO STI",
    details: "Prácticas • Nov 2024 - Feb 2025 • Sinaloa, México",
    description: "En estas prácticas tuve la oportunidad de desarrollar soluciones para una empresa local de exportación marítima lo que me permitió familiarizarme con herramientas como Jira, Slack y Git.",
    tags: ["PHP", "jQuery"],
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Experiencia</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-blue-600">
               <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                 <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                 <span className="text-blue-600 font-bold text-sm md:text-base mt-1 md:mt-0">{exp.company}</span>
               </div>
               <p className="text-sm text-gray-400 mb-4 font-medium">{exp.details}</p>
               <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>
               <div className="flex gap-2">
                 {exp.tags.map(tag => (
                   <span key={tag} className="bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-1 rounded-full">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
