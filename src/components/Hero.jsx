import { useState, React } from 'react';
import pruebaUno from '../assets/pruebaUno.jpg';
import pruebaDos from '../assets/pruebaDos.png';

function Hero() {

  const [fotoPerfil, setFotoPerfil] = useState(pruebaUno)

  let cambiarFoto = () => {
    (fotoPerfil == pruebaUno) ? setFotoPerfil(pruebaDos) : setFotoPerfil(pruebaUno);
  };

  return (
    <div className='flex justify-center items-center flex-col md:flex-row-reverse bg-slate-300'>
      <div className='text-center font-mono text-3xl justify-center items-center'>
        <p>Hola, soy <span className='font-semibold'>Ivan Ovando</span><br />
        Desarrollador Front-end</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img className='rounded-full w-[280px] h-[280px] object-center object-cover'
          src={fotoPerfil} alt='Img de prueba' onClick={() => cambiarFoto()} />
        <p className='font-mono text-lg'>Hazme click!</p>
      </div>
    </div>
  );
}

export default Hero;
