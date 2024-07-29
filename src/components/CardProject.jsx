// Hacer para reutilizar en projects.jscx
import React from 'react';
import { useLanguage } from './LanguageContext';
import textos from '../constants/textos';
import { IconAppWindow, IconCode } from '@tabler/icons-react';

function CardProject({ title, imageURL, textAbout, page, code, classAdd }) {
  const { idioma } = useLanguage();
  const { pagina, codigo } = textos[idioma]
  const textoSobre = textos[idioma][textAbout];

  return (
    <article className={`flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl bg-slate-200 px-16 py-8 mb-10 md:w-2/5 dark:bg-slate-900 dark:border-slate-200 ${classAdd}`}>
      <p className='font-extrabold text-2xl dark:text-slate-200'>
        {title}
      </p>
      {/* ruta require node react.js */}
      <img className='w-36 rounded-full m-3' 
      src={imageURL} alt={`Imagen de ${title}`} />
      <p className='text-justify dark:text-slate-200' >
        {textoSobre}
      </p>
      {/* Enlaces */}
      <div className="flex flex-row justify-between items-center mt-4">
        <button className='bg-sky-900 text-amber-600 border rounded-xl flex justify-center items-center m-2 w-1/2 leading-none h-10 font-semibold p-2'>
          <IconAppWindow size={34} />
          <a href={page} target='_blank'>{pagina}</a>
        </button>
        <button className='bg-sky-900 text-amber-600 border rounded-xl flex justify-center items-center m-2 w-1/2 leading-none h-10 font-semibold p-2'>
          <IconCode size={34} />
          <a href={code} target='_blank'>{codigo}</a>
        </button>
      </div>
    </article>
  )
}

export default CardProject;
