import { useState, React, useRef, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import textos from '../constants/textos';
import anime from 'animejs';
import fotoUno from '../assets/retratoPixel.png';
import pruebaDos from '../assets/pruebaDos.png';
import imgHero from '../assets/imgHero.png';

function Hero() {
  const { idioma } = useLanguage();
  const { saludo, puesto, click } = textos[idioma];

  const clickMeRef = useRef(null);
  const [fotoPerfil, setFotoPerfil] = useState(fotoUno);

  let cambiarFoto = () => {
    (fotoPerfil == fotoUno) ? setFotoPerfil(pruebaDos) : setFotoPerfil(fotoUno);
  };

  useEffect(() => {
    const animacion = anime({
      targets: clickMeRef.current,
      translateX: [-10, 10],
      direction: 'alternate',
      loop: true,
      easing: 'linear',
      duration: 400
    });
  }, []);



  return (
    <div className='flex justify-center items-center flex-col pt-20 bg-slate-200 text-slate-900 w-auto dark:bg-slate-900 dark:text-slate-200'>
      <div className='text-center font-nunito text-3xl flex flex-col justify-center items-center'>
        <p className='px-8'>{saludo}<span className='font-bold'>Ivan Ovando</span><br /></p>
        <p className='text-xl px-8 py-4 my-4 md:w-2/3'>{puesto}</p>
      </div>
      <div className='flex flex-col justify-center items-center px-8 py-10'>
        <img className='rounded-full w-[240px] h-[240px] object-center object-cover'
          src={fotoPerfil} alt='Este soy yo! :D' onClick={() => cambiarFoto()} />
        <p className='font-mono text-lg' ref={clickMeRef}>{click}</p>
      </div>
      <img src={imgHero} className='w-full max-w-[768px] object-center object-cover pt-10 px-8' />
    </div>
  );
}

export default Hero;
