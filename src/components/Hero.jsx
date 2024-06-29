import { useState, React } from 'react';
import { useLanguage } from './LanguageContext';
import textos from '../constants/textos';
import pruebaUno from '../assets/pruebaUno.jpg';
import pruebaDos from '../assets/pruebaDos.png';

function Hero() {

  const { idioma } = useLanguage();
  const { saludo, puesto, click } = textos[idioma];

  const [fotoPerfil, setFotoPerfil] = useState(pruebaUno)

  let cambiarFoto = () => {
    (fotoPerfil == pruebaUno) ? setFotoPerfil(pruebaDos) : setFotoPerfil(pruebaUno);
  };

  return (
    <div className='flex justify-center items-center flex-col md:flex-row-reverse pt-20 bg-slate-200 text-slate-900 w-auto'>
      <div className='text-center font-nunito text-3xl justify-center items-center'>
        <p className='px-8'>{saludo}<span className='font-bold'>Ivan Ovando</span><br /></p>
        <p className='text-xl px-8 py-4'>{puesto}</p>
      </div>
      <div className='flex flex-col justify-center items-center px-8 py-10'>
        <img className='rounded-full w-[240px] h-[240px] object-center object-cover'
          src={fotoPerfil} alt='Este soy yo! :D' onClick={() => cambiarFoto()} />
        <p className='font-mono text-lg'>{click}</p>
      </div>
      {/* Agregar imagen sobre codigo */}
    </div>
  );
}

export default Hero;
