import { useState, useEffect } from "react";
import BotonIdioma from './BotonIdioma';
import { IconMoonStars } from "@tabler/icons-react";
import logo from '../assets/LogoOvando.png';


function Header() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme == 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme == 'light' ? 'dark' : 'light')
  }

  return (
    <header className="bg-slate-200 dark:bg-slate-900">
      {/* Mobile-first */}
      <div className="font-mono flex w-auto h-14 justify-between items-center md:h-16 2xl:mx-24">
        <div className="p-3 text-2xl flex items-center">
          {/* Incluir logo pixel art */}
          <img src={logo} alt="Logo Ovando" className="md:w-2/5 w-2/3 mt-2" />
        </div>
        <div className="p-3 flex items-center justify-center">
          <BotonIdioma />
          <button className="mr-4 pl-4" onClick={handleChangeTheme}>
            <div className="rounded-lg bg-slate-300">
              {/* sustituir por imagen pixel art */}
              <IconMoonStars size={36} />
            </div>
          </button>
        </div>
      </div>
      {/* Desktop version */}

    </header>
  )
}

export default Header;