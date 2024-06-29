import React from 'react';
import textos from '../constants/textos';
import { useLanguage } from './LanguageContext';

function AboutMe() {
    const { idioma } = useLanguage();
    const { saludoHero, textoSobreMi } = textos[idioma];

  return (
    <div className="font-nunito font-semibold text-center bg-[#0C1A1A] pb-56 w-full">
      <p className='text-3xl text-[#6ACFC7] font-bold p-9'>{saludoHero}</p>
      <p className='text-slate-100 text-lg px-10'>{textoSobreMi}</p>
    </div>
  );
}

export default AboutMe;