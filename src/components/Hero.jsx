import { useState } from "react";

function Hero() {
  const [valor, setValor] = useState(0)
  
  return (
    <div>
    <div className="text-slate-400">El contador es {valor}</div>
    <button onClick={() => setValor(valor + 1)}>Dame click!:D</button>
    <button onClick={() => setValor(0)}>volvamos a cero</button>
    </div>
  )
}

export default Hero;