import { LanguageProvider } from "./components/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import SomeProjects from "./components/SomeProjects";
import Projects from './components/Projects';
import Contacme from "./components/Contacme";
import ContactForm from "./components/ContacForm";


function App() {
  
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <SomeProjects />
      <Projects />
      <Contacme />
    </LanguageProvider>
  )
}

export default App