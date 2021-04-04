import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import pages from "./pages";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    pages,
  },
});
