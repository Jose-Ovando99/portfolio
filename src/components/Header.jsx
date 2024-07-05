import { useState, useEffect } from "react";
import { IconMoonStars } from "@tabler/icons-react";
import BotonIdioma from './BotonIdioma';


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
    <header>
      {/* Mobile-first */}
      <div className="bg-slate-200 font-mono flex w-auto h-14 justify-between items-center md:h-20 lg:h-24">
        <div className="p-3 text-2xl flex items-center">
          {/* Incluir logo pixel art */}
          <p>OvandoCx</p>
        </div>
        <div className="p-3 flex items-center justify-center">
          <BotonIdioma />
          <button className="mr-4 pl-2" onClick={handleChangeTheme}>
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