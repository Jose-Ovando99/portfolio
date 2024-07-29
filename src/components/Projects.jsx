import React from 'react';
import CardProject from './CardProject';

//Importacion de imagenes para utilizar en el componente
import moritaCover from '../assets/moritaCover.jpg';


function Projects() {

  return (
    <div className='font-nunito text-slate-900 bg-slate-200 flex flex-col md:flex-row px-12 text-center justify-center pb-24 dark:bg-slate-900'>
      <CardProject 
      title='Morita Nail Studio'
      imageURL={moritaCover}
      textAbout='trabajoMorita'
      page='https://google.com'
      code='https://github.com'
      classAdd='-mt-11 md:-mt-40'
      />
    </div>
  );
}

export default Projects;