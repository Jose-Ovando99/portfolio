import React from 'react';
import textos from '../constants/textos';
import { useLanguage } from './LanguageContext';
import moritaCover from '../assets/moritaCover.jpg';


function Cards({ trabajoDe, persona, margin }) {
  const { idioma } = useLanguage();
  const textoTrabajoDe = textos[idioma][trabajoDe];

  return (
    // w-2fr w-6/12 md:769px
    <div className='text-center font-nunito flex flex-col border-2 border-gray-500 bg-slate-200 ${margin} rounded-xl justify-center items-center p-4'>
      <p className='font-extrabold text-2xl'>{persona}</p>
      <img className='w-32 rounded-full m-3' src={moritaCover} />
      <p className='text-justify'>{textoTrabajoDe}</p>
    </div>
  );
}

export default Cards;