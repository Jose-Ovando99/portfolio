import React from 'react';
import textos from '../constants/textos';
import { useLanguage } from './LanguageContext';
import { IconBrandFigma, IconBrandSketch, IconFilePencil, IconBrandHtml5, IconBrandCss3, IconBrandJavascript, IconBrandPython, IconBrandGit, IconBrandNodejs, IconBrandReact, IconBrandTailwind, IconBrandBootstrap, IconBrandGithub, IconBrandVscode } from '@tabler/icons-react';
import diseniadorimg from '../assets/personajeFigma.gif';
import frontimg from '../assets/personajeJS.gif';

function Skills() {
  const { idioma } = useLanguage();
  const { diseniador, diseniadorTexto, frontEnd, frontEndTexto, herramientasDiseniador, herramientasDesarrollador,lapizYPapel } = textos[idioma];

  return (
    <div className="text-2xl font-nunito text-slate-900 bg-slate-200 flex flex-col md:flex-row px-12 text-center justify-center pb-20 dark:bg-slate-900 select-none">
      <div className='border-2 md:border-r rounded-xl rounded-b-none border-gray-500 bg-slate-200 -mt-40 p-8 md:rounded-xl md:w-2/5 dark:border-slate-200 dark:bg-slate-900 dark:text-slate-200 flex items-center flex-col'>
        <img src={diseniadorimg} className='w-2/3 max-w-52' />
        <p className='font-extrabold text-amber-600'>{diseniador}</p>
        <p className='font-semibold py-5'>{diseniadorTexto}</p>
        <p className='py-5'>{herramientasDiseniador}</p>
        <ul className='list-none'>
          <li className='flex items-center justify-center my-2'><IconBrandFigma />Figma</li>
          <li className='flex items-center justify-center my-2'><IconBrandSketch />Sketch</li>
          <li className='flex items-center justify-center my-2'><IconFilePencil />{lapizYPapel}</li>
        </ul>
      </div>
      <div className='border-2 md:border-l rounded-xl rounded-t-none border-gray-500 bg-slate-200 -mt-1 md:-mt-40 md:rounded-xl p-8 md:w-2/5 dark:border-slate-200 dark:bg-slate-900 dark:text-slate-200 flex items-center flex-col'>
        <img src={frontimg} className='w-2/3 max-w-52' />
        <p className='font-extrabold text-amber-600'>{frontEnd}</p>
        <p className='font-semibold py-5'>{frontEndTexto}</p>
        <p className='py-5'>{herramientasDesarrollador}</p>
        <ul className='list-none'>
          <li className='flex items-center justify-center my-2'><IconBrandHtml5 />HTML</li>
          <li className='flex items-center justify-center my-2'><IconBrandCss3 />CSS</li>
          <li className='flex items-center justify-center my-2'><IconBrandJavascript />JavaScript</li>
          <li className='flex items-center justify-center my-2'><IconBrandPython />Python</li>
          <li className='flex items-center justify-center my-2'><IconBrandGit />Git</li>
          <li className='flex items-center justify-center my-2'><IconBrandNodejs />Node.js</li>
          <li className='flex items-center justify-center my-2'><IconBrandReact />ReactJS</li>
          <li className='flex items-center justify-center my-2'><IconBrandTailwind />Tailwind</li>
          <li className='flex items-center justify-center my-2'><IconBrandBootstrap />Bootstrap</li>
          <li className='flex items-center justify-center my-2'><IconBrandGithub />Github</li>
          <li className='flex items-center justify-center my-2'><IconBrandVscode />VS Code</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;