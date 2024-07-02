import React from 'react';
import textos from '../constants/textos';
import { useLanguage } from './LanguageContext';


function Cards({ trabajoDe, persona }) {
  const { idioma } = useLanguage();
  const textoTrabajoDe = textos[idioma][trabajoDe];

  return (
    // w-2fr w-6/12 md:769px
    <div className='bg-[#6acfc7] text-center font-nunito w-9/12'>
      <p className=''>{persona}</p>
      <p>{textoTrabajoDe}</p>
    </div>
  );
}

export default Cards;