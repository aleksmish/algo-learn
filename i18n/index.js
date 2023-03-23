import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationRu = {
  "Learn Data Structures and Algorithms interactively":
    "Изучайте структуры данных и алгоритмы интерактивно",
  "Data Structures": "Структуры Данных",
  "Data structures are ways of organizing and storing data efficiently. Examples include arrays, linked lists, trees, and graphs.":
    "Структуры данных — это способы эффективной организации и хранения данных. Примеры включают массивы, связанные списки, деревья и графики.",
};

export const languages = ["english", "russian"];

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "english",
  fallbackLng: "english",
  interpolation: { escapeValue: false },
  resources: {
    russian: { translation: translationRu },
  },
});

export default i18n;
