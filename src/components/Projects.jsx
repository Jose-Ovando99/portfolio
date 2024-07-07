import React from 'react';
import { useLanguage } from './LanguageContext';
import textos from '../constants/textos';
import { IconAppWindow, IconCode } from '@tabler/icons-react'
import moritaCover from '../assets/moritaCover.jpg';


function Projects() {
  const { idioma } = useLanguage();
  const { pagina, codigo, trabajoMorita } = textos[idioma];

  const CONTENEDOR = 'font-nunito text-slate-900 bg-slate-200 flex flex-col md:flex-row px-12 text-center justify-center pb-20';

  return (

    <div className={`${CONTENEDOR}`}>
      <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl -mt-40 bg-slate-200 p-8">
        <p className='font-extrabold text-2xl'>Morita Nails Studio</p>
        <img className='w-32 rounded-full m-3' src={moritaCover} />
        <p className='text-justify'>{trabajoMorita}</p>
        {/* Enlaces */}
        <div className='flex flex-row justify-between items-center mt-4'>
          <button className='bg-[#6ACFC7] border rounded-xl flex justify-center items-center m-2 w-1/2 leading-none h-10 font-semibold'>
            <IconAppWindow size={34} />
            <a href='https://google.com' target='_blank'>{pagina}</a>
          </button>
          <button className='bg-[#6ACFC7] border rounded-xl flex justify-center items-center m-2 w-1/2 leading-none h-10 font-semibold'>
            <IconCode size={34} />
            <a href='https://github.com' target='_blank'>{codigo}</a>
          </button>
        </div>
      </div>

    </div>
  );
}

export default Projects;