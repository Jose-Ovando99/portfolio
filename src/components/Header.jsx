import { IconLanguage, IconMoonStars } from "@tabler/icons-react";

function Header() {
  return (
    <header>
      {/* Mobile-first */}
      <div className="bg-slate-100 font-mono flex w-auto h-14 md:hidden justify-between items-center">
        <div className="p-3 text-2xl">
          OvandoCx
        </div>
        <div className="p-3">
          <button className="p-3">
            <div className="rounded-lg bg-slate-300">
              <IconLanguage size={36} />
            </div>
          </button>
          <button className="mr-4 pl-2">
            <div className="rounded-lg bg-slate-300">
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