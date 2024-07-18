import { useLanguage } from './LanguageContext';
import textos from '../constants/textos';
import { IconMail, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

function Contacme() {

  const { idioma } = useLanguage();
  const { interes, interesTexto, footer } = textos[idioma];

  return (
    <div className="font-nunito bg-sky-900 text-slate-900  px-12 p-2 flex justify-center items-center flex-col dark:bg-gray-800">
      <div className='flex flex-col justify-center items-center border-2 border-gray-500 dark:border-slate-200 rounded-xl bg-slate-900 p-8 -mt-20 md:max-w-[768px]'>
        <p className='font-extrabold text-2xl mb-4 text-slate-200'>{interes}</p>
        <a href='mailto:ivan.ovando117@gmail.com' className='my-2 text-slate-200 hover:text-amber-600 hover:bg-sky-900 rounded-full hover:ring-2'><IconMail size={50} /></a>
        <p className='text-slate-200 text-center my-1 font-semibold'>{interesTexto}</p>
      </div>
      {/* Footer */}
      <div className='flex flex-col justify-center items-center my-5 text-slate-100 text-lg pb-5'>
        <div className='flex flex-row'>
          <button className='m-4'>
            <a href='https://github.com' target='_blank'><IconBrandGithub size={40} /></a>
          </button>
          <button className='m-4'>
            <a href='https://linkedin.com' target='_blank'><IconBrandLinkedin size={40} /></a>
          </button>
        </div>
        <p className='text-center'>{footer}(2024) &#169;</p>
      </div>
    </div>
  )
};

export default Contacme;