import React from 'react';
import textos from '../constants/textos';
import { useLanguage } from './LanguageContext';

function SomeProjects() {
  const { idioma } = useLanguage();
  const { trabajos, trabajosTexto } = textos[idioma];

  return (
    <div className="text-2xl text-slate-900 bg-[#FDDE55]">
      <p>{trabajos}</p>
      <p>{trabajosTexto}</p>
      {/* Poner los enlaces a github o crear un componente externo para reutilizar*/}
    </div>
  );
}

export default SomeProjects;