import React from 'react';
import { useLanguage } from './LanguageContext';
import textos from '../constants/textos';
import { IconAppWindow, IconCode } from '@tabler/icons-react'
import moritaCover from '../assets/moritaCover.jpg';


function Projects() {
  const { idioma } = useLanguage();
  const { pagina, codigo, trabajoMorita } = textos[idioma];

  return (
    <div className='font-nunito text-slate-900 bg-slate-200 flex flex-col md:flex-row px-12 text-center justify-center pb-24 dark:bg-slate-900'>
      {/* movi el margin bottom para dar mas espacio en blanco el componente reutilizable debe ir aqui!!aqui empieza el componente*/}
      <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl -mt-40 bg-slate-200 py-8 px-16 mb-10 md:w-2/5 md:mx-4 dark:border-slate-200 dark:bg-slate-900">
        <p className='font-extrabold text-2xl dark:text-slate-200'>Morita Nail Studio</p>
        <img className='w-36 rounded-full m-3' src={moritaCover} />
        <p className='text-justify dark:text-slate-200'>{trabajoMorita}</p>
        {/* Enlaces */}
        <div className='flex flex-row justify-between items-center mt-4'>
          <button className='bg-sky-900 text-amber-600 border rounded-xl flex justify-center items-center m-2 w-1/2 leading-none h-10 font-semibold p-2'>
            <IconAppWindow size={34} />
            <a href='https://google.com' target='_blank'>{pagina}</a>
          </button>
          <button className='bg-sky-900 text-amber-600 border rounded-xl flex justify-center items-center m-2 w-1/2 leading-none h-10 font-semibold p-2'>
            <IconCode size={34} />
            <a href='https://github.com' target='_blank'>{codigo}</a>
          </button>
        </div>
        {/* Aqui termina el componente */}
      </div>

    </div>
  );
}

export default Projects;