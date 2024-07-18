import React from 'react';
import textos from '../constants/textos';
import { useLanguage } from './LanguageContext';

function AboutMe() {
    const { idioma } = useLanguage();
    const { saludoHero, textoSobreMi } = textos[idioma];

  return (
    <div className="bg-sky-900 font-nunito font-semibold text-center pb-56 w-full dark:bg-gray-800">
      <p className='text-amber-600 text-3xl font-extrabold p-9'>{saludoHero}</p>
      <p className='text-slate-200 text-lg px-10 md:px-28 2xl:px-36  dark:text-slate-200'>{textoSobreMi}</p>
    </div>
  );
}

export default AboutMe;