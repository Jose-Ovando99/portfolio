import React from "react";
import textos from "../constants/textos";
import { useLanguage } from "./LanguageContext";

function MoreProjects() {
  const { idioma } = useLanguage();
  const { masProyectos } = textos[idioma];

  return (
    <section className="pb-40 -mt-20 font-nunito text-slate-900 bg-slate-200 dark:bg-slate-900 dark:text-slate-200">
      <p className="text-center font-extrabold text-2xl">{masProyectos}</p>
      <div className="flex flex-row justify-center items-center">
        <p className="text-center">Boton1</p>
        <p className="text-center">Boton2</p>
      </div>
      {/* Card */}
      <div className="border rounded-2xl mx-40 flex flex-col md:flex-row justify-center items-center p-8">
        <div className="w-7/12">
        <h1>Title</h1>
        <p className="text-red-400">IMG</p>
        <p>Description</p>
        </div>
        <div className="w-5/12">
          <p>Dificultad</p>
          <div>
            <p>Tecnololgias</p>
          </div>
        </div>
      </div>
    </section>
  )

}

export default MoreProjects;