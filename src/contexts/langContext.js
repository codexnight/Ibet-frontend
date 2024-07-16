import { createContext, useContext } from "react";
import { language } from "@/utils/i18n";

const langContext = createContext({
  lang: language,
  changeLang: (lang) => {},
});

langContext.displayName = "langContext";

const LangContextConsumer = langContext.Consumer;

export { LangContextConsumer as LangConsumer, langContext, useLangContext };

function useLangContext() {
  return useContext(langContext);
}
