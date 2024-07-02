import React from 'react';
import textos from '../constants/textos';
import { useLanguage } from './LanguageContext';


function Cards({ trabajoDe }) {
  const { idioma } = useLanguage();
  const textoTrabajoDe = textos[idioma][trabajoDe];

  return (
    <div className='bg-[#6acfc7] w-9/12'>
      <p>{textoTrabajoDe}</p>
    </div>
  );
}

export default Cards;