import i18n from "i18next";
import { initReactI18next } from "react-i18next";

function loadTranslations() {
  const localData = localStorage.getItem("translationsData");
  if (localData) {
    return JSON.parse(localData);
  }
  return null;
}

const storedData = loadTranslations();

const defaultData = {
  translations: {
    en: { home: "Home", about: "About", settings: "Settings" }
  }
};

const activeData = storedData || defaultData;

// Prepare resources
const resources = {};
Object.keys(activeData.translations).forEach((lang) => {
  resources[lang] = { translation: activeData.translations[lang] };
});

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
