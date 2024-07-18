import React from 'react';
import textos from '../constants/textos';
import { useLanguage } from './LanguageContext';


function SomeProjects() {
  const { idioma } = useLanguage();
  const { trabajos, trabajosTexto } = textos[idioma];


  return (
    <div className="bg-sky-900 font-nunito font-semibold text-center pb-56 w-full dark:bg-gray-800">
      <p className='text-amber-600 text-3xl font-bold p-9'>{trabajos}</p>
      <p className='text-slate-200 text-lg px-10'>{trabajosTexto}</p>
    </div>
  );
}

export default SomeProjects;