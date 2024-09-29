import { useState } from "react";
import textos from "../constants/textos";
import { useLanguage } from "./LanguageContext";
import BotonProyecto from "./BotonProyecto";
import easy from "../assets/easy.png";
import normal from "../assets/normal.png";
import hard from "../assets/hard.png";
import boo from "../assets/proyectosImg/boo.png";
import cal from "../assets/proyectosImg/cal.png";
import cit from "../assets/proyectosImg/cit.png";
import cro from "../assets/proyectosImg/cro.png";
import tai from "../assets/proyectosImg/tai.png";
import tdj from "../assets/proyectosImg/tdj.png";
import tdr from "../assets/proyectosImg/tdr.png";

function MoreProjects() {
  const { idioma } = useLanguage();
  const { masProyectos, dificultad, tecnologias, proCro, proCit, proTai, proBoo, proTdj, proTdr, proCal } = textos[idioma];

  const [proyectoRef, setProyectoRef] = useState("Cro");
  const [dificultadImg, setDificultadImg] = useState(normal);
  const [proyectoImg, setProyectoImg] = useState(cro);

  let infoProyecto = {
    proyectoNombre: textos[idioma][`pro${proyectoRef}`],
    proyectoDescripcion: textos[idioma][`pro${proyectoRef}Des`],
    proyectoDemo: textos[idioma][`pro${proyectoRef}Demo`],
    proyectoTecnologias: textos[idioma][`pro${proyectoRef}Tec`]
  };


  const mostrarProyecto = (referencia) => {
    setProyectoRef(referencia)
  }

  const mostrarImgProyecto = (imgPath) => {
    setProyectoImg(imgPath)
  }

  const mostrarDificultad = (dificultad) => {
    setDificultadImg(dificultad)
  }



  return (

    <section className="pb-40 -mt-20 font-nunito text-slate-900 bg-slate-200 dark:bg-slate-900 dark:text-slate-200 px-12 flex flex-col">
      <p className="text-center font-extrabold text-2xl mx-8">{masProyectos}</p>
      <div className="flex flex-row flex-wrap justify-center items-center gap-2 font-bold my-4">
        {/* botones */}
        <BotonProyecto handleCLick={mostrarProyecto} proyectoInfo="Cro" proyectoTitulo={proCro} handleDif={mostrarDificultad} proyectoDif={normal} handleImg={mostrarImgProyecto} imgPro={cro} />
        <BotonProyecto handleCLick={mostrarProyecto} proyectoInfo="Cit" proyectoTitulo={proCit} handleDif={mostrarDificultad} proyectoDif={easy} handleImg={mostrarImgProyecto} imgPro={cit} />
        <BotonProyecto handleCLick={mostrarProyecto} proyectoInfo="Tai" proyectoTitulo={proTai} handleDif={mostrarDificultad} proyectoDif={easy} handleImg={mostrarImgProyecto} imgPro={tai} />
        <BotonProyecto handleCLick={mostrarProyecto} proyectoInfo="Boo" proyectoTitulo={proBoo} handleDif={mostrarDificultad} proyectoDif={easy} handleImg={mostrarImgProyecto} imgPro={boo} />
        <BotonProyecto handleCLick={mostrarProyecto} proyectoInfo="Tdj" proyectoTitulo={proTdj} handleDif={mostrarDificultad} proyectoDif={normal} handleImg={mostrarImgProyecto} imgPro={tdj} />
        <BotonProyecto handleCLick={mostrarProyecto} proyectoInfo="Tdr" proyectoTitulo={proTdr} handleDif={mostrarDificultad} proyectoDif={hard} handleImg={mostrarImgProyecto} imgPro={tdr} />
        <BotonProyecto handleCLick={mostrarProyecto} proyectoInfo="Cal" proyectoTitulo={proCal} handleDif={mostrarDificultad} proyectoDif={hard} handleImg={mostrarImgProyecto} imgPro={cal} />

      </div>
      {/* Card */}
      <div className="border-2 rounded-2xl flex flex-col justify-center items-center p-5 md:mx-36 mt-5 border-gray-500 dark:border-slate-200 md:text-justify text-center">
        <h1 className="text-2xl font-bold mb-4">{infoProyecto.proyectoNombre}</h1>
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:gap-10">
          <div className="md:w-7/12 flex flex-col justify-start items-center">
            <img className="max-h-64 max-w-56 rounded-md" src={proyectoImg} />
            <p>{infoProyecto.proyectoDescripcion}</p>
            <button className="my-4 rounded-xl text-amber-600 bg-sky-900 py-1 px-3">
              <a href={infoProyecto.proyectoDemo} target="_Blank">Demo</a>
            </button>
          </div>
          <div className="md:w-4/12 flex flex-col items-center justify-center md:text-justify text-center">
            <p className="font-semibold">{dificultad}</p>
            <img className="my-4 w-32" src={dificultadImg} />
            <div>
              <p className="font-semibold">{tecnologias}</p>
              <p className="text-sm">{infoProyecto.proyectoTecnologias}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default MoreProjects;