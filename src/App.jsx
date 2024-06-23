import Header from "./components/Header";
import Hero from "./components/Hero";
import { LanguageProvider } from "./components/LanguageContext";


function App() {
  
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <p className="text-red-500 text-2xl bg-slate-400 rounded-md">About me</p>
      <p className="text-red-500 text-2xl bg-slate-400 rounded-md">Skills</p>
      <p className="text-red-500 text-2xl bg-slate-400 rounded-md">Some projects</p>
      <p className="text-red-500 text-2xl bg-slate-400 rounded-md">Contacme</p>
      <p className="text-red-500 text-2xl bg-slate-400 rounded-md">Footer</p>
    </LanguageProvider>
  )
}

export default App