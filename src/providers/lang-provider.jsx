import { useState, useMemo, useCallback } from "react";
import { langContext } from "@/contexts/langContext";
import { changeLanguage } from "@/utils/i18n";

export default function LangProvider({ children }) {
  const [lang, setLang] = useState("en");

  const changeLang = useCallback((langCode) => {
    changeLanguage(langCode);
    setLang(langCode);
  }, []);

  const value = useMemo(() => ({ lang, changeLang }), [lang, changeLang]);

  // @ts-ignore
  return <langContext.Provider value={value}>{children}</langContext.Provider>;
}
