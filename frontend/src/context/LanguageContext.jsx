import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({ lang: "en", setLang: () => {}, t: (en, pa) => en });

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("cac-lang") || "en");
  useEffect(() => { localStorage.setItem("cac-lang", lang); }, [lang]);
  const t = (en, pa) => (lang === "pa" ? pa : en);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
