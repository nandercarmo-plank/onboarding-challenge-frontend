import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./languages/en.json";
import ptBR from "./languages/pt_BR.json";

i18n.use(initReactI18next).init({
	resources: {
		en: { ...en },
		pt: { ...ptBR },
	},
	lng: "en",
});
