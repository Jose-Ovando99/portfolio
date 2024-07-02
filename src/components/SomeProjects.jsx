import React from 'react';
import textos from '../constants/textos';
import { useLanguage } from './LanguageContext';
import Cards from './Cards';

function SomeProjects() {
  const { idioma } = useLanguage();
  const { trabajos, trabajosTexto } = textos[idioma];


  return (
    <div className="font-nunito font-semibold text-center bg-[#0C1A1A] pb-48 w-full">
      <p className='text-3xl text-[#6ACFC7] font-bold p-9'>{trabajos}</p>
      <p className='text-slate-200 text-lg px-10'>{trabajosTexto}</p>
      {/* Poner los enlaces a github o crear un componente externo para reutilizar*/}
      <div className='bg-slate-300 justify-center items-center flex flex-col'>
        <Cards trabajoDe={'trabajoMorita'} persona='Morita' />
      </div>
    </div>
  );
}

export default SomeProjects;