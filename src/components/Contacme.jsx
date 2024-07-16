import { useLanguage } from './LanguageContext';
import textos from '../constants/textos';
import { IconMail, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

function Contacme() {

  const { idioma } = useLanguage();
  const { interes, interesTexto } = textos[idioma];

  return (
    <div className="font-nunito text-slate-900 bg-[#0C1A1A] px-12 p-2 flex justify-center items-center flex-col">
      <div className='flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl  bg-[#6ACFC7] p-8 -mt-20 md:max-w-[768px]'>
        <p className='font-extrabold text-2xl mb-4'>{interes}</p>
        <a href='mailto:ivan.ovando117@gmail.com' className='my-2 hover:ring-slate-800 hover:text-slate-200'><IconMail size={50} /></a>
        <p className='text-center my-1 font-semibold'>{interesTexto}</p>
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
        <p className='text-center'>Todos los derechos reservados INTRODUCIR TRADUCCION</p>
      </div>
    </div>
  )
};

export default Contacme;