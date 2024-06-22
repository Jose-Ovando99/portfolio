import React, { useState, createContext, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [idioma, setIdioma] = useState('es');

  const toggleLanguage = () => {
    setIdioma(idioma === 'es' ? 'en' : 'es');
  };

  return (
    <LanguageContext.Provider value={{ idioma, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};