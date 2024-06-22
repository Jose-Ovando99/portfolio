import { useLanguage } from "./LanguageContext";
import { IconLanguage } from "@tabler/icons-react";

function BotonIdioma() {
  const { idioma, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage} className="rounded-lg bg-slate-300">
      <IconLanguage size={36} />
    </button>
  );
}

export default BotonIdioma;