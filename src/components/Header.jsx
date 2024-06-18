import { IconLanguage, IconMoonStars } from "@tabler/icons-react";

function Header() {
  return (
    <header>
      {/* Mobile-first */}
      <div className="bg-slate-100 font-mono flex w-auto h-14 justify-between items-center
      md:h-20 lg:h-24">
        <div className="p-3 text-2xl flex items-center">
          {/* Incluir logo pixel art */}
          <p>OvandoCx</p>
        </div>
        <div className="p-3 flex items-center justify-center">
          <button className="p-3">
            <div className="rounded-lg bg-slate-300">
              {/* sustituir por imagen pixel art */}
              <IconLanguage size={36} /> 
            </div>
          </button>
          <button className="mr-4 pl-2">
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