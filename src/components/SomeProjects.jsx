import React from 'react';
import textos from '../constants/textos';
import { useLanguage } from './LanguageContext';


function SomeProjects() {
  const { idioma } = useLanguage();
  const { trabajos, trabajosTexto } = textos[idioma];


  return (
    <div className="font-nunito font-semibold text-center bg-[#0C1A1A] pb-56 w-full">
      <p className='text-3xl text-[#6ACFC7] font-bold p-9'>{trabajos}</p>
      <p className='text-slate-100 text-lg px-10'>{trabajosTexto}</p>
    </div>
  );
}

export default SomeProjects;