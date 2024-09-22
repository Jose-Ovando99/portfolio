import { useState } from "react";
import textos from "../constants/textos";
import { useLanguage } from "./LanguageContext";
import BotonProyecto from "./BotonProyecto";

function MoreProjects() {
  const { idioma } = useLanguage();
  const { masProyectos, proCro, proCit, proTai, proBoo, proTdj, proTdr, proCal } = textos[idioma];

  const [proyectoRef, setProyectoRef] = useState("Cro");

  let infoProyecto = {
    proyectoNombre: textos[idioma][`pro${proyectoRef}`],
    proyectoDescripcion: textos[idioma][`pro${proyectoRef}Des`],
    proyectoDemo: textos[idioma][`pro${proyectoRef}Demo`],
    proyectoTecnologias: textos[idioma][`pro${proyectoRef}Tec`]
  };

  const mostrarProyecto = (referencia) => {
    setProyectoRef(referencia)
  }

  return (

    <section className="pb-40 -mt-20 font-nunito text-slate-900 bg-slate-200 dark:bg-slate-900 dark:text-slate-200 px-8 flex flex-col">
      <p className="text-center font-extrabold text-2xl mx-8">{masProyectos}</p>
      <div className="flex flex-row flex-wrap justify-center items-center gap-2 font-bold my-4">
        {/* botones */}
        <BotonProyecto handleCLick={mostrarProyecto} proyectoInfo="Cro" proyectoTitulo={proCro} />
        <BotonProyecto handleCLick={mostrarProyecto} proyectoInfo="Cit" proyectoTitulo={proCit} />
        <BotonProyecto handleCLick={mostrarProyecto} proyectoInfo="Tai" proyectoTitulo={proTai} />
        <BotonProyecto handleCLick={mostrarProyecto} proyectoInfo="Boo" proyectoTitulo={proBoo} />
        <BotonProyecto handleCLick={mostrarProyecto} proyectoInfo="Tdj" proyectoTitulo={proTdj} />
        <BotonProyecto handleCLick={mostrarProyecto} proyectoInfo="Tdr" proyectoTitulo={proTdr} />
        <BotonProyecto handleCLick={mostrarProyecto} proyectoInfo="Cal" proyectoTitulo={proCal} />

      </div>
      {/* Card */}
      <div className="border-2 rounded-2xl flex flex-col justify-center items-center p-5 md:mx-40 mt-5">
        <h1>{infoProyecto.proyectoNombre}</h1>
        <div className="flex flex-col md:flex-row justify-center items-center border w-full">
          <div className="w-7/12">
            <p className="text-red-400">IMG</p>
            <p>{infoProyecto.proyectoDescripcion}</p>
            <button>
              <a href={infoProyecto.proyectoDemo} target="_Blank">Demo</a>
            </button>
          </div>
          <div className="w-5/12">
            <p>Dificultad</p>
            <div>
              <p>Tecnologias</p>
              <p>{infoProyecto.proyectoTecnologias}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default MoreProjects;