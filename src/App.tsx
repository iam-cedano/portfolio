import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { lang } = useParams<{ lang?: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Determine target language:
    // If param is 'es', use 'es'.
    // If param is 'en' or undefined (root), use 'en'.
    const targetLang = lang === 'es' ? 'es' : 'en';

    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
    }
  }, [lang, i18n]);

  // If lang is present but not valid (not 'en' or 'es'), redirect to 'en'.
  // We allow undefined (root).
  if (lang && lang !== 'en' && lang !== 'es') {
     return <Navigate to="/en" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
