import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "@/locales/ru.json";
import en from "@/locales/en.json";
import he from "@/locales/he.json";

const resources = {
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
  he: {
    translation: he,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
export const { t, changeLanguage, language } = i18n;
