import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwtToken: "",
    username: "",
    roles: []
  },
  mutations: {
    setJwtToken(state, token) {
      state.jwtToken = token;
    },
    setUsername(state, username) {
      state.username = username;
    },
    setRoles(state, roles) {
      state.roles = roles["roles"];
    }
  },
  actions: {},
  modules: {},
  getters: {
    username: state => {
      return state.username;
    },
    jwtToken: state => {
      return state.jwtToken;
    },
    roles: state => {
      return state.roles;
    }
  }
});
