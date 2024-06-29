import { LanguageProvider } from "./components/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import SomeProjects from "./components/SomeProjects";


function App() {
  
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <SomeProjects />
      <p className="text-red-500 text-2xl bg-slate-400 rounded-md">Contacme</p>
      <p className="text-red-500 text-2xl bg-slate-400 rounded-md">Footer</p>
    </LanguageProvider>
  )
}

export default App