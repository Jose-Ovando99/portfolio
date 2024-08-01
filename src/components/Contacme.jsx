import { useLanguage } from './LanguageContext';
import textos from '../constants/textos';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import contacme from '../assets/contacme.png';
import ContactForm from './ContacForm';

function Contacme() {

  const { idioma } = useLanguage();
  const { interes, interesTexto, footer } = textos[idioma];

  return (
    <div className="font-nunito bg-sky-900 text-slate-900  px-12 p-2 flex justify-center items-center flex-col dark:bg-slate-950">
      <div className='flex flex-col justify-center items-center border-2 border-gray-500 dark:border-slate-200 rounded-xl bg-slate-900 p-8 -mt-20 md:w-4/5 max-w-[760px] text-center'>
        <div className='flex flex-col justify-center items-center px-8'>
          <img src={contacme} className='w-40 md:w-3/12 object-center object-cover' />
          <p className='font-extrabold text-2xl text-slate-200'>{interes}</p>
        </div>
      <ContactForm />
        <p className='text-slate-200 text-center my-1 font-semibold md:w-1/3'>{interesTexto}</p>
      </div>

      {/* Footer */}
      <div className='flex flex-col justify-center items-center my-5 text-slate-100 text-lg pb-5'>
        <div className='flex flex-row'>
          <button className='m-4'>
            <a href='https://github.com/Jose-Ovando99' target='_blank'><IconBrandGithub size={40} /></a>
          </button>
          <button className='m-4'>
            <a href='https://www.linkedin.com/in/jose-ovando-83a25b303/' target='_blank'><IconBrandLinkedin size={40} /></a>
          </button>
        </div>
        <p className='text-center'>{footer}(2024) &#169;</p>
      </div>
    </div>
  )
};

export default Contacme;