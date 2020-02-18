import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Axios from "axios";
import VueJwtDecode from "vue-jwt-decode";

Vue.prototype.$axios = Axios;
Vue.prototype.$host = "http://localhost:9999";
Vue.prototype.$jwtDecode = VueJwtDecode;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
