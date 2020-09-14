import Vue from "vue";
import Vuetify from "vuetify/lib";
import pt from "vuetify/es5/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        "green-high": "#569C79",
        primary: "#8BC092",
        green: "#C2DBAF",
        "green-small": "#DBECC0",
        "blue-weak": "#E7F6FE",
        "blue-strong": "#6B8094",
        text: "#333333",
        dark: "#202124",
        "dark-medium": "#000000",
        white: "#FFFFFF",
      },
    },
  },
  lang: {
    locales: { pt },
    current: "pt",
  },
});
