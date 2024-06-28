import React from 'react';
import textos from '../constants/textos';
import { useLanguage } from './LanguageContext';

function AboutMe() {
    const { idioma } = useLanguage();
    const { saludoHero, textoSobreMi } = textos[idioma];

  return (
    <div className="text-2xl text-slate-900 bg-[#FDDE55]">
      <p>{saludoHero}</p>
      <p>{textoSobreMi}</p>
    </div>
  );
}

export default AboutMe;