import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <p className="text-red-500 text-2xl bg-slate-400 rounded-md">About me</p>
      <p className="text-red-500 text-2xl bg-slate-400 rounded-md">Skills</p>
      <p className="text-red-500 text-2xl bg-slate-400 rounded-md">Some projects</p>
      <p className="text-red-500 text-2xl bg-slate-400 rounded-md">Contacme</p>
      <p className="text-red-500 text-2xl bg-slate-400 rounded-md">Footer</p>
    </>
  )
}

export default App