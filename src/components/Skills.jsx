import React from 'react';
import textos from '../constants/textos';
import { useLanguage } from './LanguageContext';

function Skills() {
  const { idioma } = useLanguage();
  const { diseniador, diseniadorTexto, frontEnd, frontEndTexto, herramientasDiseniador, herramientasDesarrollador,lapizYPapel } = textos[idioma];

  return (
    <div className="text-2xl font-nunito text-slate-900 bg-slate-200 flex flex-col md:flex-row px-12 text-center justify-center pb-20">
      <div className='border-2 rounded-xl rounded-b-none border-gray-500 bg-slate-200 -mt-40 p-8 md:rounded-xl'>
        <p className='font-extrabold text-[#0C1A1A]'>{diseniador}</p>
        <p className='font-semibold py-5'>{diseniadorTexto}</p>
        <p className='py-5'>{herramientasDiseniador}</p>
        <ul>
          <li>Figma</li>
          <li>Sketch</li>
          <li>{lapizYPapel}</li>
        </ul>
      </div>
      <div className='border-2 rounded-xl rounded-t-none border-gray-500 bg-slate-200 -mt-1 md:-mt-40 md:rounded-xl p-8'>
        <p className='font-extrabold text=[#0C1A1A]'>{frontEnd}</p>
        <p className='font-semibold py-5'>{frontEndTexto}</p>
        <p className='py-5'>{herramientasDesarrollador}</p>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Git</li>
          <li>Node.js</li>
          <li>ReactJS</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
          <li>Github</li>
          <li>VS Code</li>
        </ol>
      </div>
    </div>
  );
}

export default Skills;