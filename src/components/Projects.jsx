import React from 'react';
import CardProject from './CardProject';

//Importacion de imagenes para utilizar en el componente
import moritaCover from '../assets/moritaCover.jpg';
import pokedexCover from '../assets/pokedexAPICover.png';


function Projects() {

  return (
    <div className='font-nunito text-slate-900 bg-slate-200 flex flex-col md:flex-row px-12 text-center justify-center items-center pb-24 dark:bg-slate-900 flex-wrap'>
      <CardProject 
      title='Pokedex + pokeAPI'
      imageURL={pokedexCover}
      textAbout='trabajoPokedex'
      page='https://jose-ovando99.github.io/pokedex-react/'
      code='https://github.com/Jose-Ovando99/pokedex-react'
      classAdd='-mt-40'
      />
      
      <CardProject 
      title='Morita Nail Studio'
      imageURL={moritaCover}
      textAbout='trabajoMorita'
      page='https://google.com'
      code='https://github.com'
      classAdd='-mt-4 md:-mt-40'
      />
    </div>
  );
}

export default Projects;