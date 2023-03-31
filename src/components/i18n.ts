import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        hello: "Open",
        FirstPara: "Get your",
        H2: "£20 DISCOUNT",
        SecondPara: "For your first course",
        yes: "YES",
        no: "NO",
      },
    },

    pl: {
      translation: {
        hello: "Otwórz",
        FirstPara: "Odbierz",
        H2: "£20 ZNIŻKI",
        SecondPara: "Na Twój pierwszy kurs",
        yes: "TAK",
        no: "NIE",
      },
    },
  },
  lng: "en",
});

export default i18n;
