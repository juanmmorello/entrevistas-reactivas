import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwtToken: ""
  },
  mutations: {
    setJwtToken(state, token) {
      state.jwtToken = token;
    }
  },
  actions: {},
  modules: {}
});
