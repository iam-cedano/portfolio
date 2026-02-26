import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      "greeting": "Hi, I'm Oscar Cedano",
      "role": "FullStack Developer",
      "nav": {
        "home": "Home",
        "skills": "Skills",
        "experience": "Experience",
        "projects": "Projects",
        "contact": "Contact"
      },
      "skills": {
        "title": "Skills"
      },
      "experience": {
        "title": "Experience",
        "role1": "PHP Developer",
        "company1": "GRUPO STI",
        "details1": "Part time • Mar 2025 - Present • Mazatlán, SIN",
        "desc1": "As a former software developer, I have been involved in many projects, ranging from purchasing systems to invoicing systems.",
        "role2": "PHP Developer",
        "company2": "GRUPO STI",
        "details2": "Internship • Nov 2024 - Feb 2025 • Sinaloa, Mexico",
        "desc2": "During this internship, I had the opportunity to develop solutions for a local maritime export company, which allowed me to familiarize myself with tools like Jira, Slack, and Git."
      },
      "projects": {
        "title": "Projects",
        "p1": {
          "title": "DigiStock",
          "desc": "Specialized platform that helps companies keep control over their stock."
        },
        "p2": {
          "title": "WhatsCRM",
          "desc": "A Chrome extension for WhatsApp to schedule messages, manage templates, and auto-respond to clients."
        },
        "p3": {
          "title": "Fraudebot",
          "desc": "A web application where users can consult information about online sellers to avoid scams."
        },
        "viewGitHub": "View on GitHub"
      },
      "contact": {
        "title": "Contact Me",
        "desc": "Feel free to contact me on LinkedIn or GitHub."
      },
      "footer": {
        "rights": "© 2026 Oscar Cedano. All rights reserved."
      }
    }
  },
  es: {
    translation: {
      "greeting": "Hola, soy Oscar Cedano",
      "role": "Desarrollador FullStack",
      "nav": {
        "home": "Inicio",
        "skills": "Habilidades",
        "experience": "Experiencia",
        "projects": "Proyectos",
        "contact": "Contacto"
      },
      "skills": {
        "title": "Habilidades"
      },
      "experience": {
        "title": "Experiencia",
        "role1": "Desarrollador PHP",
        "company1": "GRUPO STI",
        "details1": "Medio tiempo • Mar 2025 - Presente • Mazatlán, SIN",
        "desc1": "Como ex desarrollador de software, he estado en muchos proyectos, desde sistemas de compras hasta sistemas de facturación.",
        "role2": "Desarrollador PHP",
        "company2": "GRUPO STI",
        "details2": "Prácticas • Nov 2024 - Feb 2025 • Sinaloa, México",
        "desc2": "En estas prácticas tuve la oportunidad de desarrollar soluciones para una empresa local de exportación marítima lo que me permitió familiarizarme con herramientas como Jira, Slack y Git."
      },
      "projects": {
        "title": "Proyectos",
        "p1": {
          "title": "DigiStock",
          "desc": "Plataforma especializada que ayuda a las empresas a tener control sobre su stock."
        },
        "p2": {
          "title": "WhatsCRM",
          "desc": "Una extensión de Chrome para WhatsApp para programar mensajes, gestionar plantillas y auto-responder a clientes."
        },
        "p3": {
          "title": "Fraudebot",
          "desc": "Una aplicación web donde los usuarios pueden consultar información sobre vendedores en línea para evitar estafas"
        },
        "viewGitHub": "Ver en GitHub"
      },
      "contact": {
        "title": "Contáctame",
        "desc": "No dudes en contactarme en LinkedIn o GitHub."
      },
      "footer": {
        "rights": "© 2026 Oscar Cedano. Todos los derechos reservados."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
