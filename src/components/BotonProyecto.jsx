import React from "react";

function BotonProyecto({ proyectoTitulo, proyectoInfo, handleCLick, proyectoDif, handleImg }) {
  return (
    <button onClick={() => {
      handleCLick(proyectoInfo)
      handleImg(proyectoDif)}}
    className="border border-slate-900 bg-neutral-300 rounded-2xl p-2 hover:text-amber-600 md:w-1/4 w-5/12 md:h-16 h-20 focus:font-extrabold focus:text-amber-600 focus:bg-sky-900 dark:bg-slate-900 dark:border-slate-200 transition-all duration-300">
    <p>{proyectoTitulo}</p>
  </button>
  )
}

export default BotonProyecto;