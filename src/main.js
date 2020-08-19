import Vue from "vue";
import App from "./app.vue";
import "./services/config/pwa/registerServiceWorker";
import router from "./services/router";
import store from "./services/store";
import vuetify from "./services/config/plugins/vuetify";

/**
 * Styles
 */
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import "./styles/global.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
